<template>
	<view class="body">
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">头像</view>
			<view class="u-f-ac list-right">
				<image src="../../static/demo/userpic/6.jpg" mode="widthFix" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">昵称</view>
			<view class="u-f-ac list-right">
				<view>昵称</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">性别</view>
			<view class="u-f-ac list-right">
				<view>男</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">生日</view>
			<view class="u-f-ac list-right">
				<view>2000-11-07</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">情感</view>
			<view class="u-f-ac list-right">
				<view>未婚</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">职业</view>
			<view class="u-f-ac list-right">
				<view>IT</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">家乡</view>
			<view class="u-f-ac list-right">
				<view>江苏徐州</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<button type="default" class="user-set-btn" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			submit() {
				
			}
		}
	}
</script>

<style lang="scss">
.change-info-list {
	padding: 20rpx;
	border-bottom: 1rpx solid #f4f4f4;
	.list-left {
		font-size: 32rpx;
		font-weight: bold;
		color: #9b9b9b;
	}
	.list-right {
		image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.icon {
			margin-left: 20rpx;
		}
	}
}
</style>
