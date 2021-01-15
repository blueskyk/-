<template>
	<view class="paper-box">
		<!-- 蒙版 -->
		<view class="popup-mask" v-show="show" @tap="hidePopup"></view>
		<!-- 操作菜单 -->
		<view class="paper-popup" v-show="show">
			<view class="u-f-ac popup-box" hover-class="popup-hover" @tap="addFriend">
				<view class="icon iconfont icon-sousuo"></view>
				加糗友
			</view>
			<view class="u-f-ac popup-box" hover-class="popup-hover" @tap="clear">
				<view class="icon iconfont icon-qingchu"></view>
				清除缓存
			</view>
		</view>
		<!-- 小纸条列表 -->
		<block v-for="(item, index) in list" :key="index"><paper-list :item="item" :index="index"></paper-list></block>
		<!-- 上拉加载 -->
		<load-more :loadText="loadText"></load-more>
	</view>
</template>

<script>
import paperList from '../../components/paper/paper-list.vue';
import loadMore from '../../components/common/load-more.vue';
export default {
	components: {
		paperList,
		loadMore
	},
	data() {
		return {
			loadText: '上拉加载更多',
			list: [
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '17'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '0'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '0'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '17'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '17'
				},

				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '17'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '17'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '0'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '0'
				},
				{
					userPic: '../../static/demo/userpic/6.jpg',
					userName: '我是昵称',
					time: '11:07',
					info: '我是信息',
					noReadNum: '0'
				}
			],
			show: false
		};
	},
	methods: {
		// 获取数据
		getData() {
			setTimeout(() => {
				let arr = [
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '0'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '0'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					},

					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					},
					{
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					}
				];
				this.list = arr;
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 上拉加载
		loadMore() {
			if (this.loadText != '上拉加载更多') {
				return;
			}
			// 修改状态
			(this.loadText = '加载中...'),
				// 获取数据
				setTimeout(() => {
					let obj = {
						userPic: '../../static/demo/userpic/6.jpg',
						userName: '我是昵称',
						time: '11:07',
						info: '我是信息',
						noReadNum: '17'
					};
					this.list.push(obj);
					this.loadText = '上拉加载更多';
				}, 1000);
		},
		// 添加好友
		addFriend() {
			console.log('加糗友');
			this.hidePopup();
		},
		// 清除缓存
		clear() {
			console.log('清除缓存');
			this.hidePopup();
		},
		// 显示菜单
		showPopup() {
			this.show = true;
		},
		// 隐藏菜单
		hidePopup() {
			this.show = false;
		}
	},
	onPullDownRefresh() {
		// 获取数据的方法
		this.getData();
	},
	onReachBottom() {
		this.loadMore();
	},
	onNavigationBarButtonTap(e) {
		switch (e.index) {
			case 0:
				this.hidePopup();
				break;
			case 1:
				this.showPopup();
				break;
		}
	}
};
</script>

<style lang="scss">
.paper-box {
	padding: 0 20rpx;
	.paper-popup {
		position: fixed;
		z-index: 200;
		top: 100rpx;
		right: 0;
		width: 55%;
		background-color: #fff;
		box-shadow: 1rpx 1rpx 20rpx 2rpx #ccc;
		font-size: 35rpx;
		.popup-box {
			padding: 20rpx;
			.icon {
				margin-right: 20rpx;
				font-weight: bold;
			}
		}
	}
	.popup-hover {
		background-color: #eee;
	}
	.popup-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 199;
	}
}
</style>
