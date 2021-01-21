<template>
	<view class="body">
		<input password type="text" class="uni-input common-input" placeholder="输入你要绑定的邮箱" v-model="email" />
		<input password type="text" class="uni-input common-input" placeholder="请输入密码" v-model="password" />
		<button type="default" class="user-set-btn" :loading="loading" :class="{ 'user-set-btn-disable': disabled }" :disabled="disabled" @tap="submit">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				password: "",
				disabled: true,
				loading:false
			}
		},
		watch: {
			email(val) {
				this.change()
			},
			password(val) {
				this.change()
			}
		},
		methods: {
			// 检验密码是否符合操作
			check() {
				if (!this.email || this.email == '') {
					uni.showToast({
						title: '邮箱不能为空',
						icon: 'none'
					});
					return false;
				}
				// 验证邮箱格式
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(!ePattern.test(this.email)) {
					uni.showToast({
						title: '请输入正确格式的邮箱',
						icon: 'none'
					});
					return false
				}
				if (!this.password || this.password == '') {
					uni.showToast({
						title: '密码不能为空',
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
				if (this.email && this.password) {
					this.disabled = false;
					return;
				}
				this.disabled = true;
			}
		}
	}
</script>

<style>

</style>
