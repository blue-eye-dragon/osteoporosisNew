<template>
	<view>
		<view class="searchInput">
			<view class="searchInputContent">
				<uni-datetime-picker v-model="range" type="daterange" />
			</view>
			<button size="mini" type="basics">搜索</button>
		</view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="110rpx" align="center">量表类型</uni-th>
				<uni-th width="100rpx" align="center">测评得分</uni-th>
				<uni-th width="75rpx" align="center">操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">{{ item.scalesType }}</uni-td>
				<uni-td align="center">{{ item.evaluationScore }}</uni-td>
				<uni-td align="center">
					<view class="uni-group">
						<button class="uni-button" size="mini" type="basics" @click="assessDetail(item)">详情</button>
					</view>
				</uni-td>
			</uni-tr>

		</uni-table>
		<view class="uni-pagination-box">
			<uni-pagination :page-size="pages.pageSize" :current="pages.pageCurrent" :total="pages.total"
				@change="pageChange" />
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				range: [],
				tableData: [{
						id: 1,
						scalesType: '老年肌少症问卷',
						evaluationScore: '89'
					},
					{
						id: 2,
						scalesType: '营养评估表',
						evaluationScore: '81'
					},
					{
						id: 3,
						scalesType: '日常生活能力量表',
						evaluationScore: '82'
					},
					{
						id: 4,
						scalesType: '骨质疏松风险测试',
						evaluationScore: '83'
					},
					{
						id: 5,
						scalesType: '骨质疏松自我筛查',
						evaluationScore: '84'
					},
					{
						id: 5,
						scalesType: '骨折分析预测工具',
						evaluationScore: '84'
					}
				]
			}
		},
		methods: {
			sortCardCount(e) {
				console.log(e)
				let flag = e.order
				if (flag == "descending") {
					console.log(123)
					this.tableData.sort((a, b) => a.submitTime - b.submitTime)
				} else if (flag == "ascending") {
					console.log(123321)
					this.tableData.sort((a, b) => b.submitTime - a.submitTime)
				} else {

				}
			},
			assessDetail(item) {
				let url = ''
				let params = {
					id: item.id,
					flag: 'look'
				}
				switch (item.scalesType) {
					case '老年肌少症问卷':
						url = '/pages/serverPages/selfAssessment/Sarcopenia/Sarcopenia'
						break;
					case '营养评估表':
						url = '/pages/serverPages/selfAssessment/nutritionForm/nutritionForm'
						break;
					case '日常生活能力量表':
						url = '/pages/serverPages/selfAssessment/dailyLivingAbilityScale/dailyLivingAbilityScale'
						break;
					case '骨质疏松风险测试':
						url = '/pages/serverPages/selfAssessment/riskFactorTest/riskFactorTest'
						break;
					case '骨质疏松自我筛查':
						url = '/pages/serverPages/selfAssessment/riskcheckOsteoporosis/riskcheckOsteoporosis'
						break;
					case '骨折分析预测工具':
						url = '/pages/serverPages/selfAssessment/fractureRiskPredictionTool/fractureRiskPredictionTool'
						break;
				}
				this.navigateTo(url, params)
			},
			maskClick(e) {
				console.log('maskClick事件:', e);
			},
			// 分页触发
			pageChange(e) {
				this.getData(e.current, this.pages.pageSize, this.range)
			},
		}
	}
</script>

<style lang="less" scoped>
	.searchInput {
		padding: 10rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;

		.searchInputContent {
			flex: 1;
			margin-right: 20rpx;
		}
	}
</style>
