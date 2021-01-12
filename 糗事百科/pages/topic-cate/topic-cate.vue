<template>
	<view>
		<swiper-head @itemClick="itemClick" :tabBars="tabBars" :activeIndex="activeIndex"></swiper-head>

		<swiper class="swiper-box" :style="{ height: swiperHeight + 'px' }" :current="activeIndex" @change="changeIndex">
			<swiper-item v-for="(items, index) in tabList" :key="index">
				<scroll-view scroll-y class="" :style="{ height: swiperHeight + 'px' }" @scrolltolower="loadMore(index)">
					<template v-if="items.list.length > 0">
						<!-- 图文列表 -->
						<view class="topic-box">
							<block v-for="(item, index1) in items.list" :key="index1">
								<topic-list :item="item" :index="index1"></topic-list>
								</block>
						</view>
						<!-- 上拉加载更多 -->
						<load-more :loadText="items.loadText"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import swiperHead from "../../components/index/swiper-head.vue";
import noThing from "../../components/common/no-thing.vue"
import loadMore from "../../components/common/load-more.vue"
import topicList from "../../components/news/topic-list.vue"
export default {
	data() {
		return {
			tabBars: [{
					name: "关注",
					id: "guanzhu"
				},
				{
					name: "推荐",
					id: "tuijian"
				},
				{
					name: "热点",
					id: "redian"
				},
				{
					name: "科技",
					id: "keji"
				},
				{
					name: "体育",
					id: "tiyu"
				},
				{
					name: "财经",
					id: "caijing"
				}
			],
			activeIndex: 0,
			swiperHeight: 500,
			tabList: [{
					loadText: "上拉加载更多",
					list: [
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							}

					]
				},
				{
					loadText: "上拉加载更多",
					list: [

							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							}

					]
				},
				{
					loadText: "上拉加载更多",
					list: [

							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							}

					]
				},
				{
					loadText: "上拉加载更多",
					list: [

							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							},
							{
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							}

					]
				},
				{
					loadText: "上拉加载更多",
					list: []
				},
				{
					loadText: "上拉加载更多",
					list: []
				}
			],
		}
	},
	components: {
		swiperHead,
		noThing,
		loadMore,
		topicList
	},
	methods: {
		// 修改tabbr选中激活样式
		itemClick(index) {
			this.activeIndex = index
		},
		// 滑动修改tabbar选项
		changeIndex(e) {
			this.activeIndex = e.detail.current
		},
		// 上拉加载更多
		loadMore(index) {
			if (this.tabList[index].loadText != "上拉加载更多") {
				return
			}
			// 修改状态
			this.tabList[index].loadText = "加载中...",
				// 获取数据
				setTimeout(() => {
					let obj = {
								titlePic: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								desc: "我是话题描述",
								totalNum:50,
								todayNmu: 10
							}
					this.tabList[index].list.push(obj)
					this.tabList[index].loadText = "上拉加载更多"
				}, 1000)
		}
	},
	onLoad() {
		uni.getSystemInfo({
			success: (res) => {
				let height = (res.windowHeight - 50)
				this.swiperHeight = height
			}
		})
	}
}
</script>

<style lang="scss">
	.topic-box {
		padding: 0 20rpx;
	}
</style>
