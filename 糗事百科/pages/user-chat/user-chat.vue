<template>
	<view>
		<!-- 聊天列表 -->
		<block v-for="(item, index) in list" :key="index">
			<user-chat-list :item="item" :index="index"></user-chat-list>
		</block>
		<!-- 输入框 -->
		<user-chat-bottom @submit="submit"></user-chat-bottom>
	</view>
</template>

<script>
import time from '../../common/time.js';
import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
import userChatList from "../../components/user-chat/user-chat-list.vue"
export default {
	components: {
		userChatBottom,
		userChatList
	},
	data() {
		return {
			list: []
		};
	},
	methods: {
		submit(text) {
			console.log(text);
		},
		getData() {
			let arr = [
				{
					isMe: false,
					userPic: '../../static/demo/userpic/6.jpg',
					type: 'text',
					content: '哈哈哈哈',
					time: '1610800529'
				},
				{
					isMe: true,
					userPic: '../../static/demo/userpic/11.jpg',
					type: 'img',
					content: '../../static/demo/datapic/12.jpg',
					time: '1610803370'
				}
			];
			for(let i = 0; i < arr.length; i++) {
				arr[i].settime = time.gettime.gettime(arr[i].time)
			}
			this.list = arr; 
		}
	},
	onLoad() {
		this.getData();
	}
};
</script>

<style lang="scss">

</style>
