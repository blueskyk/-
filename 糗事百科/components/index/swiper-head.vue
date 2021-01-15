<template>
	<!-- tabbar -->
	<view class="uni-tab-bar">
		<scroll-view scroll-x="true" class="uni-swiper-tab" :style="swiperStyle">
			<view v-for="(item,index) in tabBars" :key="item.id" class="swiper-tab-list" :style="swiperItem">
				<text :class="{'active':tabIndex==index}" @tap="itemClick(index)">{{item.name}} {{item.num?item.num:''}}</text>
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
			tabIndex: Number,
			swiperStyle: {
				type: String,
				default: ""
			},
			swiperItem: {
				type: String,
				default: ""
			}
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
			margin: 0 5rpx;

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
