<template>
	<view>
		<template v-if="list.length > 0">
			<block v-for="(item,index) in list" :key="index">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<load-more :loadText="loadText"></load-more>
		</template>
		<template v-else-if="isSearch && list.length < 1">
			<no-thing></no-thing>
		</template>
	</view>
</template>

<script>
	import indexList from "../../components/index/index-list.vue";
	import noThing from "../../components/common/no-thing.vue";
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components: {
			indexList,
			noThing,
			loadMore
		},
		data() {
			return {
				list: [],
				loadText: "上拉加载更多",
				isSearch: false,
				searchText: ""
			}
		},
		methods: {
			// 上拉加载事件
			loadMore(index) {
				if (this.loadText != "上拉加载更多") {
					return
				}
				// 修改状态
				this.loadText = "加载中...",
					// 获取数据
					setTimeout(() => {
						let obj = {
							userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
							userName: "昵称", //用户昵称
							isguanzhu: true, //是否关注
							title: "我是标题", //标题
							type: "img", //img: 图片,video:视频
							titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
							infoNum: {
								infoIndex: 0, //0: 代表没有操作,1: 顶,2: 踩
								smileNum: 10, //顶数量
								sadNum: 10 //踩数量
							},
							commentNum: 10, //评论数量
							shareNum: 10 //分享数量
						}
						this.list.push(obj)
						this.loadText = "上拉加载更多"
					}, 1000)
			},
			// 搜索事件
			getData() {
				uni.showLoading()
				setTimeout(() => {
					let arr = [
						{
								userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
								userName: "昵称", //用户昵称
								isguanzhu: true, //是否关注
								title: "我是标题", //标题
								type: "img", //img: 图片,video:视频
								titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
								infoNum: {
									infoIndex: 0, //0: 代表没有操作,1: 顶,2: 踩
									smileNum: 10, //顶数量
									sadNum: 10 //踩数量
								},
								commentNum: 10, //评论数量
								shareNum: 10 //分享数量
							},
							{
								userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
								userName: "昵称", //用户昵称
								isguanzhu: false, //是否关注
								title: "我是标题", //标题
								type: "video", //img: 图片,video:视频
								titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
								playNum: 200000, //播放次数
								time: "2:47", //时长
								infoNum: {
									infoIndex: 1, //0: 代表没有操作,1: 顶,2: 踩
									smileNum: 10, //顶数量
									sadNum: 10 //踩数量
								},
								commentNum: 10, //评论数量
								shareNum: 10 //分享数量
							}
					]
					this.list = arr
					uni.hideLoading()
				},1000)
			}
		},
		onReachBottom() {
			// 上拉加载更多
			this.loadMore()
		},
		onNavigationBarButtonTap(e) {
			if(e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},
		onNavigationBarSearchInputConfirmed(e) {
			if(e.text) {
				this.isSearch = true
				this.getData(e.text)
			}
		},
		onPullDownRefresh() {
			this.getData()
			uni.stopPullDownRefresh()
		}
	}
</script>

<style>

</style>
