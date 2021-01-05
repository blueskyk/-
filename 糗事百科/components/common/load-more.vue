<template>
	<!-- 上拉加载更多 -->
	<view class="loadMore">{{loadText}}</view>
</template>

<script>
	export default {
		props: {
			loadText: String
		}
	}
</script>

<style lang="scss" scoped>
	.loadMore {
		text-align: center;
		color: #AAA;
		padding: 15rpx;
	}
</style>
