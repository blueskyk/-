<template>
	<view class="change-password">
		<input type="password" class="uni-input common-input" placeholder="输入旧密码" v-model="oldPassWord" />
		<input type="password" class="uni-input common-input" placeholder="输入新密码" v-model="newPassWord" />
		<input type="password" class="uni-input common-input" placeholder="输入确认密码" v-model="rePassWord" />
		<button type="default" class="user-set-btn" :loading="loading" :class="{ 'user-set-btn-disable': disabled }" :disabled="disabled" @tap="submit">完成</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			oldPassWord: '',
			newPassWord: '',
			rePassWord: '',
			disabled: true,
			loading: false
		};
	},
	watch: {
		oldPassWord(val) {
			this.change();
		},
		newPassWord(val) {
			this.change();
		},
		rePassWord(val) {
			this.change();
		}
	},
	methods: {
		// 检验密码是否符合操作
		check() {
			if (!this.oldPassWord || this.oldPassWord == '') {
				uni.showToast({
					title: '旧密码不能为空',
					icon: 'none'
				});
				return false;
			}
			if (!this.newPassWord || this.newPassWord == '') {
				uni.showToast({
					title: '新密码不能为空',
					icon: 'none'
				});
				return false;
			}
			if (this.newPassWord == this.oldPassWord) {
				uni.showToast({
					title: '旧密码不能和新密码一致',
					icon: 'none'
				});
				return false;
			}
			if (!this.rePassWord || this.rePassWord == '') {
				uni.showToast({
					title: '确认密码不能为空',
					icon: 'none'
				});
				return false;
			}
			if (this.newPassWord !== this.rePassWord) {
				uni.showToast({
					title: '两次密码输入不一致',
					icon: 'none'
				});
				return false;
			}
			return true;
		},
		// 提交密码操作
		submit() {
			this.loading = true;
			this.disabled = true;
			if (!this.check()) {
				this.loading = false;
				this.disabled = false
				return;
			}
			uni.showToast({
				title: '修改密码成功',
				icon: 'success',
				duration: 1500
			});
			this.loading = false;
			this.disabled = false
		},
		// 修改按钮的显示样式
		change() {
			if (this.oldPassWord && this.oldPassWord && this.rePassWord) {
				this.disabled = false;
				return;
			}
			this.disabled = true;
		}
	}
};
</script>

<style lang="scss">
.change-password {
	padding: 0 20rpx;
}
</style>
