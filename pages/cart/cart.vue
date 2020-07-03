<template>
	<view class="app-cart">
		<!-- 收货地址块 begin -->
		<view class="address_btn" v-if="!address.userName">
			<button type="primary" plain @click="handleChooseAdrs">+ 获取收货地址</button>
		</view>
		<view v-else class="address_con">
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
		<!-- 购物车列表 begin-->
		<view class="part_tit">购物车</view>
		<view class="cart_main">
			<!-- #ifdef MP-WEIXIN -->
			<view v-if="carts[0].goods_id">
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view v-if="carts">
					<!-- #endif -->
					<view class="cart_item" v-for="(citem,idx) in carts" :key="citem.goods_id" :data-index="citem.goods_id">
						<view class="cart_checks">
							<checkbox-group @click="handleItemChange">
								<checkbox :checked="citem.checked" :data-id="citem.goods_id">
								</checkbox>
							</checkbox-group>
						</view>
						<view class="cart_info">
							<view class="pic">
								<navigator>
									<image :src="citem.pics[0].pics_sma" mode="widthFix"></image>
								</navigator>
							</view>
							<view class="cont">
								<view class="name">
									<navigator :url="'/pages/goods_detail/goods_detail?goods_id='+citem.goods_id">
										{{citem.goods_name}}
									</navigator>
								</view>

								<view class="price_set">
									<view class="price">
										{{citem.goods_price}}<text class="txt_jf">积分</text>
									</view>
									<view class="step">
										<view class="sub calcbtn" @click="CalcCartNum" data-calctype="sub" :data-cartid="citem.goods_id">-</view>
										<view class="num">{{citem.num}}</view>
										<view class="add calcbtn" @click="CalcCartNum" data-calctype="add" :data-cartid="citem.goods_id">+</view>
									</view>
								</view>
							</view>


						</view>
					</view>
				</view>
				<view class="empty_cart" v-else> 购物车为空~ </view>
			</view>
			<!-- 购物车列表 end-->
			<!-- 购物车结算模块 begin -->
			<view class="cart_settlement">
				<view class="all_check">
					<checkbox-group @click="allChecked">
						<checkbox :color="checkColor" :checked="allchecked" :disabled="disable"></checkbox>全选
					</checkbox-group>
				</view>
				<view class="settle_cont">
					<view class="font">合计:</view>
					<view class="total_price">
						<view class="price">
							{{totalPrice}}<text class="txt_jf">积分</text>
						</view>
						<text class="txt_tips">已包含运费</text>
					</view>
					<button type="warn" @click="handlePay">结算({{sum}})</button>
				</view>
			</view>
			<!-- 购物车结算模块 end -->
		</view>
</template>

