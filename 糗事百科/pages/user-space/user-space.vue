<template>
	<view>
		<!-- 背景图+个人信息 -->
		<user-space-head :userInfo="userInfo"></user-space-head>
		<!-- 用户数据 -->
		<view class="user-sapce-data">
			<home-data :homedata="spaceData"></home-data>
		</view>
		<view style="height: 20rpx;background-color: #f4f4f4;"></view>
		<!-- tab切换 -->
		<swiper-head @itemClick="itemClick" :tabBars="tabBars" :tabIndex="tabIndex" swiperStyle="border: none;" swiperItem="width: 33.3%;"></swiper-head>
		<!-- 主页信息 -->
		<view class="topic-detail-list animated fadeInLeft fast">
			<block v-for="(item, index) in tabList" :key="index">
				<template v-if="tabIndex==0">
					<user-space-user-info :userInfo="userInfo"></user-space-user-info>
				</template>
				<template v-else-if="tabIndex == index">
					<!-- 列表 -->
					<block v-for="(list, listIndex) in item.list" :key="listIndex"><common-list :item="list" :index="listIndex"></common-list></block>
					<!-- 上拉加载 -->
					<load-more :loadText="item.loadText"></load-more>
				</template>
			</block>
		</view>
		<user-space-popup :show="show" @hidePopup="toggleShow" @lahei="lahei"@beizhu="beizhu"></user-space-popup>
	</view>
</template>

<script>
import userSpaceHead from "../../components/user-space/user-space-head.vue"
import homeData from "../../components/home/home-data.vue"
import swiperHead from "../../components/index/swiper-head.vue"
import userSpaceUserInfo from "../../components/user-space/user-space-userinfo.vue"
import loadMore from "../../components/common/load-more.vue"
import commonList from "../../components/common/common-list.vue"
import userSpacePopup from "../../components/user-space/user-space-popup.vue"
export default {
	components: {
		userSpaceHead,
		homeData,
		swiperHead,
		userSpaceUserInfo,
		commonList,
		loadMore,
		userSpacePopup
	},
	data() {
		return {
			userInfo: {
				bgImg: 4,
				userPic: "../../static/demo/userpic/6.jpg",
				userName: "昵称",
				sex: 0,
				age: 20,
				isGuanZhu: false,
				regtime: "2020-11-07",
				id: 121234,
				birthday: "2000-11-07",
				job: "IT",
				city: "江苏徐州",
				marry:"未婚"
			},
			spaceData: [
				{name: "获赞",num: "10k"},
				{name: "关注",num: 11},
				{name: "粉丝",num: 12}
			],
			tabIndex: 0,
			tabBars: [
				{name: "主页",id: "zhuye"},
				{name: "糗事",id: "qiushi"},
				{name: "动态",id: "dongtai"},
				
			],
			tabList: [
				{},
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
			],
			show: false
		}
	},
	methods: {
		// 操作菜单显示隐藏
		toggleShow() {
			this.show = !this.show
		},
		// 拉黑
		lahei() {
			console.log("拉黑")
			this.toggleShow()
		},
		// 备注
		beizhu() {
			console.log("备注")
			this.toggleShow()
		},
		itemClick(index) {
			this.tabIndex = index
		},
		// 上拉加载更多
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
	},
	onReachBottom() {
		// 下拉加载更多
		this.loadMore()
	},
	onNavigationBarButtonTap(e) {
		if(e.index==0) {
			this.toggleShow()
		}
	}
};
</script>

<style lang="scss">
.user-space-margin {
		margin: 15rpx 0;
	}
	.user-sapce-data {
		position: relative;
		z-index: 20;
		background-color: #fff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-top: -15rpx;
	}
	
</style>
