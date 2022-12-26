<template>
	<view class="sportClockIn">
		<tab-bar :userIdentity="userType" :selected="1"></tab-bar>
		<view class="sportClockTop">
			<span class="sportClockRecord" @click="sportClockRecord">
				打卡记录
			</span>
			<view class="sportClockTopText">
				<span>健康</span>生活每一天
			</view>
		</view>
		<view class="serverList">
			<view class="serverListSports">
				<view class="serverListTitle">
					12月7日(周三) <span class="sportType">有氧运动</span>
					<view class="serverListTitleSub">
						高静静 <span class="serverListSubTime">发布于12-06 11:06</span>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color0">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-zoulu-" size="16">
							</uni-icons>
						</view>
						慢走
					</view>
					<view class="serverListLable">
						运动内容：慢走30分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('manzou')" v-if="!sportContent.manzou">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color1">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-paobu" size="16"></uni-icons>
						</view>
						慢跑
					</view>
					<view class="serverListLable">
						运动内容：慢跑20分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('manpao')" v-if="!sportContent.manpao">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color2">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-youyong" size="16">
							</uni-icons>
						</view>
						游泳
					</view>
					<view class="serverListLable">
						运动内容：游泳20分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('youyong')" v-if="!sportContent.youyong">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color3">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-tiaosheng" size="16">
							</uni-icons>
						</view>
						跳绳
					</view>
					<view class="serverListLable">
						运动内容：跳绳10分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('tiaosheng')" v-if="!sportContent.tiaosheng">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
			</view>
			<view class="serverListSports">
				<view class="serverListTitle">
					12月7日(周三)<span class="sportType">无氧运动</span>
					<view class="serverListTitleSub">
						高静静 <span class="serverListSubTime">发布于12-06 11:06</span>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color0">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-yaling" size="16">
							</uni-icons>
						</view>
						哑铃
					</view>
					<view class="serverListLable">
						运动内容：哑铃10分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('yaling')" v-if="!sportContent.yaling">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color1">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-gangling" size="16">
							</uni-icons>
						</view>
						杠铃
					</view>
					<view class="serverListLable">
						运动内容：杠铃10分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('gangling')" v-if="!sportContent.gangling">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color2">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-dangan" size="16">
							</uni-icons>
						</view>
						引体向上
					</view>
					<view class="serverListLable">
						运动内容：引体向上100下
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('yintixiangshang')"
							v-if="!sportContent.yintixiangshang">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
			</view>
			<view class="serverListSports">
				<view class="serverListTitle">
					12月7日(周三)<span class="sportType">柔韧度训练</span>
					<view class="serverListTitleSub">
						高静静 <span class="serverListSubTime">发布于12-06 11:06</span>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color0">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-bhjyoga" size="16">
							</uni-icons>
						</view>
						瑜伽
					</view>
					<view class="serverListLable">
						运动内容：瑜伽30分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('yujia')" v-if="!sportContent.yujia">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
				<view class="serverListItem">
					<view class="serverListItemTitle">
						<view class="serverListIcon color1">
							<uni-icons custom-prefix="iconfont" color="#ffffff" type="icon-shenzhan" size="16">
							</uni-icons>
						</view>
						伸展运动2
					</view>
					<view class="serverListLable">
						运动内容：伸展运动20分钟
					</view>
					<view class="clockIn">
						<button type="primary" @click="clockIn('shenzhanyundong')"
							v-if="!sportContent.shenzhanyundong">打卡</button>
						<button type="primary" disabled v-else>已打卡</button>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	import tabBar from "@/components/tab-bar/tab-bar.vue"
	export default {
		mixins: [mixins],
		components: {
			tabBar,
		},
		data() {
			return {
				sportContent: {
					manzou: false,
					manpao: false,
					youyong: false,
					tiaosheng: false,
					yaling: false,
					gangling: false,
					yintixiangshang: false,
					yujia: false,
					shenzhanyundong: false
				}
			}
		},
		methods: {
			sportClockRecord() {
				this.navigateTo('/pages/healthGuide/sportClockIn/sportClockRecord')
			},
			clockIn(e) {
				this.sportContent[e] = true
			},
			drugCounseling() {},
			nutritionGuide() {},
			regularEvaluation() {},
			sportCoaching() {}
		}
	}
</script>

<style lang="less" scoped>
	.sportClockIn {
		width: 100%;
		display: flex;
		background-color: #edf7ff;
		flex-direction: column;
		align-items: center;
		padding-bottom: calc(120rpx + env(safe-area-inset-bottom));

		.sportClockTop {
			width: 100%;
			height: 100rpx;
			padding: 10rpx 0 80rpx;
			border-radius: 0 0 30rpx 30rpx;
			position: relative;
			background: linear-gradient(180deg, #1a9def, #75c4f5);

			.sportClockTopText {
				font-size: 50rpx;
				color: #ffffff;
				margin: 30rpx auto;
				text-align: center;

				span {
					color: #f0cd34;
				}
			}

			.sportClockRecord {
				position: absolute;
				top: 10rpx;
				right: 5rpx;
				display: inline-block;
				color: #ffffff;
				padding: 6rpx 9rpx;
				background-color: #008adf;
			}
		}

		.serverList {
			width: 90%;
			margin-top: -40rpx;
			overflow: hidden;
			position: relative;


			.serverListSports {
				background-color: #ffffff;
				border-radius: 30rpx;
				overflow: hidden;
				margin-bottom: 20rpx;
				padding: 10rpx 20rpx;

				.serverListTitle {
					font-size: 35rpx;
					margin: 20rpx;
					border-bottom: 0.5rpx solid #c6c6c6;

					.sportType {
						margin-left: 10rpx;
					}

					.serverListTitleSub {
						font-size: 24rpx;
						line-height: 60rpx;
						color: #9e9e9e;

						.serverListSubTime {
							margin-left: 10rpx;
						}
					}
				}
			}

			.serverListItem {
				margin-bottom: 20rpx;
				padding: 10rpx 0 39rpx;
				border-bottom: 0.5rpx solid #c6c6c6;
				background-color: #ffffff;
				position: relative;

				.serverListIcon {
					width: 40rpx;
					height: 40rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					color: #ffffff;
					padding: 5rpx;
					margin-right: 10rpx;
				}

				.serverListItemTitle {
					display: flex;
					align-items: center;
					font-size: 32rpx;
					margin-left: 20rpx;
					padding: 5rpx 0;
				}

				.serverListLable {
					color: #565656;
					font-size: 25rpx;
					margin-top: 10rpx;
					margin-left: 20rpx;
				}

				.clockIn {
					width: 100%;
					margin-top: 15rpx;
				}

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
