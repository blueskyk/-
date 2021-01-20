<template>
	<view class="animated fadeIn fast" v-show="isShow">
		<view class="more-share-model"@tap="toggle"></view>
		<view class="more-share" v-show="isShow">
			<view class="more-share-title u-f-ajc">分享到</view>
			<scroll-view scroll-x class="more-share-content">
				<view class="more-share-item" hover-class="btn-tap" @tap="toggle">
					<view class="icon iconfont icon-weixin u-f-ajc" style="background-color: #11ad9e;"></view>
					<view class="icon-text">微信好友</view>
				</view>
				<view class="more-share-item" hover-class="btn-tap" @tap="toggle">
					<view class="icon iconfont icon-xinlangweibo u-f-ajc" style="background-color: #504e4a;"></view>
					<view class="icon-text">朋友圈</view>
				</view>
				<view class="more-share-item" hover-class="btn-tap" @tap="toggle">
					<view class="icon iconfont icon-xinlangweibo u-f-ajc" style="background-color: #ff775a;"></view>
					<view class="icon-text">新浪微博</view>
				</view>
				<view class="more-share-item" hover-class="btn-tap" @tap="toggle">
					<view class="icon iconfont icon-QQ u-f-ajc" style="background-color: #4782d4;"></view>
					<view class="icon-text">QQ好友</view>
				</view>
			</scroll-view>
			<view class="more-share-cancel u-f-ajc" hover-class="btn-tap" @tap="toggle">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isShow: Boolean
		},
		methods: {
			toggle() {
				this.$emit('toggle')
			}
		}
	}
</script>

<style lang="scss">
	.more-share {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 20;
		background-color: #fff;
		.more-share-title,.more-share-cancel {
			padding: 25rpx;
			font-size: 32rpx;
		}
		.more-share-content {
			width: 100%;
			display: flex;
			white-space: nowrap;
			height: 200rpx;
			border-bottom: 1rpx solid #ccc;
			.more-share-item {
				display: inline-flex;
				width: 25%;
				height: 200rpx;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.icon {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					border: 1rpx solid;
					font-size: 50rpx;
					color: #fff;
					background-color: #333333;
				}
				.icon-text {
					color: #7c7c7c;
					margin-top: 10rpx;
				}
			}
		}
		.btn-tap {
			background-color: #eee;
		}
	}
	
	.more-share-model {
		background: rgba(0,0,0,.3);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 19;
	}
	
</style>
