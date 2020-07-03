<template>
	<view class="app-user">
		<!-- 头部区域 begin -->
		<view class="head_warp">
			<!-- 头部背景 begin -->
			<view class="head" v-if="userInfo.nickName">
				<image class="bg" :src="userInfo.avatarUrl" mode="widthFix"></image>
				<view class="user_icon">
					<image :src="userInfo.avatarUrl" mode="widthFix"></image>
					<view class="user_name">{{userInfo.nickName}}</view>
				</view>
			</view>
			<!-- 头部背景 end -->
			<!-- 登录按钮 begin -->
			<view class="sigin_btn" v-else>
				<button type="primary" plain open-type="getUserInfo" @getuserinfo="handleGetUserInfo">点击登录</button>
			</view>
			<!-- 登录按钮 end -->
		</view>
		<!-- 头部区域 begin -->
		<!-- 用户信息内容区 begin -->
		<view class="user_content">
			<view class="user_main">
				<!-- 历史足迹 begin-->
				<view class="main_box">
					<view class="handle items">

						<navigator url="/pages/integral/integral">
							<view class="num">{{userInfo.money}}</view>
							<view>我的积分</view>
						</navigator>
						<navigator url="/pages/order/order">
							<view class="num">{{userInfo.cost}}</view>
							<view>已兑换积分</view>
						</navigator>
						<navigator url="/pages/collect/collect">
							<view class="num">0</view>
							<view>收藏的商品</view>
						</navigator>
					</view>
				</view>
				<!-- 历史足迹 end-->
				<!-- 订单 begin-->
				<view class="main_box">
					<view class="tit">
						<navigator url="/pages/order/order">
							我的订单
						</navigator>
					</view>
					<view class="apply items">

						<navigator url="/pages/order/order?type=0">
							<view class="iconfont icon-dingdan"></view>
							<view>全部订单</view>
						</navigator>
						<navigator url="/pages/order/order?type=1">
							<view class="iconfont icon-dizhi"></view>
							<view>待收货</view>
						</navigator>
						<navigator url="/pages/order/order?type=2">
							<view class="iconfont icon-tuikuan"></view>
							<view>退款/退货</view>
						</navigator>
					</view>
				</view>
				<!-- 订单 end-->
				<!-- 收货地址 begin-->
				<view class="main_box address_warp">
					<view bindtap="handleChooseAdrs">
						收货地址管理
					</view>
				</view>
				<!-- 收货地址 end-->
				<!-- 应用信息 begin-->
				<view class="main_box appinfo_warp">
					<view class="appinfo_item appinfo_contact">
						<text>联系客服</text>
						<text>400-618-4000</text>
					</view>
					<view class="appinfo_item">
						<button open-type="feedback">
							意见反馈
						</button>
					</view>

					<view class="appinfo_item">
						关于我们
					</view>
				</view>
				<!-- 应用信息 end-->
				<!-- 推荐 begin-->
				<view class="main_box share_warp">
					<button open-type="share">把应用推荐给其他人</button>
				</view>
				<!-- 推荐 end-->
			</view>
		</view>
		<!-- 用户信息内容区 end -->
	</view>
</template>

<script>
	const app = getApp();
	export default {
		data() {
			return {
				userInfo: {
					cost: 0,
					money: 0
				}
			}
		},
		onLoad() {
			let userinfo = uni.getStorageSync('userinfo');
			if (userinfo.nickName) {

				this.userInfo = userinfo

			}
		},
		methods: {
			// 登录回调函数
			handleGetUserInfo(e) {
				var that = this;
				uni.showLoading({
					title: '登录中...',
				})

				let userinfo = e.detail.userInfo;
				userinfo.money = parseInt(Math.random() * 13695);
				app.recordIntegral(userinfo.money, "+", "首次登录获得初始奖励积分");
				userinfo.cost = 0;
				setTimeout(function() {
					uni.setStorageSync('userinfo', userinfo);
					if (userinfo.nickName) {

						that.userInfo = userinfo;

					}
					uni.hideLoading();
				}, 1000)


			},
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
		}
	}
</script>

<style lang="scss">
	page{
		background: #efefef;
	}
	.app-user {
		.head_warp {
			height: 45vh;
			overflow: hidden;
			position: relative;

			.sigin_btn {
				height: 100%;
				background: var(--themeColor);
				display: flex;
				justify-content: center;
				align-items: center;
				
				button {
					color: #fff;
					border: 1px solid #fff;
					font-weight: normal;
				}
			}

			.bg {
				width: 100%;
				filter: blur(10px);
				position: relative;
				top: 0;
				left: 0;
			}

			.user_icon {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;

				image {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					margin-bottom: 60rpx;
				}
			}
		}

		.user_content {
			width: 90%;
			margin: -50rpx auto 0;
			position: relative;

			.user_main {
				.main_box {
					color: #666;
					margin-bottom: 40rpx;

					.tit {
						padding: 20rpx;
						background: #fff;
						border-bottom: 1px solid #efefef;
					}
				}

				.items {
					display: flex;
					justify-content: center;
					align-items: center;
					background: #fff;
					padding: 10rpx 0;

					navigator {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						color: #666;

						.num {
							color: var(--themeColor);
						}

						.iconfont {
							color: var(--themeColor);
							font-size: 40rpx;
						}
					}
				}

				.address_warp {
					padding: 20rpx;
					background: #fff;
					// margin-bottom: 20rpx;
				}

				.appinfo_warp {

					.appinfo_item {
						padding: 20rpx;
						background: #fff;
						border-bottom: 1px solid #efefef;

						display: flex;
						justify-content: space-between;

						button {
							padding: 0;
							margin: 0;
							text-align: left;
							width: 100%;
							font-size: 28rpx;
							color: #666;
							font-weight: 400;
							background: #fff;
							border-radius: 0;
							border: 0;
							&::after{
								border: 0;
							}
						}
					}
				}

				.share_warp {
					padding: 20rpx;
					background: #fff;
					margin-bottom: 20rpx;
					button {
						background: #fff;
						color: #666;
						height: auto;
						font-weight: normal;
						font-size: 28rpx;
						text-align: left;
						padding: 0;
						margin: 0;
						&::after{
							border: 0;
						}
					}
				}
			}

		}

	}
</style>
