<template>
	<view class="app-pay">
		<!-- 收货地址块 begin -->
		<view class="address_con">
			<view class="adrs_info">
				<view>
					收货人：{{address.userName}}
				</view>
				<view class="adrs_phone">
					{{address.telNumber}}
				</view>

			</view>
			<view class="adrs_allinfo">
				{{address.all}}
			</view>


		</view>
		<!-- 收货地址块 end -->
		<!-- 结算列表 begin-->
		<view class="part_tit">结算列表</view>
		<view class="cart_main">
			<view>
				<view class="cart_item" v-for="citem in cart" :key="citem[idx].id" :data-index="citem.goods_id">

					<view class="cart_info">

						<view class="pic">
							<navigator>
								<image :src="citem.pics[0].pics_sma" mode="widthFix"></image>
							</navigator>
						</view>

						<view class="cont">

							<view class="name">
								<navigator>
									{{citem.goods_name}}
								</navigator>
							</view>

							<view class="price_set">
								<view class="price">
									{{citem.goods_price}}<text class="txt_jf">积分</text>
								</view>
								<view class="step">

									<view class="num">X {{citem.num}}</view>

								</view>
							</view>
						</view>


					</view>
				</view>
			</view>

		</view>
		<!-- 计算列表 end-->
		<!-- 结算模块 begin -->
		<view class="cart_settlement">
			<view class="settle_cont">
				<view class="font">合计:</view>
				<view class="total_price">
					<view class="price">
						{{totalPrice}}<text class="txt_jf">积分</text>
					</view>
					<text class="txt_tips">已包含运费</text>
				</view>
				<button type="warn" @click="handleOrderPay">支付({{sum}})</button>
			</view>
		</view>
		<!--结算模块 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: [],
				cart: {},
				//总数量
				sum: 0,
				//总价格
				totalPrice: 0,
				userinfo: [],
				settle_type:""
			};
		},
		onLoad(options){
			var that = this;
			let type = options.type ||'';
			that.settle_type = type;
			// console.log(type);
			
			//获取缓存里有没有地址栏
			if (uni.getStorageSync('address')) {
				let addressobj = uni.getStorageSync('address');
				addressobj.all = uni.getStorageSync('address').provinceName + uni.getStorageSync('address').cityName + uni.getStorageSync(
					'address').countyName + uni.getStorageSync('address').detailInfo;

				that.address = addressobj;
			}
			let userinfo = uni.getStorageSync('userinfo');
			that.userinfo = userinfo;

			that.CalcPrice();
		},
		methods: {
			//点击获取收货地址
			handleChooseAdrs() {
				var address;

				//获取用户对小程序所授予的 获取地址权限状态 scope
				//假设用户点击获取地址的提示框，确定 authSetting scope.address  scope值true 直接调用收货地址
				//假设用户点击获取收货地址的提示框 取消
				//scope值 false
				//诱导用户自己打开授权设置页面（uni.opensetting）当用户重新给予
				//获取地址权限的权限 

				uni.getSetting({
					success: (result) => {
						const scopeAddress = result.authSetting["scope.address"];
						if (scopeAddress === true || scopeAddress === undefined) {
							uni.chooseAddress({
								success: (res) => {
									console.log(res)
									uni.setStorageSync('address', res)
								},
							})


						} else {
							uni.openSetting({
								success: (re) => {
									uni.chooseAddress({
										success: (r) => {
											uni.setStorageSync('address', r)
										},
									})

								}
							})
						}

					}
				})



			},

			//获取缓存中的数据，并计算价格并存入data和缓存中
			CalcPrice() {
				var that = this;
				let cart = {};
				//获取缓存中的购物车商品列表
				if (this.settle_type == 'buynow') {
					cart = uni.getStorageSync('buy_now');
				} else {
					cart = uni.getStorageSync('cart').filter(v => v.checked);
				}
				//总价格 总数量
				let totalprice = 0;
				let totalsum = 0;
				if (cart.length != 0) {
					let allChecked = true;
					cart.forEach(v => {
						if (v.checked) {
							totalprice += v.goods_price * v.num;
							totalsum += v.num;
						} else {
							allChecked = false;
						}
					})

					this.cart = cart;
					this.totalPrice = totalprice;
					this.sum = totalsum;


				} else {

					that.totalPrice = 0;
					that.sum = 0;

				}
			},
			//点击支付按钮创建订单信息
			handleOrderPay() {
				let that = this;
				let userinfo = uni.getStorageSync('userinfo');
				if (!userinfo) {
					uni.navigateTo({
						url: '/pages/auth/auth'
					});

				} else {
					let userinfo = this.userinfo;
					//余额
					let money = userinfo.money;
					//总价
					let price = this.totalPrice;
					//足够支付
					if (money >= price) {
						money -= price;
						//总花费
						userinfo.cost += price;
						//剩余money
						userinfo.money = money;

						this.userinfo = userinfo;

						let oldcart = {};
						//获取缓存中的购物车商品列表
						let cart = [];
						if (that.settle_type == 'buynow') {
							oldcart = uni.getStorageSync('buy_now');
							cart = oldcart;
							let orders = [];
							//把已付款的信息缓存到订单列表中
							if (uni.getStorageSync('orders')) {
								let ordersync = uni.getStorageSync('buy_now');
								ordersync.money = ordersync.num * ordersync.goods_price;
								orders = ordersync;
							} else {
								uni.setStorageSync('orders', [])
							}
							orders.push(cart[0]);
							orders.money = orders.goods_price * orders.num;
							uni.setStorageSync('orders', orders);
							app.recordIntegral(orders.money, "-", "兑换商品支出");
						} else {
							oldcart = uni.getStorageSync('cart').filter(v => v.checked);
							cart = oldcart.filter(v => v.checked);
							//把已付款的信息缓存到订单列表中
							var orderArrary_temp = [];
							var orders_temp = uni.getStorageSync('orders');
							if (orders_temp != undefined && orders_temp != "") {
								orders_temp.push(cart[0]);

							} else {

								orders_temp = [cart[0]];

							}

							orders_temp[(orders_temp.length) - 1].money = cart[0].goods_price * cart[0].num;
							orderArrary_temp = orders_temp;
							uni.setStorageSync('orders', orderArrary_temp);
							
							getApp().recordIntegral(orders_temp[(orders_temp.length) - 1].money, "-", "兑换商品支出");
						}



						//删除缓存中的已付款的商品信息
						oldcart.map((v, i) => {
							cart.forEach((cv, ci) => {
								if (v.goods_id === cv.goods_id) {
									oldcart.splice(i, 1);
								}
							})
						})

						uni.setStorageSync('userinfo', userinfo);

						if (that.settle_type != 'buynow') {
							uni.setStorageSync('cart', oldcart)
						} else {
							uni.setStorageSync('buy_now', {})
						}
						uni.showToast({
							title: '购买成功',
						});
						setTimeout(function() {
							uni.redirectTo({

								url: '/pages/order/order',
							})
							
								that.cart=[]
							
						}, 1500)

					} else {
						uni.showToast({
							icon: 'none',
							title: '余额不足!',
						});
						setTimeout(function() {
							uni.navigateBack({
								delta: 1,
								success: (res) => {},
								fail: (res) => {},
								complete: (res) => {},
							})
						}, 1500)
					}

				}
			},
		}
	}
