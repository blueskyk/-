<template>
	<view class="other-login u-f-ac">
		<view class="u-f-ajc other-login-item u-f1"><view class="icon iconfont icon-weixin u-f-ajc"></view></view>
		<view class="u-f-ajc other-login-item u-f1"><view class="icon iconfont icon-xinlangweibo u-f-ajc"></view></view>
		<view class="u-f-ajc other-login-item u-f1"><view class="icon iconfont icon-QQ u-f-ajc"></view></view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.other-login {
		padding: 20rpx 80rpx;
		.other-login-item {
			.icon {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				border: 1rpx solid;
				font-size: 50rpx;
				color: #fff;
			}
			.icon-weixin {
				background-color: #2bd19b;
			}
			.icon-xinlangweibo {
				background-color: #fc7729;
			}
			.icon-QQ {
				background-color: #2caefc;
			}
		}
	}
</style>
