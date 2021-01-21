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
					{icon: "",name: "账号与安全",clicktype:"navigateTo",url: "../../pages/change-password/change-password"},
					{icon: "",name: "绑定邮箱",clicktype:"navigateTo",url: "../../pages/bind-email/bind-email"},
					{icon: "",name: "资料编辑",clicktype:"navigateTo",url: "../../pages/change-userinfo/change-userinfo"},
					{icon: "",name: "小纸条",clicktype:"",url: ""},
					{icon: "",name: "清除缓存",clicktype:"",url: ""},
					{icon: "",name: "意见反馈",clicktype:"navigateTo",url: "../../pages/user-help/user-help"},
					{icon: "",name: "关于app",clicktype:"",url: ""}
				]
			}
		},
		methods: {
			open() {
				uni.navigateTo({
					url: ''
				});
			}
		}
	}
</script>

<style lang="scss">
.user-set {
	padding:20rpx;
}
</style>