</script>

<style lang="scss">
.app-pay{
    margin: 20rpx 0;
    padding-bottom: 90rpx;
  

    .address_con{
        display: flex;
        flex-direction: column;
        padding: 20rpx;
        border-bottom: 1px solid var(--themeColor);
        .adrs_info{
            flex:5;
            display: flex;
            justify-content: space-between;
            // align-items: center;
        }
        .adrs_allinfo{
            // border-top: 1px solid #efefef;
            padding-top: 20rpx;
        }
        .adrs_phone{
            flex:2;
            text-align: right;
        }
    }

    .cart_main{
        border-top: 1px solid var(--themeColor);
        .cart_item{
            margin: 20rpx;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #efefef;
           
            .cart_info{
                flex:5;
                display: flex;
                justify-content: space-between;
               
                   
                    .pic{
                        flex: 2;
                        margin-right: 30rpx;
                        image{
                          width: 100%;
                          height: 100%;
                        }

                    }
                    .cont{
                        flex:5;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 30rpx;
                        .name{
                            display: -webkit-box;
                            overflow: hidden;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        .price_set{
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                            .price{
                                flex: 2;
                                text-align: left;
                                color: var(--themeColor);
                                font-weight: bold;
                                font-size: 32rpx;
                            }
                            .step{
                                flex: 1;
                                text-align: right;
                                display: flex;
                                justify-content: flex-end;
                                
                            }
                        }
                    }
                
            }
        }

      

    }
    .cart_settlement{
        width: 100%;
        height: 100rpx;
        background: #fff;
        border-top: 1px solid #efefef;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content:flex-end;
        align-items: center;
       
        .settle_cont{
            height: 100%;
            flex: 0.8;
            display: flex;
            justify-content:flex-end;
            align-items: center;
            .font{
                flex: 1;
                text-align: right;
            }
            .total_price{
                flex: 1.2;
                text-align: right;
                margin-right: 20rpx;
            }
            button{
                flex: 1;
                color: #fff;
                font-size: 32rpx;
                font-weight: normal;
                border-radius: 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--themeColor);
            }
        }
    }
}
</style>
