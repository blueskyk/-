<template>
	<!-- 聊天列表组件 -->
	<view>
		<view class="user-chat-time u-f-ajc">{{ item.settime }}</view>
		<view class="user-chat-list u-f" :class="{ 'user-chat-me': item.isMe }">
			<image v-if="!item.isMe" class="user-pic" :src="item.userPic" mode="widthFix" lazy-load></image>
			<view class="user-chat-content">
				<text v-if="item.type == 'text'">{{ item.content }}</text>
				<image v-if="item.type == 'img'" :src="item.content" mode="widthFix"></image>
			</view>
			<image v-if="item.isMe" class="user-pic" :src="item.userPic" mode="widthFix" lazy-load></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style lang="scss" scoped>
	.user-chat-time {
		padding: 50rpx 0;
		font-size: 24rpx;
		color: #a2a2a2;
	}
	.user-chat-list {
		padding: 20rpx 0;
		.user-pic {
			width: 100rpx;
			width: 100rpx;
			border-radius: 50%;
			flex-shrink: 0;
		}
		.user-chat-content {
			position: relative;
			background-color: #f4f4f4;
			padding: 25rpx;
			margin-left: 20rpx;
			margin-right: 100rpx;
			border-radius: 20rpx;
			&::after {
				position: absolute;
				left: -30rpx;
				right: 0;
				top: 30rpx;
				content: '';
				width: 0;
				height: 0;
				border: 16rpx solid #f4f4f4;
				border-color: transparent #f4f4f4 transparent transparent;
			}
		}
	}
	
	.user-chat-me {
		justify-content: flex-end;
		.user-chat-content {
			margin-right: 20rpx;
			margin-left: 100rpx;
			&::after {
				left: auto;
				right: -30rpx;
				border-color: transparent transparent transparent #f4f4f4;
			}
			image {
				max-width: 150rpx;
				max-height: 200rpx;
			}
		}
	}
</style>
