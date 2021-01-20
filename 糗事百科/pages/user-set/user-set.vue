<template>
	<view class="user-set">
		<block v-for="(item,index) in list" :key="index">
			<view class="home-list">
				<home-list-item :item="item" :index="index"></home-list-item>
			</view>
		</block>
		<button type="primary" class="user-set-btn">退出登录</button>
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
					{icon: "",name: "账号与安全"},
					{icon: "",name: "绑定邮箱"},
					{icon: "",name: "资料编辑"},
					{icon: "",name: "小纸条"},
					{icon: "",name: "清除缓存"},
					{icon: "",name: "意见反馈"},
					{icon: "",name: "关于app"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.user-set {
	padding:20rpx;
	.user-set-btn {
		width: 100%;
		margin: 20rpx 0;
		background-color: #ffe933;
		border: none;
		color: #333;
	}
}
</style>
