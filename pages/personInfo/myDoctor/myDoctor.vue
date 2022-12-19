<template>
	<view class="myPatients">
		<div class="searchInput">
			<view class="searchInputContent">
				<uni-easyinput prefixIcon="search" v-model="doctorName" placeholder="医生姓名" @iconClick="iconClick">
				</uni-easyinput>
			</view>
			<button size="mini" type="primary">搜索</button>
		</div>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="100px" align="center">姓名</uni-th>
				<uni-th width="120px" align="center" sortable @sort-change="sortCardCount">最近咨询时间</uni-th>
				<uni-th width="80px" align="center">操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">
					<view class="name" @click="pushPerson()"><a href="javaScript:;">{{ item.name }}</a></view>
				</uni-td align="center">
				<uni-td align="center">{{ item.lastTime }}</uni-td>
				<uni-td align="center">
					<view class="uni-group">
						<button class="uni-button" size="mini" type="primary" @click="contact(item.id)">联系</button>
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
				doctorName: '',
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
			contact() {
				this.navigateTo('/pages/HM-chat/HM-chat')
			},
			pushPerson () {
				this.navigateTo('/pages/personInfo/personalData/personalData')
			},
			// 分页触发
			pageChange(e) {
				this.getData(e.current, this.pages.pageSize, this.doctorName)
			},
		}
	}
</script>

<style lang="less" scoped>
	.myPatients {
		padding: 0 20px 50px;

		.searchInput {
			padding: 10px 0;
			display: flex;

			.searchInputContent {
				flex: 1;
			}
		}
	}
</style>
