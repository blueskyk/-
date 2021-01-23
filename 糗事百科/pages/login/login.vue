<template>
	<view>
		<uni-status-bar bgColor="#ffe933"></uni-status-bar>
		<!-- 关闭按钮 -->
		<view class="icon iconfont icon-guanbi" @tap="back"></view>
		<!-- 引入背景图 -->
		<image class="login-head" src="../../static/common/loginhead.png" mode="widthFix" lazy-load></image>
		<!-- 登录框 -->
		<view class="body">
			<!-- 密码登录 -->
			<template v-if="status">
				<input type="text" class="uni-input common-input" placeholder="昵称/手机号/邮箱" v-model="userName" />
				<view class="login-input-box">
					<input type="text" class="uni-input common-input" placeholder="请输入密码" v-model="password" />
					<view class="forget u-f-ajc">忘记密码</view>
				</view>
			</template>
			
			<!-- 验证码登录 -->
			<template v-else>
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input type="text" class="uni-input common-input phone-input" placeholder="输入手机号码" v-model="phone" />
				</view>
				<view class="login-input-box">
					<input type="text" class="uni-input common-input" placeholder="请输入验证码" v-model="checkNum" />
					<view class="forget u-f-ajc yanzhengma"><view class="u-f-ajc yanzhengma-text">获取验证码</view></view>
				</view>
			</template>
			
			
			<button type="default" class="user-set-btn" :loading="loading" :class="{ 'user-set-btn-disable': disabled }" :disabled="disabled" @tap="submit">完成</button>
		</view>
		<!-- 登录状态切换 -->
		<view class="u-f-ajc login-status" style="padding: 20rpx 0;" @tap="changeStatus">
			{{status?'账号密码登录':'验证码'}}登录
			<view class="icon iconfont icon-jinru"></view>
		</view>
		<!-- 第三方登录 -->
		<view class="other-login-title u-f-ajc" style="padding: 20rpx 0; color: #aaa;">第三方登录</view>
		<!-- 登录图标 -->
		<other-login></other-login>
		<!-- 协议 -->
		<view class="u-f-ajc" style="color: #aaa; padding: 20rpx 0;">
			注册即代表您同意<view style="color: #007AFF;">《app用户协议》</view>
		</view>
	</view>
</template>

<script>
import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue';
import otherLogin from "../../components/home/other-login.vue"
export default {
	components: {
		uniStatusBar,
		otherLogin
	},
	data() {
		return {
			disabled: true,
			loading: false,
			status: true ,//true为密码登录 false为验证码登录,
			userName: "",
			password: "",
			phone:"",
			checkNum: ""
		};
	},
	watch: {
		userName(val) {
			this.onBtnChange()
		},
		password(val) {
			this.onBtnChange()
		},
		phone(val) {
			this.onBtnChange()
		},
		checkNum(val) {
			this.onBtnChange()
		}
	},
	methods: {
		// 返回上一步
		back() {
			console.log('返回上一步');
		},
		// 提交登录
		submit() {},
		// 初始化表单
		initInput() {
			this.userName = "",
			this.password = "",
			this.phone = "",
			this.checkNum = ""
		},
		// 修改登录状态
		changeStatus() {
			this.initInput()
			this.status = !this.status
		},
		// 监听输入框的变化
		onBtnChange() {
			if((this.userName && this.password) || (this.phone && this.checkNum)) {
				this.disabled = false
				return
			}
			this.disabled = true
		}
	}
};
</script>

<style lang="scss">
.login-head {
	width: 100%;
}
.icon-guanbi {
	position: fixed;
	top: 60rpx;
	left: 30rpx;
	font-size: 40rpx;
	font-weight: bold;
	color: #332f0a;
	z-index: 20;
}
.other-login-title {
	position: relative;
	&::before,&::after{
		content: '';
		position: absolute;
		top: 50%;
		width: 100rpx;
		height: 1rpx;
		background-color: #ccc;
	}
	&::before {
		left: 25%;
	}
	&::after {
		right: 25%;
	}
}

.login-input-box {
	position: relative;
	input {
		padding-right: 150rpx;
	}
	.forget {
		width: 150rpx;
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 20;
		color: #ccc;
	}
	.phone {
		width: 100rpx;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 30;
		color: #000;
		font-weight: bold;
	}
	.phone-input {
		padding-left: 100rpx;
	}
	.yanzhengma {
		.yanzhengma-text {
			background-color: #eee;
			font-size: 30rpx;
			border-radius: 10rpx;
			font-size: 25rpx;
			padding: 10rpx;
		}
	}
}
</style>
