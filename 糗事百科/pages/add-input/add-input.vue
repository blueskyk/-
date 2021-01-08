<template>
	<view>
		<uni-nav-bar :statusBar="true" leftIcon="back" rightText="发布" @clickLeft="back" @clickRight="submit">
			<view @tap="changePersonal" class="u-f-ajc" style="width: 100%;">
				{{ yinsi }}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 输入框 -->
		<view class="chatBox"><textarea v-model="text" placeholder="说一句话吧~" /></view>
		<!-- 上传多图 -->
		<upload-images @uploud="uploud"></upload-images>
		<!-- 弹出公告 -->
		<template>
			<uni-popup v-show="true" ref="popup" type="center" :maskClick="false">
				<view class="gonggao">
					<view class="u-f-ajc"><image src="../../static/common/addinput.png" mode="widthFix"></image></view>
					<view class="title" style="padding-left: 20rpx;">
						<view class="title-item">1.涉及黄色,政治,广告及骚扰信息</view>
						<view class="title-item">2.涉及人身攻击</view>
						<view class="title-item">3.留联系方式,透露他人隐私</view>
						<view class="title-item">一经核实将被封禁,情节严重者永久封禁</view>
					</view>
					<button type="default" @tap="close">朕知道了</button>
				</view>
			</uni-popup>
		</template>
	</view>
</template>

<script>
// 修改用户隐私的数组
let changeList = ['所有人可见', '仅自己可见'];
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import uploadImages from '../../components/common/upload-images.vue';
import uniPopup from '../../components/uni-popup/uni-popup.vue';
import uniPopupMessage from '../../components/uni-popup/uni-popup-message.vue';
import uniPopupDialog from '../../components/uni-popup/uni-popup-dialog.vue';
export default {
	data() {
		return {
			yinsi: '所有人可见',
			text: '',
			imageList: [],
			showPopup: true
		};
	},
	components: {
		uniNavBar,
		uploadImages,
		uniPopup,
		uniPopupMessage,
		uniPopupDialog
	},
	methods: {
		// 返回上一页
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		// 发布事件
		submit() {
			console.log("发布")
		},
		// 修改用户隐私
		changePersonal() {
			uni.showActionSheet({
				itemList: changeList,
				success: res => {
					this.yinsi = changeList[res.tapIndex];
				}
			});
		},
		// 修改用户上传图像操作
		uploud(arr) {
			this.imageList = arr;
		},
		// 打开弹窗提醒
		open() {
			this.$refs.popup.open()
		},
		// 关闭弹窗提醒
		close() {
			this.$refs.popup.close();
		}
	},
	mounted() {
		// 提示用户发布规则
		this.open()
	}
};
</script>

<style lang="scss">
.chatBox {
	width: 100vw;
	background-color: #fff;
	textarea {
		width: 100%;
		border: 1rpx solid #eee;
	}
}

.cell-pd {
	padding: 22rpx 30rpx;
}
.gonggao {
	background-color: #fff;
	width: 80vw;
	padding: 30rpx 0;
	image {
		width: 50%;
	}
	
	button {
		background-color: #ffe934;
		color: #171606;
		width: 90%;
	}
}
</style>
