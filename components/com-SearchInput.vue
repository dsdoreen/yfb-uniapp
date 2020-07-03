<template>
	<view class="app-searchinput">
		<navigator url="" open-type="navigate">
			搜索
		</navigator>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.app-searchinput{
		background: var(--themeColor);
		display: flex;
		justify-content: center;
		navigator{
			width: 100%;
			height: 70rpx;
			color: #333;
			margin:0 10rpx 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #fff;
			border-radius: 15rpx;
		}
	}
</style>
