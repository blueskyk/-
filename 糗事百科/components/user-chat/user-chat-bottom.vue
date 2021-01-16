<template>
	<view class="user-chat-bottom u-f-ajc">
		<input type="text" placeholder="文明发言" v-model="text" />
		<view class="icon iconfont icon-fabu u-f-ajc" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ""
			}
		},
		methods: {
			submit() {
				this.$emit("submit",this.text)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.user-chat-bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 120rpx;
		padding: 0 20rpx;
		background-color: #fff;
		border-top: 1rpx solid #ccc;
		input {
			flex: 1;
			margin-right: 20rpx;
			padding: 10rpx 20rpx;
			border-radius: 10rpx;
			background-color: #f7f7f7;
		}
		.icon {
			width: 80rpx;color: #000;
			font-size: 45rpx;
		}
	}
</style>
