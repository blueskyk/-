<template>
	<view>
		<uni-collapse>
			<block v-for="(item,index) in llist" :key="index">
				<uni-collapse-item :title="item.title" :showAnimation="true">
					<view style="padding: 30rpx;" class="content">{{item.content}}</view>
				</uni-collapse-item>
			</block>
			
		</uni-collapse>
		<view class="body"><button type="primary" class="user-set-btn">意见反馈</button></view>
	</view>
</template>

<script>
	import uniCollapse from "../../components/uni-collapse/uni-collapse.vue"
	import uniCollapseItem from "../../components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				llist: [
					{
						title: "客服什么时候在线?",
						content: "亲爱的用户，客服的工作时间为：周一至周六10:00-12:00,14:00-19:00,非工作时间的资讯反馈会自动转换为留言,客服上班后会第一时间回复哦~"
					},
					{
						title: "忘记账号/昵称/密码怎么办?",
						content: "亲爱的用户，客服的工作时间为：周一至周六10:00-12:00,14:00-19:00,非工作时间的资讯反馈会自动转换为留言,客服上班后会第一时间回复哦~"
					},
					{
						title: "怎么搜索/查找、关注/取关用户?",
						content: "亲爱的用户，客服的工作时间为：周一至周六10:00-12:00,14:00-19:00,非工作时间的资讯反馈会自动转换为留言,客服上班后会第一时间回复哦~"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
