<template>
	<view class="list-box">
		<swiper-head @itemClick="itemClick" :tabBars="tabBars" :tabIndex="tabIndex" swiperStyle="border: none;" swiperItem="width: 33.3%;"></swiper-head>

		<swiper class="swiper-box" :style="{ height: swiperHeight + 'px' }" :current="tabIndex" @change="changeIndex">
			<swiper-item v-for="(items, index) in newsList" :key="index">
				<scroll-view scroll-y class="" :style="{ height: swiperHeight + 'px' }" @scrolltolower="loadMore(index)">
					<template v-if="items.list.length > 0">
						<!-- 图文列表 -->
						<block v-for="(item, index1) in items.list" :key="index1"><user-list :item="item" :index="index1"></user-list></block>
						<!-- 上拉加载更多 -->
						<load-more :loadText="items.loadText"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- 好友列表 -->
		<!-- <block v-for="(item,index) in list" :key="index">
			<user-list :item="item" :index="index"></user-list>
		</block> -->
	</view>
</template>

<script>
import swiperHead from '../../components/index/swiper-head.vue';
import userList from '../../components/user-list/user-list.vue';
import loadMore from '../../components/common/load-more.vue';
import noThing from '../../components/common/no-thing.vue';
export default {
	components: {
		swiperHead,
		userList,
		loadMore,
		noThing
	},
	data() {
		return {
			tabIndex: 0,
			swiperHeight: 500,
			tabBars: [{ name: '互关', id: 'huguan', num: 10 }, { name: '关注', id: 'gaunzhu', num: 20 }, { name: '粉丝', id: 'fensi', num: 30 }],
			newsList: [
				{
					loadText: '上拉加载更多',
					list: [
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						}
					]
				},
				{
					loadText: '上拉加载更多',
					list: [
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},

						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						}
					]
				},
				{
					loadText: '上拉加载更多',
					list: [
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},
				
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},
				
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},
				
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},
				
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						},
				
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 1,
							isGuanzhu: false
						},
						{
							userPic: '../../static/demo/userpic/15.jpg',
							userName: '昵称',
							age: 20,
							sex: 0,
							isGuanzhu: true
						}
					]
				}
			]
		};
	},
	methods: {
		// item点击事件
		itemClick(index) {
			this.tabIndex = index;
		},
		// 滑动修改tabbar选项
		changeIndex(e) {
			this.tabIndex = e.detail.current;
		},
		// 上拉加载
		loadMore(index) {
			if (this.newsList[index].loadText != '上拉加载更多') {
				return;
			}
			// 修改状态
			(this.newsList[index].loadText = '加载中...'),
				// 获取数据
				setTimeout(() => {
					let obj = {
						userPic: '../../static/demo/userpic/15.jpg',
						userName: '昵称',
						age: 20,
						sex: 1,
						isGuanzhu: false
					};
					this.newsList[index].list.push(obj);
					this.newsList[index].loadText = '上拉加载更多';
				}, 1000);
		}
	},
	onNavigationBarButtonTap(e) {
		switch (e.index) {
			case 0:
				uni.navigateBack({
					delta: 1
				});
				break;
			case value:
				break;
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

<style lang="scss">
.list-box {
	padding: 0 20rpx;
}
</style>
