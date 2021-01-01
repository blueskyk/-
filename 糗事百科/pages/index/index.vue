<template>
	<view class="content">
		<block v-for="(item,index) in list" :key="index">
			<index-list :item="item" :index="index"></index-list>
		</block>
	</view>
</template>

<script>
	import indexList from "../../components/index/index-list.vue"
	export default {
		data() {
			return {
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
				
				]
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			indexList
		}
	}
</script>

<style lang="scss">
	
</style>
