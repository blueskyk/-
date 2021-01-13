<template>
	<view class="topic-info">
		<view class="topic-info-t u-f-ac">
			<image :src="topicInfo.titlePic" mode="widthFix" lazy-load></image>
			<view class="info-title">#{{topicInfo.title}}#</view>
		</view>
		<view class="topic-info-c u-f-ac">
			<view>动态 {{topicInfo.totalNmu}}</view>
			<view>今日 {{topicInfo.todayNmu}}</view>
		</view>
		<view class="topic-info-b">{{topicInfo.desc}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			topicInfo: Object
		}
	}
</script>

<style lang="scss">
	.topic-info {
		padding: 0 25rpx;
		.topic-info-t {
			position: relative;
			image {
				position: absolute;
				top: -75rpx;
				width: 150rpx;
				height: 150rpx;
				border-radius: 20rpx;
			}
			.info-title {
				margin-left: 170rpx;
				flex: 1;
				font-size: 35rpx;
			}
		}
		.topic-info-c {
			padding: 35rpx 0 15rpx;
			color: #cdcdcd;
		}
		.topic-info-b {
			color: #a3a3a3;
			font-size: 32rpx;
			padding-bottom: 10rpx;
		}
		
	}
</style>
