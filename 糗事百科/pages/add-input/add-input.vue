<template>
	<view>
		<uni-nav-bar :statusBar="true" leftIcon="back" rightText="发布" @clickLeft="back" @clickRight="submit">
			<view @tap="changePersonal" class="u-f-ajc" style="width: 100%;">
				{{yinsi}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 输入框 -->
		<view class="chatBox">
			<textarea v-model="text" placeholder="说一句话吧~" />
			</view>
		<!-- 上传多图 -->
		<upload-images @uploud="uploud"></upload-images>
	</view>
</template>

<script>
	// 修改用户隐私的数组
	let changeList = ['所有人可见', '仅自己可见']
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImages from "../../components/common/upload-images.vue"
	export default {
		data() {
			return {
				yinsi: "所有人可见",
				text: "",
				imageList: []
			}
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
				    success:  (res) => {
				      this.yinsi = changeList[res.tapIndex]
				    }
				})
			  },
			  uploud(arr) {
				  this.imageList = arr
			  }
			},
		components: {
			uniNavBar,
			uploadImages
			
		}
	}
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
</style>
