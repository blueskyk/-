<template>
	<view>
		这是搜索页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onNavigationBarSearchInputChanged() {
			console.log("输入了")
		},
		onNavigationBarSearchInputConfirmed() {
			
		}
	}
</script>

<style>

</style>
