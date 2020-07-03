<template>
	<view class="app-detail">
		<!-- 商品轮播图 begin -->
		<swiper class="pic_sw" autoplay indicator-dots indicator-color circular>
			<swiper-item class="pic_switem" v-for="pics_item in goods_details.pics" :key="pics_item.pics_id">
				<image class="pic_img" :src="pics_item.pics_mid" mode="widthFix" @click="handlePrevewImg" :data-curimg="pics_item.pics_mid"></image>
			</swiper-item>
		</swiper>
		<!-- 商品轮播图 end -->
		 <!-- 简介 begin -->
		 <view class="goods_desc wrap">
		  <view class="price">{{goods_details.goods_price}}<text class="txt_jf">积分</text></view>
		  <view class="desc">
		    <view class="tit">
		    {{goods_details.goods_name}}
		    </view>
		    <view class="collect">
		    <text class="iconfont icon-shoucang1"></text>
		      <view class="coll_font">收藏</view>
		    </view>
		  </view>
		 </view>
		 <!-- 简介 end -->
		  <!-- 图文详情 begin -->
		 <view class="goods_graphic">
		   <view class="part_tit">图文详情</view>
		   <rich-text :nodes="goods_details.goods_introduce"></rich-text>
		 </view>
		   <!-- 图文详情 end -->
		     <!-- 底部工具栏 begin -->
		     <view class="btm_tools">
		       <view class="tool_item contact">
		         <view class="iconfont icon-zhengzhouyinhangAPPtubiaodiergaolunkuohuachunse-28"></view>
		         <view>联系客服</view>
		         <button open-type="contact"></button>
		       </view>
		       <view class="tool_item share">
		         <view class="iconfont icon-fenxiang"></view>
		         <view>分享</view>
		         <button open-type="share"></button>
		       </view>
		    
		       <navigator class="tool_item chart" url="/pages/cart/cart" open-type="switchTab" >
		         <view class="iconfont icon-gouwuche"></view>
		         <view>购物车</view>
		       </navigator>
		      
		       <view class="tool_item btn_cart" @click="handleCartAdd">
		         加入购物车
		       </view>
		        <view class="tool_item btn_buy" @click="handleBuyNow">
		         立即兑换
		       </view>
		     </view>
		     <!-- 底部工具栏 end -->
	</view>
</template>

<script>

	export default {
		data() {
			return {
				goods_details: [],
				goods_id: 0,
				address: ''
			};
		},
		onLoad(options) {
			//获取商品id

			this.goods_id = options.goods_id;

			//调用获取信息方法
			this.getGoodsDetails(options.goods_id);
		},
		methods: {
			async getGoodsDetails(goods_id) {
				const res = await this.$myRequest({
					url: '/goods/detail',
					data: {
						goods_id
					}
				})
				this.goods_details = res.data.message;
				console.log(res);
			},
			handleCartAdd(){
				//获取缓存 购物车中的数组
				    let cart=uni.getStorageSync('cart')||[];
					console.log(cart);
				    //判断当前商品存不存在于购物车中
				    let index=cart.findIndex(v=>v.goods_id===this.goods_details.goods_id);
				    if(index===-1){
						
				      //不存在的话，添加进购物车
				      this.goods_details.num=1;
				      this.goods_details.checked=false;
					  
				      cart.push(this.goods_details);
				      
				    }
				    else{
							console.log(index);
				      //已经存在，num++
				      cart[index].num++;
				    }
				    uni.setStorageSync('cart', cart);
				    uni.showToast({
				      title: '加入购物车成功！',
				      icon:'success',
				      mask:true,
				    })
				     //改变tabbar数量
				     // this.initCartNum();
					 getApp().initCartNum();
					 

			}
		}

	}
</script>

<style lang="scss">
	.app-detail {
		padding-bottom: 90rpx;
		.pic_sw {
			height: 75vw;
			text-align: center;
			.pic_switem{
				width: 100%;
				height: 100%;

				.pic_img {
					width: 75%;
				}
			}
		}
		.goods_desc{
			.desc{
				color: #666;
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				.tit{
					flex: 8;
					display: -webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
					overflow: hidden;
					
				}
				.collect{
					flex: 2;
					margin-left: 20rpx;
					border-left: 1rpx solid #efefef;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.goods_graphic{
			border-top: 10rpx solid #efefef;
		}
		.btm_tools{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 90rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #666;
			font-size: 24rpx;
			background: #fff;
			border-top: 1px solid #efefef;
			.tool_item{
				flex: 2;
				display: flex;
				flex-direction:column;
				justify-content: center;
				align-items: center;
			}
			.btn_buy{
				flex: 3;
				color: #fff;
				height: 100%;
				background: var(--themeColor);
			}
			.btn_cart{
				flex: 3;
				color: #fff;
				height: 100%;
				background: #ffa500;
			}
		}
	}
</style>
