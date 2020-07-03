<template>
	<view class="app-category">
		<!-- 搜索组件 begin-->
		<search-input />
		<!-- 搜索组件 end-->
		<!-- 分类 begin-->
		<view class="category_container">
			<!-- 左侧菜单栏 begin-->
			<scroll-view scroll-y class="left_menu">
				<view v-for="(l_item,index) in LeftMenus" :key="l_item.id" @click="changeCate" :class="index==CurIndex?'cur':''"
				 :data-index="index">
					{{l_item.name}}
				</view>
			</scroll-view>
			<!-- 左侧菜单栏 end-->
			<!-- 右侧商品分类 begin-->
			<scroll-view scroll-top="ScrollTop" scroll-y class="right_content">
				<!-- 商品类分组 begin -->
				<view class="goods_group" v-for="r_item in RightCont" :key="r_item.cat_id">
					<view class="goods_title">
						/ <text  class="txtname">{{r_item.cat_name}}</text> /
					</view>
					<view class="goods_list">
						<navigator v-for="r_citem in r_item.children" :key="r_citem.cat_id" :url="'/pages/goods_list/goods_list?cid='+r_citem.cat_id">
							<image :src="r_citem.cat_icon" mode="widthFix"></image>
							<text>{{r_citem.cat_name}}</text>
						</navigator>
					</view>
				</view>
				<!-- 商品类分组 end -->
			</scroll-view>
			<!-- 右侧商品分类 end-->
		</view>
		<!-- 分类 end-->
	</view>
</template>

<script>
	import SearchInput from "@/components/com-SearchInput.vue"
	export default {
		data() {
			return {
				// 全部分类数据
				CateGorys: [],
				//左侧分类菜单
				LeftMenus: [],
				// 右侧区域使用
				RightCont: [],
				//当前选中索引
				CurIndex: 0,
				//scrolltop的位置
				ScrollTop: 0

			}
		},
		components: {
			SearchInput
		},
		onLoad() {
			getApp().initCartNum();
			getApp().setCartBar();
			//使用本地存储,获取本地存储的数据
			const Cates = wx.getStorageSync('cates');
			//判断是否存在
			if (!Cates) {
				//不存在再进行获取数据
				this.getCateGoryData();
				console.log("第一次请求数据");
			} else {
				//存在本地存储时，先判断下时间戳是否过期 可自定义过期时间 1分钟或5分钟
				if (Date.now() - Cates.time > 1000 * 60) {
					//重新发送请求
					this.getCateGoryData();
					console.log("过期，重新请求");
				} else {
					//可以使用旧的数据
					this.CateGorys = Cates.data;
					//初始化数据
					this.InitData();
					console.log("可以使用旧的数据");
				}


			}
		},

		methods: {
			// 获取分类数据
			async getCateGoryData() {
				const res = await this.$myRequest({
					url: '/categories'
				})
				this.CateGorys = res.data.message;
				//此处把接口的数据存入到本地存储中
				uni.setStorageSync('cates', {
					time: Date.now(),
					data: this.CateGorys
				})
				// console.log(res.data.message);
				this.InitData();
			},
			//初始化分类显示数据
			InitData() {
				var that = this;
				let leftdata = [];
				let rightdata = [];
				let curindex = that.CurIndex;
				for (var i = 0; i < that.CateGorys.length; i++) {
					leftdata.push({
						id: that.CateGorys[i].cat_id,
						name: that.CateGorys[i].cat_name
					})

				}

				rightdata = that.CateGorys[curindex].children;
				//重新设置 右侧内容scroll-view距离顶部的距离 ScrollTop:0

				that.LeftMenus = leftdata;
				that.ScrollTop = 0;
				that.RightCont = rightdata;

			},
			//切换分类
			changeCate(e) {
				this.CurIndex = e.currentTarget.dataset.index;
				//初始化数据
				this.InitData();

			}
		}
	}
</script>

<style scoped lang="less">
	.app-category {
		height: 100%;

		.category_container {
			height: ~'calc(100vh - 90rpx)';
			display: flex;

			.left_menu {
				flex: 2;
				color: #333;
				text-align: center;

				view {
					padding: 25rpx 0;
					font-size: 32rpx;
					box-sizing: border-box;

					&.cur {
						color: var(--themeColor);
						font-weight: bold;
						border-left: 6rpx solid var(--themeColor);

					}
				}
			}

			.right_content {
				flex: 5;
				padding-top: 30rpx;
				border-left: 2rpx solid #efefef;

				.goods_group {
					width: 100%;
					margin-bottom: 80rpx;
				}

				.goods_title {
					text-align: center;
					font-size: 32rpx;
					color: #999;
					margin: 20rpx 0;
					margin-bottom: 40rpx;

					text {
						color: #333;
					}
					.txtname{
						padding: 0 10rpx;
					}
				}

				.goods_list {
					display: flex;
					flex-wrap: wrap;
					justify-content: start;

					navigator {
						width: 33.3%;
						text-align: center;
						margin-bottom: 30rpx;
					}

					image {
						width: 50%;
						display: block;
						margin: 0 auto;
					}
					

				}
			}
		}
	}
</style>
