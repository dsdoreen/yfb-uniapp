<template>
	<view class="app-auth">
		<button type="primary" plain open-type="getUserInfo" @getuserinfo="handleGetUserInfo">获取授权</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleGetUserInfo(e) {

				console.log(e);
				const {
					encryptedData,
					rawData,
					iv,
					signature
				} = e.detail;
				uni.login({
					timeout: 10000,
					success(res) {
						console.log(res);
						const {
							code
						} = res;
						console.log(e)
						let userinfo = e.detail.userInfo;
						userinfo.money = parseInt(Math.random() * 13579);
						//记录积分信息
						getApp().recordIntegral(userinfo.money, "+", "首次登录获得初始奖励积分")
						userinfo.cost = 0;
						uni.setStorageSync('userinfo', e.detail.userInfo);
						uni.showToast({
							title: '登录成功',

						})
						setTimeout(function() {
							uni.navigateBack({
								delta: 1,

							})
						}, 1500);


					}
				})
			},
		}
	}
</script>

<style lang="scss">
	button {
		width: 75%;
		margin-top: 40rpx;
		font-weight: normal;
	}
</style>
