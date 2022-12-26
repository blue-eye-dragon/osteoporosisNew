<template>
	<view>
		<view class="searchInput">
			<view class="searchInputContent">
				<uni-datetime-picker v-model="range" type="daterange"/>
			</view>
			<button size="mini" type="basics">搜索</button>
		</view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="120px" align="center" sortable @sort-change="sortCardCount">提交时间</uni-th>
				<uni-th width="120px" align="center">测评得分</uni-th>
				<uni-th width="80px" align="center">操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">
					<view class="name">{{ item.submitTime }}</view>
				</uni-td align="center">
				<uni-td align="center">{{ item.evaluationScore }}</uni-td>
				<uni-td align="center">
					<view class="uni-group">
						<button class="uni-button" size="mini" type="basics" @click="assessDetail(item.id)">详情</button>
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
						submitTime: '2020-10-21',
						evaluationScore: '89'
					},
					{
						id: 2,
						submitTime: '2020-10-22',
						evaluationScore: '81'
					},
					{
						id: 3,
						submitTime: '2020-10-23',
						evaluationScore: '82'
					},
					{
						id: 4,
						submitTime: '2020-10-24',
						evaluationScore: '83'
					},
					{
						id: 5,
						submitTime: '2020-10-25',
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
			assessDetail() {
				this.navigateTo('/pages/serverPages/selfAssessment/selfAssessment')
			},
			maskClick(e) {
				console.log('maskClick事件:', e);
			},
			// 分页触发
			pageChange(e) {
				this.getData(e.current, this.pages.pageSize,this.range)
			},
		}
	}
</script>

<style lang="less" scoped>
	.searchInput {
		padding: 10px;
		display: flex;
		.searchInputContent {
			flex: 1;
		}
	}
</style>
