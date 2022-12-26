<template>
	<view>
		<view class="searchInput">
			<view class="searchInputContent">
				<uni-easyinput suffixIcon="search" v-model="drugSearch" placeholder="请输入要搜索的药物" @iconClick="iconClick">
				</uni-easyinput>
			</view>

			<button size="mini" type="basics">搜索</button>
		</view>
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="120px" align="center">药物名称</uni-th>
				<uni-th width="120px" align="center">药物种类</uni-th>
				<uni-th width="80px" align="center">操作</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">
					<view class="name">{{ item.drugName }}</view>
				</uni-td align="center">
				<uni-td align="center">{{ item.drugsType }}</uni-td>
				<uni-td align="center">
					<view class="uni-group">
						<button class="uni-button" size="mini" type="basics" @click="assessDetail(item.id)">咨询</button>
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
						drugName: '双磷酸盐',
						drugsType: '骨吸收抑制剂'
					},
					{
						id: 2,
						drugName: '生长激素',
						drugsType: '骨形成促进剂'
					},
					{
						id: 3,
						drugName: '维生素D',
						drugsType: '骨矿化药物'
					},
					{
						id: 4,
						drugName: '仙灵骨葆',
						drugsType: '中医中药'
					},
					{
						id: 5,
						drugName: '补肾壮骨冲剂',
						drugsType: '中医中药'
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
				this.navigateTo('/pages/HM-chat/HM-chat')
			},
			maskClick(e) {
				console.log('maskClick事件:', e);
			},
			// 分页触发
			pageChange(e) {
				this.getData(e.current, this.pages.pageSize,this.drugSearch)
			}
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
