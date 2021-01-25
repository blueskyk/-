<template>
	<view>
		<template v-if="!islogin">
			<!-- 未登录 -->
			<view class="u-f-ajc">登录,体验更多功能</view>
			<!-- 第三方 -->
			<other-login></other-login>
			<!-- 账号密码登录 -->
			<view class="u-f-ajc" @tap="openLogin">
				<view class="u-f-ajc">
					账号密码登录
					<view class="icon iconfont icon-jinru u-f-ac"></view>
				</view>
			</view>
		</template>
		<template v-else>
			<!-- 登录状态 -->
			<home-info :homeinfo="homeinfo"></home-info>
		</template>
		<!-- 数据 -->
		<home-data :homedata="homedata"></home-data>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc"><image src="../../static/demo/demo20.jpg" mode="widthFix" lazy-load></image></view>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item, index) in list" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	import homeListItem from "../../components/home/home-list-item.vue"
	import homeInfo from "../../components/home/home-info.vue"
	import otherLogin from "../../components/home/other-login.vue"
	import homeData from "../../components/home/home-data.vue"
export default {
	components: {
		homeListItem,
		homeInfo,
		otherLogin,
		homeData
	},
	data() {
		return {
			islogin: true,
			list: [
				{ icon: 'liulan', name: '浏览历史',clicktype:"",url: "" }, 
				{ icon: 'huiyuanvip', name: '糗百认证',clicktype:"",url: "" }, 
				{ icon: 'keyboard', name: '审核糗事',clicktype:"",url: "" },
			],
			homeinfo: {
				userpic: "../../static/demo/userpic/6.jpg",
				username: "昵称",
				totalnum: 0,
				todaynum: 0
			},
			homedata: [
				{name: "糗事",num:0},
				{name: "动态",num:0},
				{name: "评论",num:0},
				{name: "收藏",num:0}
			]
		};
	},
	methods: {
		// 跳转到登录页
		openLogin() {
			uni.navigateTo({
				url: '../login/login'
			});
		}
	},
	onNavigationBarButtonTap(e) {
		if (e.index == 0) {
			uni.navigateTo({
				url: '../user-set/user-set'
			});
		}
	}
};
</script>

<style lang="scss">


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

.home-adv {
	padding: 20rpx;
	image {
		border-radius: 20rpx;
		height: 150rpx;
	}
}

</style>
