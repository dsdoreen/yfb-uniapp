<template>
	<view  class="com-tabs">
		<!-- 切换标题区 begin -->
		<view class="tabs_title">
			<view v-for="(titem,index) in tabs" :key="titem.tid" :class="titem.isActive?'title_item active':'title_item'"
			@click="changeTit" :data-index="index"
			>{{titem.value}}</view>
		</view>
		<!-- 切换标题区 end -->
		<!-- 显示内容 begin -->
		<view class="tabs_content">
		  <!-- 此处放插槽 内容从父元素读取-->
		    <slot></slot>
		</view>
		<!-- 显示内容 end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			tabs:Array
		},
		methods:{
			// 切换分类标题
			changeTit(e){
				//获取点击传过来的值
				const cindex=e.currentTarget.dataset.index;
				//触发父组件的事件,并把值传递过去 事件名称自定义
				this.$emit("tabsItemChange",cindex)
				
				
				     
			}
		}
	}
</script>

<style lang="scss">
.com-tabs{
	.tabs_title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		height: 90rpx;
		text-align:center;
		.title_item{
			flex: 1;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			&.active{
				color: var(--themeColor);
				border-bottom: 2px solid var(--themeColor);
			}
		}
	}
}
</style>
