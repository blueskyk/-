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
</style>
