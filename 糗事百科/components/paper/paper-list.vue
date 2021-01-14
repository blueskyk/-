<template>
	<view class="paper-list u-f-ac">
		<image :src="item.userPic" mode="widthFix"></image>
		<view class="user-box">
			<view class="u-f-ac u-f-jsb user-box">
				<view class="name">{{item.userName}}</view>
				<view class="time">{{item.time}}</view>
			</view>
			<view class="user-info u-f-ac u-f-jsb">
				{{item.info}}
				<template v-if="item.noReadNum > 0">
					<uni-badge :text="item.noReadNum" type="error"></uni-badge>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../uni-badge/uni-badge.vue';
	export default {
		props: {
			item: Object,
			index: Number
		},
		components: {
			uniBadge
		}
	}
</script>

<style lang="scss" scoped>
	.paper-list {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		.user-box {
			flex: 1;
			.name {
				font-size: 35rpx;
			}
			.time {
				color: #cbcbcb;
			}
		}
		.user-info {
			color: #999;
		}
	}
</style>
