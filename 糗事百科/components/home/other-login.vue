<template>
	<view class="other-login u-f-ac">
		<view class="u-f-ajc other-login-item u-f1"><view class="icon iconfont icon-weixin u-f-ajc"></view></view>
		<view class="u-f-ajc other-login-item u-f1"><view class="icon iconfont icon-xinlangweibo u-f-ajc"></view></view>
		<view class="u-f-ajc other-login-item u-f1"><view class="icon iconfont icon-QQ u-f-ajc"></view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				providerList: []
			}
		},
		onLoad() {
			this.getLoginAuth();
		},
		methods:{
			// 获取当前登录渠道
			getLoginAuth(){
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						this.providerList = result.provider.map((value) => {
							let providerName = '';
							let icon='';
							switch (value) {
								case 'weixin':
									providerName = '微信登录';
									icon='weixin';
									break;
								case 'qq':
									providerName = 'QQ登录';
									icon='QQ';
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录';
									icon='xinlangweibo';
									break;
								case 'alipay':
									providerName = '支付宝登录';
									icon='';
									break;
							}
							return {
								name: providerName,
								icon:icon,
								id: value
							}
						});
						
					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});
			},
			// 登录
			tologin(provider) {
				uni.login({
					provider: provider.id,
					success: (res) => {
						console.log(JSON.stringify(res))
						console.log('login success:', res);
						// 更新保存在 store 中的登录状态
						console.log('登录成功，保存到本地存储，修改当前用户登录状态')
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.other-login {
		padding: 20rpx 80rpx;
		.other-login-item {
			.icon {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				border: 1rpx solid;
				font-size: 50rpx;
				color: #fff;
			}
			.icon-weixin {
				background-color: #2bd19b;
			}
			.icon-xinlangweibo {
				background-color: #fc7729;
			}
			.icon-QQ {
				background-color: #2caefc;
			}
		}
	}
</style>
