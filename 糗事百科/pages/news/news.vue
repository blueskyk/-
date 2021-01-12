<template>
	<view>
		<!-- 自定导航栏 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="changeTab"></news-nav-bar>
		<!-- 列表 -->
		<block v-for="(item, index) in list" :key="index">
			<common-list :item="item" :index="index"></common-list>
		</block>
	</view>
</template>

<script>
import commonList from "../../components/common/common-list.vue"
import newsNavBar from "../../components/news/news-nav-bar.vue"
export default {
	components: {
		commonList,
		newsNavBar
	},
	data() {
		return {
			tabIndex: 0,
			tabBars: [{ name: '关注', id: 'guanzhi' }, { name: '话题', id: 'huati' }],
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
				},
				// 分享
				{
					userpic: '../../static/demo/userpic/14.jpg',
					username: '昵称',
					sex: 0, //0 男 1 女
					age: 20,
					isguanzhu: false,
					title: '我是标题',
					titlepic: '',
					video: false,
					share: {
						title: '我是标题',
						titlepic: '../../static/demo/datapic/14.jpg'
					},
					path: '江苏 徐州',
					sharenum: 20,
					commentnum: 30,
					goodnum: 40
				}
			]
		};
	},
	methods: {
		// tab栏点击切换
		changeTab(index) {
			this.tabIndex = index;
		}
	}
};
</script>

<style lang="scss">

</style>