<script>
	export default {
		data() {
			return {
				address: {},
				//购物车数据
				carts: [],
				checkColor: 'var(--themeColor)',
				//总数量
				sum: 0,
				//总价格
				totalPrice: 0,
				allchecked: false,
				disable: false
			}
		},
		onLoad() {
			this.initPagesData();
		},
		onShow() {
			this.initPagesData();
		},

		methods: {
			//点击获取用户地址信息
			handleChooseAdrs() {
				//获取用户对小程序所授予的 获取地址权限状态 scope
				//假设用户点击获取地址的提示框，确定 authSetting scope.address  scope值true 直接调用收货地址
				//假设用户点击获取收货地址的提示框 取消
				//scope值 false
				//诱导用户自己打开授权设置页面（wx.opensetting）当用户重新给予
				//获取地址权限的权限 
				uni.getSetting({
					success(res) {
						console.log(res.authSetting['scope.address'])
						const authSetting = res.authSetting;
						if (authSetting['scope.address'] === true) {
							//此处是有授权获取地址的情况
							uni.chooseAddress({
								success(res) {
									// console.log('有授权-授权后-获取的地址' + res)
									uni.setStorageSync('address', res)
								}
							})
						} else {
							//没有授权获取地址
							uni.authorize({
								scope: 'scope.address',
								success() {
									uni.chooseAddress({
										success(res) {
											// console.log('无授权-授权后-获取的地址' + res)
											uni.setStorageSync('address', res)
										}
									})
								},
								fail() {
									uni.openSetting({
										success(res) {
											uni.chooseAddress({
												success: (r) => {
													uni.setStorageSync('address', r)
												},
											})
										}
									});
								}
							})
						}


					}
				})
				this.bindAdrsInfo();


			},
			//绑定地址
			bindAdrsInfo() {
				let addressobj = uni.getStorageSync('address');
				if (addressobj) {

					addressobj.all = addressobj.provinceName + addressobj.cityName + addressobj.countyName + addressobj.detailInfo;
					this.address = addressobj;
				}
			},
			//数量更改函数
			CalcCartNum(e) {
				var that = this;
				const type = e.target.dataset.calctype;
				const cid = e.target.dataset.cartid;
				let cart_copy = this.carts;
				let index = cart_copy.findIndex(v => (v.goods_id == cid));
				console.log(index);
				let cnum = cart_copy[index].num;
				if (type === "sub") {
					if (cnum > 1) {
						cnum--;
					} else {
						uni.showModal({
							title: '提示',
							content: '是否要删除该商品？',
							success(res) {
								if (res.confirm) {
									cart_copy.splice(index, 1);
									that.initCart(cart_copy);
									console.log(cart_copy);
									//改变tabbar数量
									getApp().initCartNum();
									getApp().setCartBar();
								} else if (res.cancel) {}
							}
						})
					}

				} else if (type === "add") {
					cnum++;
					console.log(cid + "点击了加法")
				}

				cart_copy[index].num = cnum;
				that.initCart(cart_copy);
				//改变tabbar数量
				getApp().initCartNum();
				getApp().setCartBar();
			},
			//商品列表选择框改变函数
			handleItemChange(e) {
				let id = e.target.dataset.id;
				let cart_copy = this.carts;
				cart_copy.forEach(v => {
				
					if (v.goods_id == id) {
						v.checked = !v.checked;
					}
				})
				this.initCart(cart_copy);

			},
			//全选反选函数
			allChecked() {
				let allChecked = !this.allchecked;
				let cart_copy = this.carts;
		
				if (allChecked) {
					//全选选中的时候
					cart_copy.forEach(v => {
						v.checked = true
					})
				} else {
					//全选反选的时候
					cart_copy.forEach(v => {
						v.checked = false
					})
				}

				this.allchecked = allChecked;

				this.initCart(cart_copy);
			},
			//获取缓存中的数据，并计算价格并存入data和缓存中
			CalcPrice() {
				//获取缓存中的购物车商品列表
				let cart = uni.getStorageSync('cart');
				
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
					this.carts = cart;
					this.allchecked = allChecked;
					this.totalPrice = totalprice;
					this.sum = totalsum;

				} else {
					this.allchecked = false;
					this.totalPrice = 0;
					this.sum = 0;
					this.disable = true;
				}
			},
			//结算
			handlePay() {
				let {
					address,
					sum
				} = this;
				// console.log(sum);
				if (sum <= 0) {
					uni.showToast({
						icon: 'none',
						title: '没有选中商品',
					})
				} else if (!address.userName) {
					uni.showToast({
						icon: 'none',
						title: '您还没收货地址',
					})
				} else {
					//跳转到支付页面
					uni.navigateTo({
						url: '/pages/pay/pay?type="cart"',
					})
				}
			},
			//initCart 重新初始化数组的信息
			initCart(cart_copy) {
				this.carts = cart_copy;

				uni.setStorageSync('cart', cart_copy);
				//重新计算价格
				this.CalcPrice();
			},
			initPagesData(){
				const cart = uni.getStorageSync('cart');
						
				this.carts = cart;
				// #ifdef MP-WEIXIN
				this.bindAdrsInfo();
				// #endif
				//设置购物车右上角数量
				getApp().initCartNum();
				getApp().setCartBar();
				//计算价格及全选状态等
				this.CalcPrice();
			}
		}
	}
</script>

<style lang="scss">
	.app-cart {
		margin: 20rpx 0;

		.address_btn {
			width: 100%;

			button {
				width: 80%;
				font-weight: normal;
			}
		}

		.address_con {
			display: flex;
			flex-direction: column;
			padding: 20rpx;
			border-bottom: 1px solid var(--themeColor);

			.adrs_info {
				flex: 5;
				display: flex;
				justify-content: space-between;
				// align-items: center;
			}

			.adrs_allinfo {
				// border-top: 1px solid #efefef;
				padding-top: 20rpx;
			}

			.adrs_phone {
				flex: 2;
				text-align: right;
			}
		}

		.cart_main {
			border-top: 1px solid var(--themeColor);
			padding-bottom: 50rpx;

			.cart_item {
				margin: 20rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #efefef;

				.cart_checks {
					flex: 1;
					justify-content: center;
					align-items: center;
					display: flex;
				}

				.cart_info {
					flex: 5;
					display: flex;
					justify-content: space-between;


					.pic {
						flex: 2;
						margin-right: 30rpx;

						image {
							width: 100%;
							height: 100%;
						}

					}

					.cont {
						flex: 5;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 30rpx;

						.name {
							display: -webkit-box;
							overflow: hidden;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}

						.price_set {
							display: flex;
							width: 100%;
							justify-content: space-between;

							.price {
								flex: 2;
								text-align: left;
								color: var(--themeColor);
								font-weight: bold;
								font-size: 32rpx;
							}

							.step {
								flex: 1;
								text-align: right;
								display: flex;
								justify-content: space-between;

								.calcbtn {
									background: #fff;
									border: 1px solid #efefef;
									display: flex;
									width: 40rpx;
									height: 40rpx;
									line-height: 40rpx;
									justify-content: center;
									align-items: center;
								}
							}
						}
					}

				}
			}

			.empty_cart {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 32rpx;
				color: #666;
				margin: 30rpx;
			}

		}

		.cart_settlement {
			width: 100%;
			height: 100rpx;
			background: #fff;
			border-top: 1px solid #efefef;
			position: fixed;
			bottom: 100rpx;
			// #ifdef MP-WEIXIN
			bottom: 0;
			// #endif
			left: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.all_check {
				flex: 2;
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}

			.settle_cont {
				height: 100%;
				flex: 6;
				display: flex;
				justify-content: flex-end;
				align-items: center;

				.font {
					flex: 2;
					text-align: right;
				}

				.total_price {
					flex: 4;
					color: #666;
					text-align: right;
					margin-right: 20rpx;
					font-size: 26rpx;
				}

				button {
					flex: 3;
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
