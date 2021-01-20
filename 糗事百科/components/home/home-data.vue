<template>
		<view class="home-data u-f-ac">
			<block v-for="(item,index) in homedata" :key="index">
				<view class="u-f1 u-f-ajc u-f-column">
					<view class="home-data-data">{{item.num}}</view>
					<view class="home-data-text">{{item.name}}</view>
				</view>
			</block>
		</view>
</template>

<script>
	export default {
		props:{
			homedata: Array
		}
	}
</script>

<style lang="scss" scoped>
	.home-data {
		padding: 20rpx 40rpx;
		.home-data-text {
			color: #aaa;
		}
		.home-data-data {
			font-size: 32rpx;
			color: #333;
		}
	}
</style>
