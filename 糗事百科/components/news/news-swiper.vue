<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="item in swiper" :key="item.id"><image :src="item.imgsrc" mode="widthFix"></image></swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	props: {
		swiper: Array
	}
};
</script>

<style lang="scss" scoped>
swiper {
	padding: 0 20rpx 20rpx;
	image {
		width: 100%;
		border-radius: 10rpx;
	}
}
</style>
