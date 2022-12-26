<template>
	<view class="medicalRecords">
		<view class="searchInput">
			<view class="searchInputContent">
				<uni-easyinput prefixIcon="search" v-model="patientName" placeholder="患者姓名" @iconClick="iconClick">
				</uni-easyinput>
			</view>
			<button size="mini" type="primary">搜索</button>
		</view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="120px" align="center">姓名</uni-th>
				<uni-th width="120px" align="center" sortable @sort-change="sortCardCount">提交时间</uni-th>
				<uni-th width="80px" align="center">操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">
					<view class="name">{{ item.name }}</view>
				</uni-td align="center">
				<uni-td align="center">{{ item.lastTime }}</uni-td>
				<uni-td align="center">
					<view class="uni-group">
						<button class="uni-button" size="mini" type="primary" @click="assessDetail(item.id)">详情</button>
						<!-- <button class="uni-button" size="mini" type="warn">删除</button> -->
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
				patientName: '',
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
			assessDetail() {
				this.navigateTo('/pages/serverPages/medicalRecords/medicalHistory')
			},
			// 分页触发
			pageChange(e) {
				this.getData(e.current, this.pages.pageSize,this.patientName)
			}
		}
	}
</script>

<style lang="less" scoped>
	.medicalRecords {
		padding: 0 20rpx 50rpx;

		.searchInput {
			padding: 20rpx 0;
			display: flex;
			align-items: center;

			.searchInputContent {
				flex: 1;
				margin-right: 20rpx;
			}
		}
	}
</style>
