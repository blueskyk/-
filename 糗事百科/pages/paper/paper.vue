<template>
	<view>
		<view class="paper-box">
			<!-- 小纸条列表 -->
			<block v-for="(item,index) in list" :key="index">
				<paper-list :item="item" :index="index"></paper-list>
			</block>
		</view>
		<!-- 上拉加载 -->
		<load-more :loadText="loadText"></load-more>
	</view>
</template>

<script>
import paperList from "../../components/paper/paper-list.vue";
import loadMore from "../../components/common/load-more.vue"
export default {
	components: {
		paperList,
		loadMore
	},
	data() {
		return {
			loadText: "上拉加载更多",
			list: [
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "0"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "0"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "0"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "0"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "0"
				}
			]
		};
	},
	methods: {
		// 获取数据
		getData() {
			setTimeout(() => {
				let arr = [
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "0"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "0"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					},
					
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					},
					{
						userPic: "../../static/demo/userpic/6.jpg",
						userName: "我是昵称",
						time: "11:07",
						info: "我是信息",
						noReadNum: "17"
					}
				]
				this.list = arr
				uni.stopPullDownRefresh()
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
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				}
					this.list.push(obj);
					this.loadText = '上拉加载更多';
				}, 1000);
		}
	},
	onPullDownRefresh() {
		// 获取数据的方法
		this.getData()
	},
	onReachBottom() {
		this.loadMore()
	}
};
</script>

<style lang="scss">
.paper-box {
	padding: 0 20rpx;
}
</style>
