<template>
	<view class="content">
		
		<swiper-head @itemClick="itemClick" :tabBars="tabBars" :activeIndex="activeIndex"></swiper-head>
		<swiper class="swiper-box" :style="{height: swiperHeight+'px'}" :current="activeIndex" @change="changeIndex">
			<swiper-item  v-for="(items,index) in tabList" :key="index">
				<scroll-view scroll-y class="" :style="{height: swiperHeight+'px'}"  >
					<view v-for="(item,index1) in items.list" :key="index1">
						<index-list :item="item" :index="index1"></index-list>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import indexList from "../../components/index/index-list.vue"
	import swiperHead from "../../components/index/swiper-head.vue"
	export default {
		data() {
			return {
				swiperHeight: 500,
				tabBars: [
					{ name: "关注", id: "guanzhu" },
					{ name: "推荐", id: "tuijian" },
					{ name: "热点", id: "redian" },
					{ name: "科技", id: "keji" },
					{ name: "体育", id: "tiyu" },
					{ name: "财经", id: "caijing" }
				],
				tabList: [
					{
						list: [
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
							},
							{
								userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
								userName: "昵称", //用户昵称
								isguanzhu: false, //是否关注
								title: "我是标题", //标题
								type: "img", //img: 图片,video:视频
								titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
								playNum: 200000, //播放次数
								time: "2:47", //时长
								infoNum: {
									infoIndex: 2, //0: 代表没有操作,1: 顶,2: 踩
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
								type: "img", //img: 图片,video:视频
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
					},
					{
						list: [
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
								},
								{
									userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
									userName: "昵称", //用户昵称
									isguanzhu: false, //是否关注
									title: "我是标题", //标题
									type: "img", //img: 图片,video:视频
									titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
									playNum: 200000, //播放次数
									time: "2:47", //时长
									infoNum: {
										infoIndex: 2, //0: 代表没有操作,1: 顶,2: 踩
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
									type: "img", //img: 图片,video:视频
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
								},
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
									},
									{
										userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
										userName: "昵称", //用户昵称
										isguanzhu: false, //是否关注
										title: "我是标题", //标题
										type: "img", //img: 图片,video:视频
										titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
										playNum: 200000, //播放次数
										time: "2:47", //时长
										infoNum: {
											infoIndex: 2, //0: 代表没有操作,1: 顶,2: 踩
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
										type: "img", //img: 图片,video:视频
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
					},
					{
						list: [
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
								},
								{
									userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
									userName: "昵称", //用户昵称
									isguanzhu: false, //是否关注
									title: "我是标题", //标题
									type: "img", //img: 图片,video:视频
									titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
									playNum: 200000, //播放次数
									time: "2:47", //时长
									infoNum: {
										infoIndex: 2, //0: 代表没有操作,1: 顶,2: 踩
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
									type: "img", //img: 图片,video:视频
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
								},
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
									},
									{
										userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
										userName: "昵称", //用户昵称
										isguanzhu: false, //是否关注
										title: "我是标题", //标题
										type: "img", //img: 图片,video:视频
										titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
										playNum: 200000, //播放次数
										time: "2:47", //时长
										infoNum: {
											infoIndex: 2, //0: 代表没有操作,1: 顶,2: 踩
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
										type: "img", //img: 图片,video:视频
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
									},
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
										},
										{
											userPic: "../../static/demo/userpic/12.jpg", //用户头像地址
											userName: "昵称", //用户昵称
											isguanzhu: false, //是否关注
											title: "我是标题", //标题
											type: "img", //img: 图片,video:视频
											titlePic: "../../static/demo/datapic/11.jpg", //标题显示图像
											playNum: 200000, //播放次数
											time: "2:47", //时长
											infoNum: {
												infoIndex: 2, //0: 代表没有操作,1: 顶,2: 踩
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
											type: "img", //img: 图片,video:视频
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
					},
					{
						list: []
					},
					{
						list: []
					},
					{
						list: []
					}
				],
				activeIndex: 0
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:  (res) => {
				        console.log(res.windowHeight);
						let height = (res.windowHeight-50)
						this.swiperHeight = height
				    }
			})
		},
		methods: {
			// 修改tabbr选中激活样式
			itemClick(index) {
				this.activeIndex = index
			},
			// 滑动修改tabbar选项
			changeIndex(e) {
				this.activeIndex = e.detail.current
			}
		},
		components: {
			indexList,
			swiperHead
		}
	}
</script>

<style lang="scss">
</style>
