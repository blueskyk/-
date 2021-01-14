<template>
	<view>
		<!-- 背景 -->
		<view class="topic-bg"><image src="../../static/demo/topicpic/13.jpeg" mode="aspectFill"></image></view>
		<!-- 话题信息 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
		<!-- tab切换 -->
		<swiper-head @itemClick="itemClick" :tabBars="tabBars" :activeIndex="tabIndex" swiperStyle="border: none;" swiperItem="width: 50%;"></swiper-head>
		<!-- 列表 -->
		<view class="topic-detail-list animated fadeInLeft fast">
			<block v-for="(item, index) in tabList" :key="index">
				<template v-if="tabIndex == index">
					<!-- 列表 -->
					<block v-for="(list, listIndex) in item.list" :key="listIndex"><common-list :item="list" :index="listIndex"></common-list></block>
					<!-- 上拉加载 -->
					<load-more :loadText="item.loadText"></load-more>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
import topicInfo from '../../components/topic/topic-info.vue';
import swiperHead from "../../components/index/swiper-head.vue";
import commonList from "../../components/common/common-list.vue";
import loadMore from "../../components/common/load-more.vue"
export default {
	data() {
		return {
			topicInfo: {
				titlePic: '../../static/demo/topicpic/13.jpeg',
				title: '忆往事,敬余生',
				desc: '我是描述',
				totalNmu: '1000',
				todayNmu: '1000'
			},
			tabIndex: 0,
			tabBars: [
				{name: "默认",id: "moren"},
				{name: "最新",id: "zuixin"}
			],
			tabList: [
				{
					loadText: "上拉加载更多",
					list: [
						// 文字
						{
							userpic: '../../static/demo/userpic/14.jpg',
							username: '昵称',
							sex: 0, //0 男 1 女
							age: 20,
							isguanzhu: false,
							title: '我是标题',
							titlepic: '',
							video: false,
							share: false,
							path: '江苏 徐州',
							sharenum: 20,
							commentnum: 30,
							goodnum: 40
						},
						// 图文
						{
							userpic: '../../static/demo/userpic/14.jpg',
							username: '昵称',
							sex: 0, //0 男 1 女
							age: 20,
							isguanzhu: false,
							title: '我是标题',
							titlepic: '../../static/demo/datapic/13.jpg',
							video: false,
							share: false,
							path: '江苏 徐州',
							sharenum: 20,
							commentnum: 30,
							goodnum: 40
						},
						// 视频
						{
							userpic: '../../static/demo/userpic/14.jpg',
							username: '昵称',
							sex: 0, //0 男 1 女
							age: 20,
							isguanzhu: false,
							title: '我是标题',
							titlepic: '../../static/demo/datapic/13.jpg',
							video: {
								looknum: '20w',
								time: '2:47'
							},
							share: false,
							path: '江苏 徐州',
							sharenum: 20,
							commentnum: 30,
							goodnum: 40
						}
					]
				},
				{
					loadText: "上拉加载更多",
					list: [
						// 文字
						{
							userpic: '../../static/demo/userpic/14.jpg',
							username: '昵称',
							sex: 0, //0 男 1 女
							age: 20,
							isguanzhu: false,
							title: '我是标题',
							titlepic: '',
							video: false,
							share: false,
							path: '江苏 徐州',
							sharenum: 20,
							commentnum: 30,
							goodnum: 40
						},
						// 图文
						{
							userpic: '../../static/demo/userpic/14.jpg',
							username: '昵称',
							sex: 0, //0 男 1 女
							age: 20,
							isguanzhu: false,
							title: '我是标题',
							titlepic: '../../static/demo/datapic/13.jpg',
							video: false,
							share: false,
							path: '江苏 徐州',
							sharenum: 20,
							commentnum: 30,
							goodnum: 40
						},
						// 视频
						{
							userpic: '../../static/demo/userpic/14.jpg',
							username: '昵称',
							sex: 0, //0 男 1 女
							age: 20,
							isguanzhu: false,
							title: '我是标题',
							titlepic: '../../static/demo/datapic/13.jpg',
							video: {
								looknum: '20w',
								time: '2:47'
							},
							share: false,
							path: '江苏 徐州',
							sharenum: 20,
							commentnum: 30,
							goodnum: 40
						}
					]
				}
			]
		};
	},
	methods: {
		// item点击事件
		itemClick(index) {
			this.tabIndex = index
		},
		loadMore() {
			if (this.tabList[this.tabIndex].loadText != '上拉加载更多') {
				return;
			}
			// 修改状态
			(this.tabList[this.tabIndex].loadText = '加载中...'),
				// 获取数据
				setTimeout(() => {
					let obj = {
						userpic: '../../static/demo/userpic/14.jpg',
						username: '昵称',
						sex: 0, //0 男 1 女
						age: 20,
						isguanzhu: false,
						title: '我是标题',
						titlepic: '../../static/demo/datapic/13.jpg',
						video: false,
						share: false,
						path: '江苏 徐州',
						sharenum: 20,
						commentnum: 30,
						goodnum: 40
					};
					this.tabList[this.tabIndex].list.push(obj);
					this.tabList[this.tabIndex].loadText = '上拉加载更多';
				}, 1000);
		},
		// 获取数据
		getdata() {
			// 下拉刷新
			setTimeout(() => {
			let arr = [
							// 文字
							{
								userpic: '../../static/demo/userpic/14.jpg',
								username: '昵称',
								sex: 0, //0 男 1 女
								age: 20,
								isguanzhu: false,
								title: '我是标题',
								titlepic: '',
								video: false,
								share: false,
								path: '江苏 徐州',
								sharenum: 20,
								commentnum: 30,
								goodnum: 40
							},
							// 图文
							{
								userpic: '../../static/demo/userpic/14.jpg',
								username: '昵称',
								sex: 0, //0 男 1 女
								age: 20,
								isguanzhu: false,
								title: '我是标题',
								titlepic: '../../static/demo/datapic/13.jpg',
								video: false,
								share: false,
								path: '江苏 徐州',
								sharenum: 20,
								commentnum: 30,
								goodnum: 40
							},
							// 视频
							{
								userpic: '../../static/demo/userpic/14.jpg',
								username: '昵称',
								sex: 0, //0 男 1 女
								age: 20,
								isguanzhu: false,
								title: '我是标题',
								titlepic: '../../static/demo/datapic/13.jpg',
								video: {
									looknum: '20w',
									time: '2:47'
								},
								share: false,
								path: '江苏 徐州',
								sharenum: 20,
								commentnum: 30,
								goodnum: 40
							}
						]
						this.tabList[this.tabIndex].list = arr
						uni.stopPullDownRefresh()
			}, 1000);
		}
	},
	onReachBottom() {
		// 下拉加载更多
		this.loadMore()
	},
	onPullDownRefresh() {
		this.getdata()
	},
	components: {
		topicInfo,
		swiperHead,
		commonList,
		loadMore
	}
};
</script>

<style lang="scss">
.topic-bg {
	position: relative;
	width: 100%;
	height: 300rpx;
	overflow: hidden;
	image {
		width: 100%;
		position: absolute;
		filter: blur(20rpx);
	}
}
</style>
