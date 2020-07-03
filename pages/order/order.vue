<template>
	<view class="app-order">
		<view class="order_wrap">
			<Tabs :tabs="tabs" @tabsItemChange="handleTabsItemChange">

				<!-- 通过block控制内容显示 -->

				<view class="orders_content">
					<view v-if="orderList[0].goods_id">
						<view class="item" v-for="orderitem in orderList">
							<view class="num item_row">
								<view class="row_text">
									订单编号：
								</view>
								<view class="row_info">
									HMDD2020060100000010{{orderitem.goods_id}}
								</view>
							</view>
							<view class="num item_row">
								<view class="row_text">
									订单价格：
								</view>
								<view class="row_info price">
									{{orderitem.money}}<text class="txt_jf">积分</text>
								</view>
							</view>
							<view class="num item_row">
								<view class="row_text">
									商品数量：
								</view>
								<view class="row_info">
									{{orderitem.num}}
								</view>
							</view>
						</view>
					</view>
					<view class="empty_cont" wx:else>
						暂无订单数据～
					</view>


				</view>

			</Tabs>
		</view>

	</view>
</template>

<script>
	import Tabs from '../../components/com-Tabs.vue'
	export default {
		data() {
			return {
				//存放tabs的标签数据
				tabs: [{
						id: 0,
						value: '全部订单',
						isActive: true

					},
					{
						id: 1,
						value: '待收货订单',
						isActive: false

					},
					{
						id: 2,
						value: '退款/退货',
						isActive: false

					}
				],
				orderList: [],
				// 订单类型
				type: 0
			};
		},
		components:{
			Tabs
		},
		onLoad(options) {
			let otype=options.type||0;
			console.log(otype)
			if (otype) {
				this.type = otype;
				const tabs = this.tabs;
				tabs.forEach((v, i) => {
					if (v.id == this.type) {
						v.isActive = true
					} else {
						v.isActive = false
					}
				})

				this.tabs = tabs;
			}
			
			  //获取订单
			    let orders = wx.getStorageSync('orders');
			  
			     this.orderList=orders;
			
		},
		methods: {
			//父组件在子组件bind后面要触发的事件名
			handleTabsItemChange(e) {
				//获取传过来的索引
				const index = e;
				//修改源数组
				let tabs = this.tabs;


				tabs.forEach((v, i) => {
					if (i == index) {
						v.isActive = true
					} else {
						v.isActive = false
					}
				})
			
					this.tabs=tabs
				

			},

		}
	}
</script>

<style lang="scss">
	/* pages/order/order.wxss */
	.app-order {

		.orders_content {
			margin-top: 20rpx;
			border-top: 5px solid #f5f5f5;

			.item {
				color: #666;
				padding: 20rpx;
				border-bottom: 1px solid #efefef;

				.item_row {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 10rpx 0;

					.price {
						font-size: 32rpx;
						font-weight: bold;
						color: var(--themeColor);
					}
				}
			}
		}
	}
</style>
