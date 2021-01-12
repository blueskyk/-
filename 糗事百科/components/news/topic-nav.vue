<template>
	<view class="topic-nav">
		<view class="u-f-ac u-f-jsb hot-title-box">
			<view class="hot-title">热门分类</view>
			<view class="u-f-ajc hot-more">
				<text>更多</text>
				<view class="icon iconfont icon-jinru"></view>
			</view>
		</view>
		<view class="u-f-ac hot-cates">
			<view class="cate-item" v-for="(item,index) in nav" :key="index">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			nav:Array
		}
	}
</script>

<style lang="scss">
	.topic-nav {
		border-top: 1rpx solid #eee;
		border-bottom: 1rpx solid #eee;
		padding: 20rpx;
		.hot-title-box {
			margin-bottom: 10rpx;
			.hot-title {
				font-size: 32rpx;
				color: #333;
			}
			.hot-more {
				color: #9e9e9e;
			}
		}
		.hot-cates {
			.cate-item {
				margin: 0 10rpx;
				flex: 1;
				text-align: center;
				background-color: #ddd;
				color: #9e9e9e;
				border-radius: 10rpx;
			}
		}
	}
</style>
