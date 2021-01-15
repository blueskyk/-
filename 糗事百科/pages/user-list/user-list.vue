<template>
	<view>
		<swiper-head @itemClick="itemClick" :tabBars="tabBars" :activeIndex="tabIndex" swiperStyle="border: none;" swiperItem="width: 33.3%;"></swiper-head>
	</view>
</template>

<script>
	import swiperHead from "../../components/index/swiper-head.vue"
	export default {
		components: {
			swiperHead
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{name: "互关",id: "huguan",num:10},
					{name: "关注",id: "gaunzhu",num:20},
					{name: "粉丝",id: "fensi",num:30}
				]
			}
		},
		methods: {
			// item点击事件
			itemClick(index) {
				this.tabIndex = index
			}
		},
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
				uni.navigateBack({
					delta: 1
				});
					break;
				case value:
					break;
			}
		}
	}
</script>

<style>

</style>
