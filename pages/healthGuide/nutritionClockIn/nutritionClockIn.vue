<template>
	<view class="nutritionClockIn">
		<view class="nutritionClockTop">
			<span class="nutritionClockRecord" @click="nutritionClockRecord">
				打卡记录
			</span>
			<view class="nutritionClockTopText">
				<span>健康</span>生活每一天
			</view>
		</view>
		<view class="serverList">
			<view class="serverListNutrition">
				<view class="serverListTitle">
					<view class="serverListTitleTop">
						<view class="serverListIcon color0">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-zaocan" size="16">
							</uni-icons>
						</view>
						12月7日(周三) <span class="nutritionType">早餐</span>
					</view>
					<view class="serverListTitleSub">
						高静静 <span class="serverListSubTime">发布于12-06 11:06</span>
					</view>
				</view>
				<uni-easyinput type="textarea" v-model="breakfast" placeholder="请输入内容" />
				<view class="serverListButton">
					<button type="primary" v-if="!nutritionClock.breakfast" @click="clockIn('breakfast')">打卡</button>
					<button type="primary" disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListNutrition">
				<view class="serverListTitle">
					<view class="serverListTitleTop">
						<view class="serverListIcon color1">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-wucan" size="16">
							</uni-icons>
						</view>
						12月7日(周三) <span class="nutritionType">午餐</span>
					</view>
					<view class="serverListTitleSub">
						高静静 <span class="serverListSubTime">发布于12-06 11:06</span>
					</view>
				</view>
				<uni-easyinput type="textarea" v-model="lunch" placeholder="请输入内容" />
				<view class="serverListButton">
					<button type="primary" v-if="!nutritionClock.lunch" @click="clockIn('lunch')">打卡</button>
					<button type="primary" disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListNutrition">
				<view class="serverListTitle">
					<view class="serverListTitleTop">
						<view class="serverListIcon color2">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-wancan" size="16">
							</uni-icons>
						</view>
						12月7日(周三) <span class="nutritionType">晚餐</span>
					</view>
					<view class="serverListTitleSub">
						高静静 <span class="serverListSubTime">发布于12-06 11:06</span>
					</view>
				</view>
				<uni-easyinput type="textarea" v-model="dinner" placeholder="请输入内容" />
				<view class="serverListButton">
					<button type="primary" v-if="!nutritionClock.dinner" @click="clockIn('dinner')">打卡</button>
					<button type="primary" disabled v-else>已打卡</button>
				</view>
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
		background-color: #edf7ff;
		flex-direction: column;
		align-items: center;
		padding-bottom: 30px;

		.nutritionClockTop {
			width: 100%;
			height: 100px;
			padding: 10px 0;
			border-radius: 0 0 30px 30px;
			position: relative;
			background: linear-gradient(180deg, #1a9def, #75c4f5);

			.nutritionClockTopText {
				font-size: 25px;
				color: #ffffff;
				margin: 15px auto;
				text-align: center;

				span {
					color: #f0cd34;
				}
			}

			.nutritionClockRecord {
				position: absolute;
				top: 10px;
				right: 5px;
				display: inline-block;
				color: #ffffff;
				padding: 6px 9px;
				background-color: #008adf;
			}

		}

		.serverList {
			width: 90%;
			margin-top: -40px;
			overflow: hidden;
			position: relative;

			.serverListNutrition {
				background-color: #ffffff;
				border-radius: 30px;
				overflow: hidden;
				margin-bottom: 20px;
				padding: 10px 20px;

				.serverListTitle {
					font-size: 18px;
					margin: 10px;
					border-bottom: 0.5px solid #c6c6c6;

					.serverListTitleTop {
						display: flex;

						.serverListIcon {
							width: 25px;
							height: 25px;
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: 50%;
							margin-right: 5px;
							color: #ffffff;
						}

						.nutritionType {
							margin-left: 10px;
						}
					}


					.serverListTitleSub {
						font-size: 12px;
						line-height: 30px;
						color: #9e9e9e;

						.serverListSubTime {
							margin-left: 10px;
						}
					}
				}
			}

			.nutritionClockRecord {
				position: absolute;
				top: 10px;
				right: 16px;
				display: inline-block;
				color: #ffffff;
				padding: 3px 5px;
				background-color: #1a9def;
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
