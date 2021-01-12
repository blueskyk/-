<template>
	<view class="common-list u-f animated fadeInLeft fast">
		<view class="common-list-left"><image :src="item.userpic" mode="widthFix" lazy-load></image></view>
		<view class="common-list-right">
			<view class="u-f-ac u-f-jsb user-box">
				<view class="u-f-ac user-name">
					{{ item.username }}
					<view class="icon iconfont  user-age u-f-ac" :class="[item.sex == 0 ? 'icon-nan' : 'icon-nv']">20</view>
				</view>
				<view v-show="!isguanzhu" class="icon iconfont icon-zengjia follow" @tap="guanzhu">{{ item.age }}</view>
			</view>
			<view class="title">{{ item.title }}</view>
			<view class="video-box u-f-ajc">
				<!-- 图片 -->
				<image class="bg-img" v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="commen-list-play icon iconfont icon-bofang"></view>
					<view class="commen-list-playinfo">{{ item.video.looknum }} 次播放 {{ item.video.time }}</view>
				</template>
				<!-- 分享 -->
				<view class="common-list-share u-f-ac" v-if="item.share">
					<image :src="item.share.titlepic" mode="widthFix"></image>
					<view>{{ item.share.title }}</view>
				</view>
			</view>
			<view class="u-f-ac u-f-jsb info-box">
				<view>{{ item.path }}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{ item.sharenum }}</view>
					<view class="icon iconfont icon-pinglun1">{{ item.commentnum }}</view>
					<view class="icon iconfont icon-dianzan1">{{ item.goodnum }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isguanzhu: this.item.isguanzhu
		}
	},
	methods: {
		// 用户关注
		guanzhu() {
			this.isguanzhu = true
			uni.showToast({
				title:"关注成功"
			})
		}
	},
	props:{
		item: Object,
		index: Number
	}
};
</script>

<style lang="scss" scoped>
.common-list {
	box-sizing: border-box;
	width: 100%;
	padding: 20rpx;
	.common-list-left {
		image {
			width: 90rpx;
			height: 90rpx;
			border-radius: 50%;
		}
	}

	.common-list-right {
		flex: 1;
		margin-left: 15rpx;
		border-bottom: 1rpx solid #eee;
		padding-bottom: 10rpx;
		.user-box {
			.user-name {
				color: #999;
				font-size: 30rpx;
			}
			.user-age {
				background-color: #007aff;
				color: #fff;
				font-size: 23rpx;
				padding: 5rpx 10rpx;
				border-radius: 20rpx;
				margin-left: 10rpx;
				line-height: 24rpx;
			}
			.follow {
				background-color: #eee;
				padding: 0 10rpx;
				font-size: 26rpx;
			}
		}
		.title {
			font-size: 32rpx;
			padding: 12rpx;
		}
		.bg-img {
			width: 100%;
			border-radius: 10rpx;
		}
		.info-box {
			color: #aaa;
			font-size: 28rpx;
			.iconfont {
				margin-left: 10rpx;
				padding-left: 5rpx;
				font-size: 28rpx;
			}
		}
		.video-box {
			position: relative;
			margin-bottom: 10rpx;
			.commen-list-play,
			.commen-list-playinfo {
				position: absolute;
				color: #fff;
			}
			.commen-list-play {
				font-size: 100rpx;
			}

			.commen-list-playinfo {
				right: 10rpx;
				bottom: 10rpx;
				background: rgba(51, 51, 51, 0.73);
				border-radius: 20rpx;
				padding: 0 10rpx;
				font-size: 20rpx;
			}
			.common-list-share {
				width: 100%;
				background: #eee;
				padding: 10rpx;
				border-radius: 10rpx;
				image {
					width: 200rpx;
					height: 150rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
}
</style>
