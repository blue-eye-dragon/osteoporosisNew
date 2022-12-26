<template>
	<view>
		<view class="searchInput">
			<view class="searchInputContent">
				<uni-easyinput prefixIcon="search" v-model="patientsName" placeholder="患者姓名" @iconClick="iconClick">
				</uni-easyinput>
			</view>
			<button size="mini" type="basics">搜索</button>
		</view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="120px" align="center">患者姓名</uni-th>
				<uni-th width="120px" align="center">最新时间</uni-th>
				<uni-th width="120px" align="center">操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">
					<view class="name">{{ item.name }}</view>
				</uni-td align="center">
				<uni-td align="center">{{ item.lastTime }}</uni-td>
				<uni-td align="center">
					<view class="uni-group">
						<button class="uni-button" size="mini" type="basics"
							@click="clockINDetail('sport',item.id)">打卡计划</button>
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
				patientsName: '',
				tableData: [{
						id: 1,
						name: 'Jeson',
						lastTime: '2020-10-21'
					},
					{
						id: 2,
						name: 'Jeson1',
						lastTime: '2020-10-22'
					},
					{
						id: 3,
						name: 'Jeson2',
						lastTime: '2020-10-23'
					},
					{
						id: 4,
						name: 'Jeson3',
						lastTime: '2020-10-24'
					},
					{
						id: 5,
						name: 'Jeson4',
						lastTime: '2020-10-25'
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
					this.tableData.sort((a, b) => a.id - b.id)
				} else if (flag == "ascending") {
					console.log(123321)
					this.tableData.sort((a, b) => b.id - a.id)
				} else {

				}
			},
			clockINDetail(flag, id) {
				this.navigateTo('/pages/healthGuide/clockInPlan/clockInPlan')
			},
			// 分页触发
			pageChange(e) {
				this.getData(e.current, this.pages.pageSize,this.patientsName)
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
