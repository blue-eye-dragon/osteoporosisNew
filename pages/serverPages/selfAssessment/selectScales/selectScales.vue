<template>
	<view class="selectScales">
		<view class="swiperBg"></view>
		<view class="selectScalesBox">
			<uni-notice-bar single showIcon color="#ffffff" text="请选择对应的量表进行测试" :fontSize="20" :fontWeight="700" />
			<view class="scalesList">
				<view class="scalesItem" v-for="item in scalesList" :key="item.id" @click="pushItem(item)">
					<view :class="['scalesItemIcon',`color${item.id}`]">
						<uni-icons custom-prefix="iconfont" color="#ffffff" :type="item.icon" size="30"></uni-icons>
					</view>
					<view class="scalesItemContent">
						<view class="scalesItemContentTitle">
							{{item.title}}
						</view>
						<view class="scalesItemContentSub">
							{{item.subContent}}
						</view>
					</view>
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
				scalesList: [{
						id: 1,
						title: '骨质疏松风险测试',
						icon: 'icon-ceshi',
						subContent: '发现您是否面临骨质疏松症和骨折的风险',
						url: '/pages/serverPages/selfAssessment/riskFactorTest/riskFactorTest'
					}, {
						id: 2,
						title: '老年肌少症问卷',
						icon: 'icon-wenjuan',
						subContent: '检测您是否患有老年肌少证',
						url: '/pages/serverPages/selfAssessment/Sarcopenia/Sarcopenia'
					},
					{
						id: 3,
						title: '营养评估表',
						icon: 'icon-cz-ldpg',
						subContent: '检查您当前的营养状况',
						url: '/pages/serverPages/selfAssessment/nutritionForm/nutritionForm'
					},
					{
						id: 4,
						title: '日常生活能力量表',
						icon: 'icon-jiajushenghuo',
						subContent: '判断您是否满足基本的日常生活能力',
						url: '/pages/serverPages/selfAssessment/dailyLivingAbilityScale/dailyLivingAbilityScale'
					},
					{
						id: 5,
						title: '骨质疏松自我筛查',
						icon: 'icon-gongnenglan-AIshaichaxitong',
						subContent: '根据OSTA指数判断自己患骨质疏松的概率',
						url: '/pages/serverPages/selfAssessment/riskcheckOsteoporosis/riskcheckOsteoporosis'
					},
					{
						id: 6,
						title: '骨折分析预测工具',
						icon: 'icon-beikongshuiwupingtaimenhu-tubiao_yucefuwu',
						subContent: '可计算骨折风险发生的概率',
						url: '/pages/serverPages/selfAssessment/fractureRiskPredictionTool/fractureRiskPredictionTool'
					},
				]
			}
		},
		methods: {
			iconColor(id) {
				let color = ''
				switch (id) {
					case 1:
						color = ''
						break;
					case 2:
						color = ''
						break;
					case 3:
						color = ''
						break;
					case 4:
						color = ''
						break;
					case 5:
						color = ''
						break;
					case 6:
						color = ''
						break;
				}
				return color
			},
			pushItem(e) {
				this.navigateTo(e.url)
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-noticebar {
		padding: 20rpx 5% 0 !important;
		margin-bottom: 0 !important;
	}

	.selectScales {
		width: 100%;
		position: relative;
		box-sizing: border-box;

		.selectScalesBox {
			z-index: 999;
		}

		.swiperBg {
			position: absolute;
			top: 0;
			background: linear-gradient(180deg, #1a9def, #75c4f5);
			width: 100%;
			height: 160rpx;
			box-sizing: border-box;
			z-index: -1;
			border-radius: 0 0 50rpx 50rpx;
		}
	}

	.scalesList {
		display: flex;
		height: calc(100vh - 88rpx);
		flex-wrap: wrap;
		flex-direction: column;
		align-items: center;

		.scalesItem {
			width: 90vw;
			font-size: 35rpx;
			background-color: #ffffff;
			display: flex;
			align-items: center;
			margin-top: 25rpx;
			padding: 20rpx 0;
			border-radius: 14rpx;
			box-shadow: 5rpx 4rpx 7rpx 4rpx #898989;

			.scalesItemIcon {
				width: 65rpx;
				height: 65rpx;
				margin: 0px 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				padding: 20rpx;
			}

			.scalesItemContent {
				flex: 1;
				display: flex;
				align-items: flex-start;
				flex-direction: column;

				.scalesItemContentTitle {
					font-weight: 700;
					font-size: 40rpx;
					margin-bottom: 10rpx;
				}

				.scalesItemContentSub {
					font-size: 24rpx;
				}
			}

		}
	}

	.color1 {
		background-image: linear-gradient(#e39495, #e30f14);
	}

	.color2 {
		background-image: linear-gradient(#44e0b4, #0fc7ab);
	}

	.color3 {
		background-image: linear-gradient(#58ccff, #44a9ff);
	}

	.color4 {
		background-image: linear-gradient(#ff9b7e, #ff7955);
	}

	.color5 {
		background-image: linear-gradient(#2ae530, #1cad39);
	}

	.color6 {
		background-image: linear-gradient(#eeff30, #fcc525);
	}
</style>
