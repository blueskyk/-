<template>
	<view>
		<!-- 自定导航栏 -->
		<uni-nav-bar :fixed="true" :statusBar="true" @clickRight="openAdd">
			<!-- 左边 -->
			<view slot="left">
				<view class="nav-left"><view class="icon iconfont icon-qiandao"></view></view>
			</view>
			<!-- 中间 -->
			<view class="nav-center u-f-ajc">
				<view v-for="(item, index) in tabBars" :key="item.id" @tap="changeTab(index)" :class="{ active: tabIndex == index }" class="center-item">
					<text>{{item.name}}</text>
					</view>
			</view>
			<!-- 右边 -->
			<view slot="right">
				<view class="nav-right u-f-ajc"><view class="icon iconfont icon-bianji1"></view></view>
			</view>
		</uni-nav-bar>
		<!-- 列表 -->
		<block v-for="(item,index) in list" :key="index">
			<view class="common-list u-f">
				<view class="common-list-left">
					<image :src="item.userpic" mode="widthFix" lazy-load></image>
				</view>
				<view class="common-list-right">
					<view class="u-f-ac u-f-jsb user-box">
						<view class="u-f-ac user-name">{{item.username}} <view class="icon iconfont  user-age u-f-ac"
						:class="[item.sex == 0? 'icon-nan' : 'icon-nv']">
						20</view></view>
						<view v-show="!item.isguanzhu" class="icon iconfont icon-zengjia follow">{{item.age}}</view>
					</view>
					<view class="title">{{item.title}}</view>
					<view class="video-box u-f-ajc">
						<!-- 图片 -->
						<image class="bg-img" v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
						<!-- 视频 -->
						<template v-if="item.video">
							<view class="commen-list-play icon iconfont icon-bofang"></view>
							<view class="commen-list-playinfo">
								{{item.video.looknum}} 次播放 {{item.video.time}}
							</view>
						</template>
						<!-- 分享 -->
						<view class="common-list-share u-f-ac" v-if="item.share">
							<image :src="item.share.titlepic" mode="widthFix"></image>
							<view>{{item.share.title}}</view>
						</view>
					</view>
					<view class="u-f-ac u-f-jsb info-box">
						<view>{{item.path}}</view>
						<view class="u-f-ac">
							<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
							<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
							<view class="icon iconfont icon-dianzan1">{{item.goodnum}}</view>
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: {
		uniNavBar
	},
	data() {
		return {
			tabIndex: 0,
			tabBars: [{ name: '关注', id: 'guanzhi' }, { name: '话题', id: 'huati' }],
			list: [
				// 文字
				{
					userpic: "../../static/demo/userpic/14.jpg",
					username: "昵称",
					sex: 0, //0 男 1 女
					age: 20,
					isguanzhu: false,
					title: "我是标题",
					titlepic: "",
					video: false,
					share: false,
					path: "江苏 徐州",
					sharenum: 20,
					commentnum: 30,
					goodnum: 40
				},
				// 图文
				{
					userpic: "../../static/demo/userpic/14.jpg",
					username: "昵称",
					sex: 0, //0 男 1 女
					age: 20,
					isguanzhu: false,
					title: "我是标题",
					titlepic: "../../static/demo/datapic/13.jpg",
					video: false,
					share: false,
					path: "江苏 徐州",
					sharenum: 20,
					commentnum: 30,
					goodnum: 40
				},
				// 视频
				{
					userpic: "../../static/demo/userpic/14.jpg",
					username: "昵称",
					sex: 0, //0 男 1 女
					age: 20,
					isguanzhu: false,
					title: "我是标题",
					titlepic: "../../static/demo/datapic/13.jpg",
					video: {
						looknum: "20w",
						time: "2:47"
					},
					share: false,
					path: "江苏 徐州",
					sharenum: 20,
					commentnum: 30,
					goodnum: 40
				},
				// 分享
				{
					userpic: "../../static/demo/userpic/14.jpg",
					username: "昵称",
					sex: 0, //0 男 1 女
					age: 20,
					isguanzhu: false,
					title: "我是标题",
					titlepic: "",
					video: false,
					share: {
						title: "我是标题",
						titlepic: "../../static/demo/datapic/14.jpg"
					},
					path: "江苏 徐州",
					sharenum: 20,
					commentnum: 30,
					goodnum: 40
				}
			]
		};
	},
	methods: {
		// 跳转到发布页
		openAdd() {
			uni.navigateTo({
				url: '/pages/add-input/add-input'
			});
		},
		// tab栏点击切换
		changeTab(index) {
			this.tabIndex = index
		}
	}
};
</script>

<style lang="scss">
.nav-left,
.nav-right {
	.iconfont {
		font-size: 40rpx;
	}
}

.nav-left {
	margin-left: 16rpx;
	.iconfont {
		color: #ff9619;
	}
}

.nav-center {
	width: 100%;
	.center-item {
		font-size: 35rpx;
		padding: 0 15rpx;
		&.active {
			text {
				padding-bottom: 3rpx;
				border-bottom: 10rpx solid pink;
			}
		}
	}
}

.nav-right {
	width: 100%;
	margin-left: 40rpx;
}

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
				background-color: #007AFF;
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
			color: #AAA;
			.iconfont {
				margin-left: 10rpx;
				padding-left: 5rpx;
			}
		}
		.video-box {
			position: relative;
			.commen-list-play,.commen-list-playinfo {
				position: absolute;
				color: #fff;
			}
			.commen-list-play {
				font-size: 100rpx;
			}
			
			.commen-list-playinfo {
				right: 10rpx;
				bottom: 10rpx;
				background: rgba(51,51,51,.73);
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
