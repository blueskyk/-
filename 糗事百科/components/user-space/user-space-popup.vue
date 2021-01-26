<template>
	<view>
		<!-- 蒙版 -->
		<view class="popup-mask" v-show="show" @tap="hidePopup"></view>
		<!-- 操作菜单 -->
		<view class="paper-popup" v-show="show">
			<view class="u-f-ac popup-box" hover-class="popup-hover" @tap="lahei">
				<view class="icon iconfont icon-sousuo"></view>
				拉黑
			</view>
			<view class="u-f-ac popup-box" hover-class="popup-hover" @tap="beizhu">
				<view class="icon iconfont icon-qingchu"></view>
				备注
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show: Boolean
		},
		methods:{
			hidePopup() {
				this.$emit("hidePopup")
			},
			lahei() {
				this.$emit("lahei")
			},
			beizhu() {
				this.$emit("beizhu")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.paper-popup {
		position: fixed;
		z-index: 200;
		top: 80rpx;
		right: 0;
		width: 55%;
		background-color: #fff;
		box-shadow: 1rpx 1rpx 20rpx 2rpx #ccc;
		font-size: 35rpx;
		.popup-box {
			padding: 20rpx;
			.icon {
				margin-right: 20rpx;
				font-weight: bold;
			}
		}
	}
	.popup-hover {
		background-color: #eee;
	}
	.popup-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 199;
	}
</style>
