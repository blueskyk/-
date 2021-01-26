<template>
	<view class="user-space-userinfo">
		<view class="user-info-item">
			<view class="userinfo-title">账号信息</view>
			<view>糗龄：{{getRegAge}}</view>
			<view>糗百id：{{userInfo.id}}</view>
		</view>
		<view class="user-info-item">
			<view class="userinfo-title">个人信息</view>
			<view>星座：{{getXingZuo}}</view>
			<view>职业：{{userInfo.job}}</view>
			<view>故乡：{{userInfo.city}}</view>
			<view>情感：{{userInfo.marry}}</view>
		</view>
	</view>
</template>

<script>
	import t from "../../common/time.js"
	export default {
		props: {
			userInfo: Object
		},
		computed: {
			// 糗龄
			getRegAge() {
			 return t.gettime.sumAge(this.userInfo.regtime)
			},
			// 星座
			getXingZuo() {
				return t.gettime.getHoroscope(this.userInfo.birthday)
			}
		},
	}
</script>

<style lang="scss">
	.user-space-userinfo {
		padding: 0 30rpx;
		.user-info-item {
			padding: 20rpx 0;
			border-bottom: 1rpx solid #eee;
			view {
				color: #aaa;
			}
			.userinfo-title {
				color: #333;
				font-size: 34rpx;
				padding: 15rpx 0;
			}
		}
	}
</style>
