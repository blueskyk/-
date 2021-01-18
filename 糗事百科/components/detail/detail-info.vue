<template>
	<view class="common-list u-f animated fadeInLeft fast">
		<view class="common-list-left"><image :src="item.userpic" mode="widthFix" lazy-load></image></view>
		<view class="common-list-right">
			<view class="user">
				<view class="u-f-ac u-f-jsb user-box">
					<view class="u-f-ac user-name">
						{{ item.username }}
						<tag-sex-age :sex="item.sex":age="item.age"></tag-sex-age>
					</view>
					<view v-show="!isguanzhu" class="icon iconfont icon-zengjia follow" @tap="guanzhu">关注</view>
				</view>
				<view class="common-list-r-time">26天前</view>
			</view>
			<view class="title">{{ item.title }}</view>
			<view class="video-box u-f-ajc">
				<!-- 图片 -->
				<block v-for="(pic,index) in item.morePic" :key="index">
					<image class="bg-img"  :src="pic" mode="widthFix" lazy-load @tap="imgDetail(index)"></image>
				</block>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="commen-list-play icon iconfont icon-bofang"></view>
					<view class="commen-list-playinfo">{{ item.video.looknum }} 次播放 {{ item.video.time }}</view>
				</template>
				<!-- 分享 -->
				<view class="common-list-share u-f-ac" v-if="item.share">
					<image :src="item.share.titlepic" mode="widthFix"></image>
					<view>{{ item.share.title }}</view>
				</view>
			</view>
			<view class="u-f-ac u-f-jsb info-box">
				<view>{{ item.path }}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{ item.sharenum }}</view>
					<view class="icon iconfont icon-pinglun1">{{ item.commentnum }}</view>
					<view class="icon iconfont icon-dianzan1">{{ item.goodnum }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
 import tagSexAge from "../common/tag-sex-age.vue"
export default {
	components: {
		tagSexAge
	},
	data() {
		return {
			isguanzhu: this.item.isguanzhu
		}
	},
	methods: {
		// 用户关注
		guanzhu() {
			this.isguanzhu = true
			uni.showToast({
				title:"关注成功"
			})
		},
		// 点击预览图片
		imgDetail(index) {
			uni.previewImage({
				current:index,
				urls: this.item.morePic
			})
		}
	},
	props:{
		item: Object
	}
};
</script>

<style lang="scss" scoped>
@import  "../../common/list.scss";
.common-list {
	border-bottom: 1rpx solid #eee;
	.common-list-right {
		border: none;
	}
	.common-list-r-time {
		color: #aaa;
		font-size: 25rpx;
		background-color: #fff;
	}
}
</style>
