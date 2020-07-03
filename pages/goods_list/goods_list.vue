<template>
	<view class="app-goodslist">
		<!-- 搜索组件 begin-->
		<search-input />
		<!-- 搜索组件 end-->
		<!-- 搜索内容区域 begin -->
		<view class="goodslist_container">
			<!-- tab切换菜单组件 begin-->
			<!-- 监听自定义事件 并把tabs传到子组件内 bind后面加子组件定义的事件名 等于的方法名为父组件js要定义的函数名-->
			<Tabs :tabs="tabs_data" @tabsItemChange="handleTabsItemChange">
				<view v-if="goodsList.length>0">
					<!-- 通过block控制内容显示 -->
					<block v-if="tabs_data[0].isActive">
						<view class="tab_outcontent">
							<navigator class="goods_item" v-for="goodsitem in goodsList" :key="goodsitem.goods_id" :url="'/pages/goods_detail/goods_detail?goods_id='+goodsitem.goods_id">
								<!-- 左侧图片容器 begin-->
								<view class="goods_img_wrap">
									<image mode="widthFix" :src="goodsitem.goods_small_logo?goodsitem.goods_small_logo:'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'"></image>
								</view>
								<!-- 左侧图片容器 end-->
								<!-- 右侧商品容器 begin-->
								<view class="goods_info_wrap">
									<view class="goods_name">{{goodsitem.goods_name}}</view>
									<view class="goods_price price">{{goodsitem.goods_price}}<text class="txt_jf">积分</text></view>
								</view>
								<!-- 右侧商品容器 end-->
							</navigator>

						</view>
					</block>


				</view>
				<view class="empty_cont" v-else>
					暂无数据～
				</view>
			</Tabs>
			<!-- tab切换菜单组件 end-->
		</view>
		<!-- 搜索内容区域 end -->
	</view>
</template>

<script>
	import SearchInput from '../../components/com-SearchInput.vue'
	import Tabs from '../../components/com-Tabs.vue'
	export default {
		data() {
			return {
				//存放tabs的标签数据
				tabs_data: [{
						id: 0,
						value: '综合',
						isActive: true

					},
					{
						id: 1,
						value: '销量',
						isActive: false

					},
					{
						id: 2,
						value: '价格',
						isActive: false

					}
				],
				goodsList: [],
				//链接中传过来的值
				QueryParmas: {
					query: '',
					cid: '',
					//当前页面
					pagenum: 1,
					//一页显示多少条数据
					pagesize: 10
				},
				totalPages: 1,
			}

		},
		components: {
			SearchInput,
			Tabs
		},
		onLoad(options) {
			this.QueryParmas.cid = options.cid || '';
			this.QueryParmas.query = options.query || '';
			//关闭加载中显示
			uni.hideLoading();
			this.getGoodsListData();
		},

		methods: {
			//父组件在子组件bind后面要触发的事件名
			handleTabsItemChange(e) {
				// console.log(e)
				//获取传过来的索引
				const cindex = e;
				//修改源数组
				this.tabs_data.forEach((v, i) => {
					if (i == cindex) {
						v.isActive = true;
					} else {
						v.isActive = false;
					}
				})
			},
			//获取商品数据
			async getGoodsListData() {
				var that = this;
				const res = await this.$myRequest({
					url: '/goods/search',
					data: this.QueryParmas
				})
				// this.goodsList=res.data.message.goods;
				//获取总条数
				const total = res.data.message.total;
				//计算总页数
				const totalPages = parseInt(total / this.QueryParmas.pagesize);
				this.totalPages = totalPages;
				//拼接数组
				this.goodsList = [...that.goodsList, ...res.data.message.goods]
				//关闭下拉刷新显示
				uni.stopPullDownRefresh();

			}
		},
		//上拉加载下一页
		onReachBottom() {
			const pagenum = this.QueryParmas.pagenum;
			//用户上拉触底后
			//判断还有没有下一页
			if (pagenum < this.totalPages) {
				this.QueryParmas.pagenum++;	
				// console.log('加载下一页');
				this.getGoodsListData();
			} else {
				uni.showToast({
					icon: 'none',
					title: '没有更多数据了哦～'
				})
			}
		},
		//下拉刷新页面数据
		onPullDownRefresh() {
			uni.showLoading({
				title: '刷新中'
			});
			// console.log('下拉了')
			setTimeout(function () {
			    uni.hideLoading();
			}, 1500);
			//重置数据信息
			this.goodsList = [];
			//当前页数改成1
			this.QueryParmas.pagenum = 1;
			//重新获取第一页数据
			this.getGoodsListData();
		}
	}
</script>

<style lang="scss">
	.goodslist_container {
		.tab_outcontent {
			padding: 20rpx 10rpx;

			.goods_item {
				padding: 5rpx 5rpx;
				border-bottom: 1px solid #efefef;
				display: flex;

				.goods_img_wrap {
					flex: 2;
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						width: 80%;
					}
				}

				.goods_info_wrap {
					flex: 3;
					font-size: 24rpx;
					line-height: 38rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.goods_name {
						display: -webkit-box;
						overflow: hidden;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;

					}
				}
			}
		}
	}
</style>
