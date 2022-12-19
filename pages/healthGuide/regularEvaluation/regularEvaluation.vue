<template>
	<view class="regularEvaluation">
		<view class="searchSelect">
			<uni-section title="未打卡天数" type="line">
				<view class="searchSelectContent">
					<view class="selectModule">
						<uni-data-select v-model="noClockInDays" :localdata="rangeDays" @change="change"></uni-data-select>
					</view>
					<button size="mini" type="primary">搜索</button>
				</view>
			</uni-section>

		</view>
		<uni-table border stripe emptyText="暂无更多数据" type="selection" @selection-change="selectionChange">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="100px" align="center">姓名</uni-th>
				<uni-th width="100px" align="center">未打卡天数</uni-th>
				<!-- <uni-th width="90px" align="center">操作</uni-th> -->
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">
					<view class="name">{{ item.name }}</view>
				</uni-td align="center">
				<uni-td align="center">{{ item.lastTime }}</uni-td>
				<!-- <uni-td align="center">
					<view class="uni-group">
						<button class="uni-button" size="mini" type="primary"
							@click="messageRemind(item.id)">提醒</button>
					</view>
				</uni-td> -->
			</uni-tr>

		</uni-table>
		<view class="uni-pagination-box">
			<uni-pagination :page-size="pages.pageSize" :current="pages.pageCurrent" :total="pages.total"
				@change="pageChange" />
		</view>	
		<view class="remindBtn">
			<button type="primary" @click="messageRemind">消息提醒</button>
		</view>
		<view>
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="warn" cancelText="关闭" confirmText="同意" title="用户提醒" content="是否提醒所选择用户"
					@confirm="dialogConfirm"></uni-popup-dialog>
			</uni-popup>
		
			<uni-popup ref="message" type="message">
				<uni-popup-message type="error" :message="messageText" :duration="2000"></uni-popup-message>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				noClockInDays: '',
				selectedIndexs: [],
				messageText: '请先选择要提醒的患者',
				rangeDays: [{
						value: 0,
						text: "3天内"
					},
					{
						value: 1,
						text: "7天内"
					},
					{
						value: 2,
						text: "14天内"
					},
					{
						value: 4,
						text: "30天内"
					},
					{
						value: 5,
						text: "30天以上"
					}
				],
				tableData: [{
						id: 1,
						name: 'Jeson',
						lastTime: '1'
					},
					{
						id: 2,
						name: 'Jeson1',
						lastTime: '4'
					},
					{
						id: 3,
						name: 'Jeson2',
						lastTime: '14'
					},
					{
						id: 4,
						name: 'Jeson3',
						lastTime: '37'
					},
					{
						id: 5,
						name: 'Jeson4',
						lastTime: '61'
					}
				]
			}
		},
		methods: {
			selectionChange(e) {
				console.log(e.detail.index)
				this.selectedIndexs = e.detail.index
			},
			change() {},
			messageRemind() {
				if (this.selectedIndexs.length > 0) {
					this.$refs.alertDialog.open()
				} else {
					this.$refs.message.open()
				}
			},
			// 分页触发
			pageChange(e) {
				this.getData(e.current, this.pages.pageSize,this.noClockInDays)
			},
			
			dialogConfirm() {},
		}
	}
</script>

<style lang="less" scoped>
	.regularEvaluation {
		padding: 10px;

		.searchSelect {
			margin-bottom: 20px;

			.searchSelectContent {
				display: flex;
				.selectModule {
					flex: 1
				}
			}
		}

		.remindBtn {
			margin-top: 20px;
		}

	}
</style>
