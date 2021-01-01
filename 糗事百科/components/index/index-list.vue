<template>
		<view class="index-list">
			<view class="index-list1">
				<view>
					<image :src="item.userPic" mode="widthFix" lazy-load></image>
					昵称
				</view>
				<view v-show="item.isguanzhu">
					<view class="icon iconfont icon-zengjia">关注</view>
				</view>
			</view>
			<view class="index-list2">{{item.title}}</view>
			<view class="index-list3">
				<!-- 图片 -->
				<image :src="item.titlePic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.type === 'video'">
					<view class="index-list-play icon iconfont icon-bofang"></view>
					<view class="index-list-info">{{item.playNum}}次播放 {{item.time}}</view>
				</template>
			</view>
			<view class="index-list4">
				<view class="icon-box">
					<view class="icon-content" :class="{'active': item.infoNum.infoIndex === 1}">
						<view class="icon iconfont icon-icon_xiaolian-mian">
							<text class="icon-text">{{item.infoNum.smileNum}}</text>
						</view>
					</view>
					<view class="icon-content" :class="{'active': item.infoNum.infoIndex === 2}">
						<view class="icon iconfont icon-kulian">
							<text class="icon-text">{{item.infoNum.sadNum}}</text>
						</view>
					</view>
				</view>
				<view class="icon-box">
					<view class="icon-content">
						<view class="icon iconfont icon-pinglun1">
							<text class="icon-text">{{item.commentNum}}</text>
						</view>
					</view>
					<view class="icon-content">
						<view class="icon iconfont icon-zhuanfa">
							<text class="icon-text">{{item.shareNum}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style lang="scss" scoped>
.index-list {
		padding: 20rpx;
		border-bottom: 1rpx solid #ccc;

		.index-list1 {
			display: flex;
			justify-content: space-between;
			align-items: center;

			view {
				&:first-child {
					display: flex;
					align-items: center;
					color: #999;

					image {
						width: 90rpx;
						height: 90rpx;
						border-radius: 100%;
						margin-right: 10rpx;
					}
				}

				&:last-child {
					color: #000;
					display: flex;
					align-items: center;
					background: #f4f4f4;
					border-radius: 5rpx;
				}
			}
		}

		.index-list2 {
			padding-top: 15rpx;
		}

		.index-list3 {
			padding-top: 15rpx;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;

			image {
				width: 100%;
				border-radius: 20rpx;
			}

			.index-list-play {
				position: absolute;
				font-size: 140rpx;
			}

			.index-list-info {
				position: absolute;
				background-color: rgba(0, 0, 0, .5);
				bottom: 8rpx;
				right: 8rpx;
				border-radius: 40rpx;
				font-size: 22rpx;
				padding: 0 12rpx;
			}
			
		}

		.index-list4 {
			padding: 15rpx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.icon-box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.icon-content {
					display: flex;
					align-items: center;
					margin-right: 10rpx;
					&.active {
						color: #F0AD4E;
					}
					.icon-text {
						margin: 0 10rpx;
					}
				}
			}
		}
	}
</style>
