<template>
	<view>
		<!-- 自定导航栏 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="changeTab"></news-nav-bar>
		<!-- 列表 -->
		<!-- <block v-for="(item, index) in list" :key="index">
			<common-list :item="item" :index="index"></common-list>
		</block> -->

		<swiper class="swiper-box" :style="{ height: swiperHeight + 'px' }" :current="tabIndex" @change="changeIndex">
			<!-- 关注 -->
			<swiper-item>
				<scroll-view scroll-y class="" :style="{ height: swiperHeight + 'px' }" @scrolltolower="loadMore">
					<!-- 列表 -->
					<block v-for="(item, index) in guanzhu.list" :key="index"><common-list :item="item" :index="index"></common-list></block>
					<!-- 上拉加载更多 -->
					<load-more :loadText="guanzhu.loadText"></load-more>
				</scroll-view>
			</swiper-item>
			<!-- 话题 -->
			<swiper-item><scroll-view scroll-y class="" :style="{ height: swiperHeight + 'px' }">话题</scroll-view></swiper-item>
		</swiper>
	</view>
</template>

<script>
import commonList from '../../components/common/common-list.vue';
import newsNavBar from '../../components/news/news-nav-bar.vue';
import loadMore from '../../components/common/load-more.vue';
export default {
	components: {
		commonList,
		newsNavBar,
		loadMore
	},
	data() {
		return {
			swiperHeight: 500,
			tabIndex: 0,
			tabBars: [{ name: '关注', id: 'guanzhi' }, { name: '话题', id: 'huati' }],
			guanzhu: {
				loadText: '上拉加载更多',
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
			}
		};
	},
	methods: {
		// tab栏点击切换
		changeTab(index) {
			this.tabIndex = index;
		},
		// 滑动修改tabbar选项
		changeIndex(e) {
			this.activeIndex = e.detail.current;
		},
		// 上拉加载更多
		loadMore() {
			if (this.guanzhu.loadText != '上拉加载更多') {
				return;
			}
			// 修改状态
			(this.guanzhu.loadText = '加载中...'),
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
					this.guanzhu.list.push(obj);
					this.guanzhu.loadText = '上拉加载更多';
				}, 1000);
		}
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				let height = res.windowHeight - 50;
				this.swiperHeight = height;
			}
		});
	}
};
</script>

<style lang="scss"></style>
