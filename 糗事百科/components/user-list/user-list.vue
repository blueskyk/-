<template>
	<view class="user-list u-f-ac">
		<image :src="item.userPic" mode="widthFix" lazy-load></image>
		<view class="user-box">
			<view class="user-name">{{item.userName}}</view>
			<tag-sex-age :age="item.age" :sex="item.sex"></tag-sex-age>
		</view>
		<view class="icon iconfont u-f-ajc" :class="[item.isGuanzhu?'icon-xuanze-yixuan':'icon-zengjia1']"></view>
	</view>
</template>

<script>
	import tagSexAge from "../common/tag-sex-age.vue"
	export default {
		components: {
			tagSexAge
		},
		props: {
			item:Object,
			index: Number
		}
	}
</script>

<style lang="scss" scoped>
	.user-list {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		.user-box {
			flex: 1;
			.user-name {
				font-size: 35rpx;
			}
		}
		.icon {
			width: 80rpx;
		}
		
		.icon-zengjia1 {
			color: #f8791b;
			font-size: 50rpx;
		}
		.icon-xuanze-yixuan{
			color: #ccc;
			font-size: 50rpx;
		}
	}
</style>
