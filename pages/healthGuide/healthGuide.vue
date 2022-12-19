<template>
	<view class="main">
		<top-tabbar></top-tabbar>
		<tab-bar :userIdentity="userType" :selected="1"></tab-bar>
		<view class="swiperBox">
			<view class="swiperContent">
				<carousel :img-list="imgList" url-key="url" @selected="selectedBanner" />
			</view>
			<view class="swiperBg1"></view>
			<view class="swiperBg2"></view>
		</view>
		<uni-list>
			<uni-list-item title="运动打卡" note="每日进行运动打卡" showArrow link v-if="userType == 0"
				to="/pages/healthGuide/sportClockIn/sportClockIn">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color0" v-html="'&#xe6d1;'"></i>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="营养打卡" note="每日进行饮食营养打卡" showArrow link v-if="userType == 0"
				to="/pages/healthGuide/nutritionClockIn/nutritionClockIn">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color1" v-html="'&#xe607;'"></i>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="健康指导" note="向患者发布健康指导" showArrow link v-if="userType == 1"
				to="/pages/healthGuide/healthGuideDoc/healthGuideDoc">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color0" v-html="'&#xe687;'"></i>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="定期评估提醒" note="对患者定期评估，并对患者进行提醒" showArrow link v-if="userType == 1"
				to="/pages/healthGuide/regularEvaluation/regularEvaluation">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color1" v-html="'&#xe61c;'"></i>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="患者打卡计划" note="为患者定制独立的打卡计划" showArrow link v-if="userType == 1"
				to="/pages/healthGuide/clockInPlan/patientList">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color2" v-html="'&#xe629;'"></i>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	import {
		mapState
	} from "vuex"
	import tabBar from "@/components/tab-bar/tab-bar.vue"
	import topTabbar from '@/components/topTabbar/topTabbar.vue'
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		mixins: [mixins],
		computed: {
			...mapState(['userName', 'userType'])
		},
		components: {
			tabBar,
			topTabbar,
			carousel
		},
		data() {
			return {
				show: false,
				mode: 'single',
				imgList: [{
					url: 'https://s1.ax1x.com/2022/11/07/xv9q0g.jpg',
					id: 1
				}, {
					url: 'https://s1.ax1x.com/2022/11/07/xv9L7Q.jpg',
					id: 2
				}, {
					url: 'https://s1.ax1x.com/2022/11/07/xv9jts.png',
					id: 3
				}, {
					url: 'https://s1.ax1x.com/2022/11/07/xv9Xkj.png',
					id: 4
				},  ]
			}
		},
		methods: {
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			},
			confirm(e) {
				console.log(e);
			},
			close() {
				this.show = false
			},
			onNavigationBarButtonTap(e) { //监听自定义导航栏按钮跳转页面
				console.log(e)
				if (e.text === '消息') {
					this.switchTab('/pages/healthGuide/healthGuide')
				}
				if (e.index === 0) {
					this.switchTab( '/pages/personInfo/personInfo')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-list-item__content-title {
		font-size: 18px;
	}
	.slot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}


	.swiperBox {
		width: 100%;
		position: relative;
		background-color: #edf7ff;
	
		.swiperContent {
			width: 100%;
			position: absolute;
			z-index: 999;
	
	
			.swiper {
				height: 200px;
			}
		}
	
		.swiperBg1 {
			background: linear-gradient(180deg, #1a9def, #75c4f5);
			height: 80px;
			padding: 10px 20px;
			border-radius: 0 0 30px 30px;
		}
	
		.swiperBg2 {
			height: 60px;
			background-color: #edf7ff;
		}
	}
	
	.serverListItem {
		display: flex;
		align-items: center;
		padding: 10px 20px;
		background-color: #ffffff;
		position: relative;


		.serverListTitle {
			font-size: 18px;
			margin-left: 12px;
			line-height: 30px;
		}

		.serverListLable {
			color: #a9a9a9;
			margin-left: 12px;
		}
	}


	.clockIn {
		position: absolute;
		right: 10px;
		background-color: #1a9def;
		color: #ffffff;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.serverListIcon {
		font-size: 28px;
		padding: 10px;
		border-radius: 50%;
		color: #ffffff;
		margin-right: 20px;
	}

	.color0 {
		background-color: #27b6ff;
	}

	.color1 {
		background-color: #02e49c;
	}

	.color2 {
		background-color: #e273ff;
	}

	.color3 {
		background-color: #ffad20;
	}
</style>
