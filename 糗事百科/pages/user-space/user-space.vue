<template>
	<view>
		<!-- 背景图+个人信息 -->
		<user-space-head :userInfo="userInfo"></user-space-head>
	</view>
</template>

<script>
import userSpaceHead from "../../components/user-space/user-space-head.vue"
export default {
	components: {
		userSpaceHead
	},
	data() {
		return {
			userInfo: {
				bgImg: 1,
				userPic: "../../static/demo/userpic/6.jpg",
				userName: "昵称",
				sex: 0,
				age: 20,
				isGuanZhu: false
			}
		};
	},
	methods: {}
};
</script>

<style lang="scss">
.user-space-margin {
		margin: 15rpx 0;
	}
	
</style>
