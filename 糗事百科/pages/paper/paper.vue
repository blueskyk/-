<template>
	<view class="paper-box">
		<!-- 操作菜单 -->
		<paper-popus :show="show" @hide="hidePopup" @addFriend="addFriend" @clear="clear"></paper-popus>
		<!-- 小纸条列表 -->
		<block v-for="(item, index) in list" :key="index"><paper-list :item="item" :index="index"></paper-list></block>
		<!-- 上拉加载 -->
		<load-more :loadText="loadText"></load-more>
	</view>
</template>

<script>
import paperList from '../../components/paper/paper-list.vue';
import loadMore from '../../components/common/load-more.vue';
import paperPopus from "../../components/paper/paper-popus.vue"
export default {
	components: {
		paperList,
		loadMore,
		paperPopus
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
				uni.navigateTo({
					url:"../user-list/user-list"
				})
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
	
}
</style>
