<template>
	<view>
		我是用户列表页面
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
