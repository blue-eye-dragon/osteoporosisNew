<template>
	<view>
		<view class="localNumber">
			<button type="primary" @click="pushDoctor">本机号码一键登录</button>
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {

			}
		},
		methods: {
			pushDoctor() {
				this.$store.commit('setUserType', 1)
				this.switchTab('/pages/serverPages/serverPages')
			}
		}
	}
</script>

<style lang="less" scoped>
	.localNumber {
		padding: 40rpx;
		margin-top: 240rpx;
	}
</style>
