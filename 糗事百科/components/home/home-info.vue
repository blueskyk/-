<template>
	<view class="home-info u-f-ac">
		<image :src="homeinfo.userpic" mode="widthFix" lazy-load></image>
		<view class="u-f1 home-info-c">
			<view class="user-name">{{homeinfo.username}}</view>
			<view class="user-content">总访客 {{homeinfo.totalnum}} 今日 {{homeinfo.todaynum}}</view>
		</view>
		<view class="icon iconfont icon-jinru"></view>
	</view>
</template>

<script>
	export default {
		props:{
			homeinfo:Object
		}
	}
</script>

<style lang="scss" scoped>
	.home-info {
		padding: 20rpx 40rpx;
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			margin-right: 20rpx;
			flex-shrink: 0;
		}
		.home-info-c {
			.user-name {
				font-size: 32rpx;
			}
			.user-content {
				color: #bbb;
			}
		}
		.icon-jinru {
			height: 100%;
		}
	}
</style>
