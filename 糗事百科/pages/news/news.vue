<template>
	<view>
		<uni-nav-bar :statusBar="true" @clickRight="openAdd">
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
		<view class="common-list u-f">
			<view class="common-list-left">
				<image src="../../static/demo/userpic/14.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="common-list-right">
				<view class="u-f-ac u-f-jsb user-box">
					<view class="u-f-ac user-name">昵称 <view class="icon iconfont icon-nan user-age u-f-ac">20</view></view>
					<view class="icon iconfont icon-zengjia follow">关注</view>
				</view>
				<view class="title">我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</view>
				<view>
					<image class="bg-img" src="../../static/demo/datapic/13.jpg" mode="widthFix" lazy-load></image>
				</view>
				<view class="u-f-ac u-f-jsb info-box">
					<view>江苏 徐州</view>
					<view class="u-f-ac">
						<view class="icon iconfont icon-zhuanfa">10</view>
						<view class="icon iconfont icon-pinglun1">20</view>
						<view class="icon iconfont icon-dianzan1">30</view>
					</view>
				</view>
			</view>
		</view>
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
			tabBars: [{ name: '关注', id: 'guanzhi' }, { name: '话题', id: 'huati' }]
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
	}
	
}
</style>
