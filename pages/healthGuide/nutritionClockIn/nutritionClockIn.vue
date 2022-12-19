<template>
	<view class="nutritionClockIn">
		<view class="nutritionClockTop">
			<view class="nutritionClockTopText">
				<span>健康</span>生活每一天
			</view>
		</view>
		<view class="serverList">
			<span class="nutritionClockRecord" @click="nutritionClockRecord">
				打卡记录
			</span>
			<view class="serverListTitle">
				<i class="iconfont serverListIcon color0" v-html="'&#xe6ea;'"></i>
				<div>早餐</div>
			</view>
			<uni-easyinput type="textarea" v-model="breakfast" placeholder="请输入内容" />
			<view class="serverListButton">
				<button type="primary" v-if="!nutritionClock.breakfast" @click="clockIn('breakfast')">打卡</button>
				<button type="primary" disabled v-else>已打卡</button>
			</view>
			<view class="serverListTitle">
				<i class="iconfont serverListIcon color1" v-html="'&#xe6e8;'"></i>
				<div>午餐</div>
			</view>
			<uni-easyinput type="textarea" v-model="lunch" placeholder="请输入内容" />
			<view class="serverListButton">
				<button type="primary" v-if="!nutritionClock.lunch" @click="clockIn('lunch')">打卡</button>
				<button type="primary" disabled v-else>已打卡</button>
			</view>
			<view class="serverListTitle">
				<i class="iconfont serverListIcon color2" v-html="'&#xe6e7;'"></i>
				<div>晚餐</div>
			</view>
			<uni-easyinput type="textarea" v-model="dinner" placeholder="请输入内容" />
			<view class="serverListButton">
				<button type="primary" v-if="!nutritionClock.dinner" @click="clockIn('dinner')">打卡</button>
				<button type="primary" disabled v-else>已打卡</button>
			</view>
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				breakfast: '',
				lunch: '',
				dinner: '',
				nutritionClock: {
					breakfast: false,
					lunch: false,
					dinner: false,
				}
			}
		},
		methods: {
			nutritionClockRecord() {
				this.navigateTo('/pages/healthGuide/nutritionClockIn/nutritionClockRecord')
			},
			clockIn(e) {
				if (this.nutrition[e] !== '') {
					this.nutritionClock[e] = true
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.nutritionClockIn {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 30px;

		.nutritionClockTop {
			width: 100%;
			height: 200px;
			position: relative;
			background-image: linear-gradient(#1a9def, #9bd9ff);

			.nutritionClockTopText {
				font-size: 35px;
				color: #ffffff;
				margin: 40px auto;
				text-align: center;

				span {
					color: #f0cd34;
				}
			}
		}

		.serverList {
			width: 90%;
			margin-top: -80px;
			padding: 10px 5px 30px;
			border-radius: 30px;
			background-color: #ffffff;
			overflow: hidden;
			position: relative;

			.nutritionClockRecord {
				position: absolute;
				top: 10px;
				right: 16px;
				display: inline-block;
				color: #ffffff;
				padding: 3px 5px;
				background-color: #1a9def;
			}

			.serverListTitle {
				font-size: 18px;
				padding: 10px 20px;
				display: flex;
				align-items: center;

				.serverListIcon {
					font-size: 18px;
					padding: 5px;
					border-radius: 50%;
					margin-right: 10px;
					color: #ffffff;
				}
			}

			.serverListButton {
				margin: 20px auto 10px;
				width: 80%;
			}
		}
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
