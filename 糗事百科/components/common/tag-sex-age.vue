<template>
	<view class="icon iconfont  user-age u-f-ac" :class="[sex == 0 ? 'icon-nan' : 'icon-nv']">{{age}}</view>
</template>

<script>
	export default {
		props: {
			sex:Number,
			age:Number
		}
	}
</script>

<style lang="scss" scoped>
	.user-age {
		box-sizing: border-box;
		background-color: #007aff;
		color: #fff;
		font-size: 23rpx;
		padding: 5rpx 10rpx;
		border-radius: 20rpx;
		line-height: 22rpx;
		margin-left: 10rpx;
	}
	.icon-nv {
		background-color: #ff698d;
	}
</style>
