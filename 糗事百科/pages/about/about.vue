<template>
	<view class="body">
		<view class="u-f-ajc about-top u-f-column">
			<image src="../../static/common/logo.png" mode="widthFix"></image>
			<view>version 1.0.0</view>
		</view>
		<block v-for="(item,index) in list" :key="index">
			<view class="home-list">
				<home-list-item :item="item" :index="index"></home-list-item>
			</view>
		</block>
	</view>
</template>

<script>
	import homeListItem from "../../components/home/home-list-item.vue"
	export default {
		components: {
			homeListItem
		},
		data() {
			return {
				list: [
					{icon: "",name: "新版本检测",clicktype:"",url: ""},
					{icon: "",name: "app用户协议",clicktype:"",url: ""}
					]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.about-top {
		padding: 20rpx 0;
		image {
			width: 70%;
			margin: 30rpx 0 20rpx;
			width: 60%;
		}
		view {
			color: #eee;
		}
	}
</style>
