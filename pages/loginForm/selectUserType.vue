<template>
	<view class="selectUserType">
		<view class="selectContent selectDoctor" @click="pushDoctor()">
			<view class="selectTitle">医生/助理</view>
			<view class="clockSelect">点击选择 ></view>
		</view>
		<view class="selectContent selectPatient" @click="pushPatient()">
			<view class="selectTitle">患者/家属</view>
			<view class="clockSelect">点击选择 ></view>
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
		onLoad() {
			uni.hideTabBar()
		},
		methods: {
			pushDoctor () {
				this.navigateTo('/pages/loginForm/localNumberLogin')
			},
			pushPatient () {
				this.navigateTo('/pages/loginForm/loginForm')
			}
		}
	}
</script>

<style lang="less" scoped>
	.bgImage {
		width: 100%;
		height: 100%;
		background: url('https://s1.ax1x.com/2022/11/10/zp1ZB8.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.selectUserType {
		width: 100vw;
		display: flex;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #def6ff;


		.selectContent {
			width: 100%;
			color: #ffffff;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;

			.selectTitle {
				padding: 5px 10px;
				font-size: 20px;
				border: 1px solid #ffffff;
			}
			.clockSelect {
				margin-top: 10px;
			}
		}

		.selectDoctor {
			background-color: #49adff;
		}

		.selectPatient {
			background-color: #5edcc9;
		}
	}
</style>
