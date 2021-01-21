<template>
	<view class="body">
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">头像</view>
			<view class="u-f-ac list-right" @tap="changeImg">
				<image :src="userPic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">昵称</view>
			<view class="u-f-ac list-right">
				<input type="text" :placeholder="userName" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">性别</view>
			<view class="u-f-ac list-right" @tap="changeItem('sex')">
				<view>{{ sex }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">生日</view>
			<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u-f-ac list-right">
					<view>{{ birthday }}</view>
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</picker>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">情感</view>
			<view class="u-f-ac list-right" @tap="changeItem('marry')">
				<view>{{ marry }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">职业</view>
			<view class="u-f-ac list-right" @tap="changeItem('job')">
				<view>{{ job }}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="change-info-list u-f-ac u-f-jsb">
			<view class="list-left">家乡</view>
			<view class="u-f-ac list-right">
				<view>江苏徐州</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<button type="default" class="user-set-btn" @tap="submit">完成</button>
	</view>
</template>

<script>
let sex = ['不限', '男', '女'];
let marry = ['保密', '未婚', '已婚'];
let job = ['开发', '运维', '产品'];
export default {
	data() {
		return {
			userPic: '../../static/demo/userpic/6.jpg',
			userName: '哈哈哈',
			sex: '不限',
			job: 'IT',
			marry: '未婚',
			birthday: '2000-11-07'
		};
	},
	methods: {
		submit() {},
		// 修改用户头像
		changeImg() {
			uni.chooseImage({
				count: 1,
				sizeType: ['compressed'],
				success: res => {
					this.userPic = res.tempFilePaths;
				}
			});
		},
		// 实现单项选择
		changeItem(val) {
			let arr = [];
			switch (val) {
				case 'sex':
					arr = sex;
					break;
				case 'marry':
					arr = marry;
					break;
				case 'job':
					arr = job;
					break;
			}
			uni.showActionSheet({
				itemList: arr,
				success: res => {
					switch (val) {
						case 'sex':
							this.sex = arr[res.tapIndex];
							break;
						case 'marry':
							this.marry = arr[res.tapIndex];
							break;
						case 'job':
							this.job = arr[res.tapIndex];
							break;
					}
				}
			});
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		// 修改生日
		bindDateChange(e) {
			this.birthday = e.target.value
		}
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	}
};
</script>

<style lang="scss">
.change-info-list {
	padding: 20rpx;
	border-bottom: 1rpx solid #f4f4f4;
	.list-left {
		font-size: 32rpx;
		font-weight: bold;
		color: #9b9b9b;
	}
	.list-right {
		image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}
		.icon {
			margin-left: 20rpx;
		}
		input {
			text-align: right;
		}
	}
}
</style>
