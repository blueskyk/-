<template>
	<view class="topic-list u-f animated fadeInLeft fast">
		<image :src="item.titlePic" mode="widthFix" lazy-load></image>
		<view class="new-info">
			<view class="info-name">#{{item.title}}#</view>
			<view class="info-desc">{{item.desc}}</view>
			<view class="info-detail">动态 {{item.totalNum}} 今日 {{item.todayNmu}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item:Object,
			index: Number
		}
	}
</script>

<style lang="scss" scoped>
	.topic-list {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;
		image {
			width: 150rpx;
			border-radius: 10rpx;
			margin-right: 10rpx;
		}
		.new-info {
			color: #a4a4a4;
			.info-name {
				color: #333;
				font-size: 32rpx;
			}
		}
	}
</style>
