<template>
	<view class="scalesList">
		<view class="scalesItem" v-for="item in scalesList" :key="item.id" @click="pushItem(item)">
			{{item.title}}
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
						title: '老年肌少症  问卷',
						url: '/pages/serverPages/selfAssessment/Sarcopenia/Sarcopenia'
					},
					{
						id: 2,
						title: '营养评估表',
						url: '/pages/serverPages/selfAssessment/nutritionForm/nutritionForm'
					},
					{
						id: 3,
						title: '日常生活能力量表',
						url: '/pages/serverPages/selfAssessment/dailyLivingAbilityScale/dailyLivingAbilityScale'
					},
					{
						id: 4,
						title: '危险因素测试',
						url: '/pages/serverPages/selfAssessment/riskFactorTest/riskFactorTest'
					},
					{
						id: 5,
						title: '骨质疏松自我筛查',
						url: '/pages/serverPages/selfAssessment/riskcheckOsteoporosis/riskcheckOsteoporosis'
					},
					{
						id: 6,
						title: '骨折分析预测工具',
						url: '/pages/serverPages/selfAssessment/fractureRiskPredictionTool/fractureRiskPredictionTool'
					},
				]
			}
		},
		methods: {
			pushItem (e) {
				this.navigateTo(e.url)
			}
		}
	}
</script>

<style lang="less" scoped>
	.scalesList {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;

		.scalesItem {
			width: 30vw;
			font-size: 20px;
			color: #ffffff;
			display: flex;
			margin: 25px auto;
			padding: 20px;
			background-color: #2189ec;
			justify-content: center;
			align-items: center;
			text-align: center;
			border-radius: 15px;
			box-shadow: 3px 2px 10px 2px #898989;
		}
	}
</style>
