<template>
	<view class="user-space-head u-f-ajc">
		<image :src="getBgImg" mode="widthFix" lazy-load @tap="changeBgImg"></image>
		<view class="user-sapce-head-info u-f-ajc u-f-column">
			<image class="user-pic" :src="userInfo.userPic" mode="widthFix" lazy-load></image>
			<view class="user-info u-f-ac user-space-margin">
				<text>{{ userInfo.userName }}</text>
				<tag-sex-age :sex="userInfo.sex" :age="userInfo.age"></tag-sex-age>
			</view>
			<view @tap.stop="change" class="icon iconfont user-space-head-btn  user-space-margin u-fac" :class="[isGuanZhu ? 'active' : 'icon-zengjia']">
				{{ isGuanZhu ? '已关注' : '关注' }}
			</view>
		</view>
	</view>
</template>

<script>
import tagSexAge from '../common/tag-sex-age.vue';
export default {
	components: {
		tagSexAge
	},
	props: {
		userInfo: Object
	},
	data() {
		return {
			isGuanZhu: this.userInfo.isGuanZhu
		};
	},
	computed: {
		getBgImg() {
			return `../../static/bgimg/${this.userInfo.bgImg}.jpg`;
		}
	},
	methods: {
		changeBgImg() {
			let noImg = parseInt(this.userInfo.bgImg);
			this.userInfo.bgImg = noImg < 4 ? ++noImg : 1;
		},
		// 用户关注相关操作
		change() {
			this.isGuanZhu = !this.isGuanZhu;
		}
	}
};
</script>

<style lang="scss" scoped>
.user-space-margin {
	margin: 15rpx 0;
}
.user-space-head {
	position: relative;
	height: 500rpx;
	overflow: hidden;
	image {
		width: 100%;
	}
	.user-sapce-head-info {
		position: absolute;
		top: 150rpx;
		.user-pic {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
		}
		.user-info {
			color: #fff;
			font-weight: bold;
			font-size: 30rpx;
			text-shadow: 2rpx 2rpx 10rpx #333;
		}
		.user-space-head-btn {
			background-color: #ffe933;
			color: #333;
			border-radius: 10rpx;
			border: 1rpx solid #ffe933;
			padding: 0 15rpx;
			font-size: 28rpx;
		}
		.active {
			background: none;
			border: 1rpx solid #fff;
			color: #fff;
		}
	}
}
</style>
