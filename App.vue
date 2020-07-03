<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {

			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			initCartNum() {

				if (uni.getStorageSync('cart')) {
					let num = 0;
					uni.getStorageSync('cart').forEach((v, i) => {
						num += v.num;
					})
					uni.setStorageSync('cartnum', num);
				}
				
			},
			setCartBar() {
				let num = uni.getStorageSync('cartnum');
				if (num > 0) {

					uni.setTabBarBadge({
						index: 2,
						text: '' + num + ''
					})
				} else {
					uni.hideTabBarRedDot({
						index: 2
					})
				}
			},
			recordIntegral(num, calctype, info) {
				const obj = {
					num,
					calctype,
					info
				}
				const integral = uni.getStorageSync('integral');
				if (integral.length > 0) {
					integral.push(obj);
					uni.setStorageSync('integral', integral)
				} else {
					const obj_arrary = [obj];
					uni.setStorageSync('integral', obj_arrary)
				}
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("styles/font-icon.css");

	/* //小程序中不支持通配符 “*” 自己配置*/
	html,
	body,
	page,
	view,
	text,
	swiper,
	swiper-item,
	image,
	navigator {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	/* 主题颜色 通过变量来实现
	  1.less中存在变量这个知识
	  2.原生的css和wxss也支持变量
	 */
	html,
	body,
	page {
		font-size: 28rpx;
		line-height: 40rpx;
		/* 定义主题颜色 */
		--themeColor: #eb4450;
		/* 定义统一的字体大小 
	      假设设计稿宽度为375px:
	      1px=2rpx;
	      14px=28rpx;
	      假设设计稿宽度为750px;
	      1px=1rpx;
	      14px=14rpx;
	    */

	}

	.iconfont {
		font-size: 36rpx;
	}

	.wrapper {
		padding: 30rpx 20rpx;
		box-sizing: border-box;
	}

	.wrap {
		padding: 20rpx;
		box-sizing: border-box;
	}

	image {
		width: 100%;
	}

	/* 暂无数据 */
	.empty_cont {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		color: #666;
		margin: 30rpx;
	}

	.txt_jf {
		color: var(--themeColor);
		font-size: 24rpx;
		margin-left: 5rpx;
	}

	.price {
		font-size: 32rpx;
		/* font-weight: bold; */
		color: var(--themeColor);

	}

	.part_tit {
		/* background: #f5f5f5; */
		color: var(--themeColor);
		font-size: 36rpx;
		font-weight: bold;
		padding: 20rpx;
	}

	checkbox-group {
		margin-left: 15rpx;
	}
</style>
