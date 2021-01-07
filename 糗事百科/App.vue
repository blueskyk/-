<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/common.css";
	/* 引入动画库 */
	@import "./common/animate.css";
	/* 引入字体图标库 */
	@import "./common/iconfont.css";
	/* 引入官方css */
	@import "./common/uni.css";
</style>
