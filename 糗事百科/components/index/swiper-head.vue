<template>
	<!-- tabbar -->
	<view class="uni-tab-bar">
		<scroll-view scroll-x="true" class="uni-swiper-tab">
			<view v-for="(item,index) in tabBars" :key="item.id" class="swiper-tab-list">
				<text :class="{'active':activeIndex==index}" @tap="itemClick(index)">{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		methods: {
			// 动态修改tabbar选中项的样式
			itemClick(index) {
				this.$emit("itemClick",index)
			}
		},
		props: {
			tabBars: Array,
			activeIndex: Number
		}
	}
</script>

<style lang="scss" scoped>
	.uni-swiper-tab {
		white-space: nowrap;
		padding-bottom: 10rpx;
		height: 100rpx;
		line-height: 100rpx;

		.swiper-tab-list {
			display: inline-block;
			font-size: 30rpx;
			margin: 0 30rpx;

			text {
				color: #000;

				&.active {
					color: #F0AD4E;
					padding-bottom: 8rpx;
					border-bottom: 10rpx solid pink;
				}
			}
		}
	}
</style>
