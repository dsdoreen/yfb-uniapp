<template>
	<view class="container">
		<!-- 搜索组件 begin-->
		<search-input />
		<!-- 搜索组件 end-->
		<!-- banner轮播 begin -->
		<view class="index_swiper">
			<swiper class="swiper" indicator-active-color="#fff" indicator-dots autoplay interval="3000" circular>
				<swiper-item v-for="swiperitem in swiperList" :key="swiperitem.goods_id">
					<navigator :url="'/pages/goods_detail/goods_detail?goods_id='+'swiperitem.goods_id'" :open-type="swiperitem.open_type">
						<image :src="swiperitem.image_src" mode="widthFix"></image>
					</navigator>

				</swiper-item>
			</swiper>
		</view>
		<!-- banner轮播 end -->
		<!-- 分类导航 begin -->
		<view class="index_category">
			<navigator v-for="cateitem in cateList" :key="cateitem.name" url="/pages/category/category" open-type="switchTab">
				<image mode="widthFix" :src="cateitem.image_src"></image>
			</navigator>
		</view>
		<!-- 分类导航 end -->
		<!-- 商品楼层 begin -->
		<view class="index_floor">
			<view class="floor_box" v-for="flooritem in floorList" :key="flooritem.floor_title.name">
				<view class="title">
					<image :src="flooritem.floor_title.image_src" mode="widthFix"></image>
				</view>
				<view class="goods_group">
					<navigator v-for="floor_subitem in flooritem.product_list" :key="floor_subitem.name" :url="'/'+'floor_subitem.navigator_url'"
					 open-type="navigate">
						<image :src="floor_subitem.image_src"></image>
					</navigator>
				</view>
			</view>
		</view>
		<!-- 商品楼层 end -->
	</view>
</template>

<script>
	import SearchInput from "@/components/com-SearchInput.vue"
	export default {
		data() {
			return {
				//轮播图列表
				swiperList: [],
				//分类导航列表
				cateList: [],
				//商品楼层列表
				floorList: [],
			}
		},
		onLoad() {
			this.getSwiperList();
			this.getCateList();
			this.getFloorList();
			getApp().initCartNum();
			getApp().setCartBar();
		},
		methods: {

			//获取轮播图列表
			async getSwiperList() {
				const res = await this.$myRequest({
					url: '/home/swiperdata'
				})
				this.swiperList = res.data.message;

			},
			//获取分类导航列表
			async getCateList() {
				const res = await this.$myRequest({
					url: '/home/catitems'
				})
				this.cateList = res.data.message;
				// console.log(res.data.message)

			},
			//获取商品楼层列表
			async getFloorList() {
				const res = await this.$myRequest({
					url: '/home/floordata'
				})
				this.floorList = res.data.message;
				console.log(res.data.message)

			},
		},
		components: {
			SearchInput
		}
	}
</script>

<style lang="scss" scoped>
	.index_swiper {
		swiper {
			height: 340rpx;
			width: 100%;

			image {
				width: 100%;
			}
		}

	}

	.index_category {
		width: 100%;
		padding: 20rpx 20rpx;
		display: flex;
		justify-content: space-between;

		navigator {
			flex: 1;
			padding: 15rpx;

			image {
				width: 100%;

			}
		}
	}

	.index_floor {
		margin: 30rpx 0;
		padding: 0 20rpx;

		.floor_box {
			margin-bottom: 20rpx;

			.title {
				width: 100%;

				image {
					width: 100%;
				}
			}

			.goods_group {
				margin-top: 10rpx;
				margin-bottom: 50rpx;
				overflow: hidden;

				navigator {
					//  大图 232*386
					// 比例： 232/386=33.33vw/height
					//大图高度用比例：33.33vw*386/232
					//小图宽度和大图宽度一样
					//小图高度用比例：33.33vw*386/232/2
					float: left;
					width: 33.33%;
					height: 33.33vw*386/232;

					&:nth-last-child(-n+4) {
						height: 33.33vw*386/232/2;
					}

					image {
						width: 100%;
						height: 100%;
						padding: 5rpx;
						border-radius: 5rpx;
					}
				}
			}
		}
	}
</style>
