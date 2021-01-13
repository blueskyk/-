<template>
	<view>
		<!-- 背景 -->
		<view class="topic-bg">
			<image src="../../static/demo/topicpic/13.jpeg" mode="aspectFill"></image>
		</view>
		<!-- 话题信息 -->
			<topic-info :topicInfo="topicInfo"></topic-info>
	</view>
</template>

<script>
	import topicInfo from "../../components/topic/topic-info.vue"
	export default {
		data() {
			return {
				topicInfo: {
					titlePic: "../../static/demo/topicpic/13.jpeg",
					title: "忆往事,敬余生",
					desc: "我是描述",
					totalNmu: "1000",
					todayNmu: "1000"
				}
			}
		},
		methods: {
			
		},
		components: {
			topicInfo
		}
	}
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
