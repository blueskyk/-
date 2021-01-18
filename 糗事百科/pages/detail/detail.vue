<template>
	<view>
		详情页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 初始化数据
			initData(obj) {
				// 设置标题
				uni.setNavigationBarTitle({
					title: obj.title
				})
			}
		},
		onLoad(e) {
			this.initData(JSON.parse(e.detailData))
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				console.log("分享")
			}
		}
	}
</script>

<style>

</style>
