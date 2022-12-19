<template>
	<view class="tab-bar">
		<view v-if="userIdentity == 0" class="tab-bar-item" @click="switchTab(patientServer)">
			<!-- <span class="tab-bar-badge">2</span> -->
			<image class="tab_img" :src="selected === 0 ? patientServer.selectedIconPath : patientServer.iconPath"></image>
			<view class="tab_text" :style="{color: selected === 0 ? selectedColor : color}">{{patientServer.text}}</view>
		</view>
		<view v-if="userIdentity == 1" class="tab-bar-item" @click="switchTab(doctorServer)">
			<!-- <span class="tab-bar-badge">2</span> -->
			<image class="tab_img" :src="selected === 0 ? doctorServer.selectedIconPath : doctorServer.iconPath"></image>
			<view class="tab_text" :style="{color: selected === 0 ? selectedColor : color}">{{doctorServer.text}}</view>
		</view>
		<view v-if="userIdentity == 0" class="tab-bar-item" @click="switchTab(patientChat)">
			<!-- <span class="tab-bar-badge">24</span> -->
			<image class="tab_img" :src="selected === 1 ? patientChat.selectedIconPath : patientChat.iconPath"></image>
			<view class="tab_text" :style="{color: selected === 1 ? selectedColor : color}">{{patientChat.text}}</view>
		</view>
		<view v-if="userIdentity == 1" class="tab-bar-item" @click="switchTab(healthGuide)">
			<!-- <span class="tab-bar-badge">24</span> -->
			<image class="tab_img" :src="selected === 1 ? healthGuide.selectedIconPath : healthGuide.iconPath"></image>
			<view class="tab_text" :style="{color: selected === 1 ? selectedColor : color}">{{healthGuide.text}}</view>
		</view>
		<view v-if="userIdentity == 0" class="tab-bar-item" @click="switchTab(patientInfo)">
			<image class="tab_img" :src="selected === 2 ? patientInfo.selectedIconPath : patientInfo.iconPath"></image>
			<view class="tab_text" :style="{color: selected === 2 ? selectedColor : color}">{{patientInfo.text}}</view>
		</view>
		<view v-if="userIdentity == 1" class="tab-bar-item" @click="switchTab(doctorInfo)">
			<image class="tab_img" :src="selected === 2 ? doctorInfo.selectedIconPath : doctorInfo.iconPath"></image>
			<view class="tab_text" :style="{color: selected === 2 ? selectedColor : color}">{{doctorInfo.text}}</view>
		</view>
	</view>

</template>



<script>
	export default {
		name: "navbar",
		props: {
			selected: { // 当前选中的tab index
				type: Number,
				default: 0
			},
			userIdentity: { // 当前角色
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				color: "#333333",
				selectedColor: "#1a9def",
				doctorServer: {
					"pagePath": "/pages/serverPages/serverPages",
					"text": "患者管理",
					"iconPath": "../../static/images/server.png",
					"selectedIconPath": "../../static/images/selectedServer.png"
				},
				patientServer: {
					"pagePath": "/pages/serverPages/serverPages",
					"text": "首页",
					"iconPath": "../../static/images/server.png",
					"selectedIconPath": "../../static/images/selectedServer.png"
				},
				healthGuide: {
					"pagePath": "/pages/healthGuide/healthGuide",
					"text": "健康指导",
					"iconPath": "../../static/images/healthGuide.png",
					"selectedIconPath": "../../static/images/selectedHealthGuide.png"
				},
				patientChat: {
					"pagePath": "/pages/healthGuide/healthGuide",
					"text": "打卡",
					"iconPath": "../../static/images/healthClock.png",
					"selectedIconPath": "../../static/images/selectedHealthClock.png"
				},
				doctorInfo: {
					"pagePath": "/pages/personInfo/personInfo",
					"text": "个人中心",
					"iconPath": "../../static/images/person.png",
					"selectedIconPath": "../../static/images/selectedPerson.png"
				},
				patientInfo: {
					"pagePath": "/pages/personInfo/personInfo",
					"text": "我的",
					"iconPath": "../../static/images/person.png",
					"selectedIconPath": "../../static/images/selectedPerson.png"
				}
			}
		},
		methods: {
			switchTab(item) {
				let url = item.pagePath;
				uni.switchTab({
					url
				})

			}
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 60px;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
		border-top: 1px solid #d5d5d5;
		padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部

		.tab-bar-item {
			flex: 1;
			position: relative;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.tab-bar-badge {
				color: #ffffff;
				padding: 1px;
				z-index: 999;
				font-size: 10px;
				position: absolute;
				display: block;
				min-width: 16px;
				border-radius: 50%;
				background-color: red;
				top: -6px;
				right: 35%;
			}

			.tab_img {
				width: 25px;
				height: 25px;
			}

			.tab_text {
				font-size: 16px;
				margin-top: 9rpx;
			}
		}
	}
</style>
