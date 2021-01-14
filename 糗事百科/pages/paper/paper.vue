<template>
	<view>
		<view class="paper-box">
			<!-- 小纸条列表 -->
			<block v-for="(item,index) in list" :key="index">
				<paper-list :item="item" :index="index"></paper-list>
			</block>
		</view>
	</view>
</template>

<script>
import paperList from "../../components/paper/paper-list.vue";
export default {
	components: {
		paperList
	},
	data() {
		return {
			list: [
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "0"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "0"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				},
				{
					userPic: "../../static/demo/userpic/6.jpg",
					userName: "我是昵称",
					time: "11:07",
					info: "我是信息",
					noReadNum: "17"
				}
				
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss">
.paper-box {
	padding: 0 20rpx;
}
</style>
