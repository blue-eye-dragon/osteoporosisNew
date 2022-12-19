<template>
	<view class="clockInPlan">
		<uni-table border stripe ref="table" :loading="loading" emptyText="暂无更多数据" type="selection"
			@selection-change="selectionChange">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th width="100px" align="center">计划名称</uni-th>
				<uni-th width="100px" align="center">所属种类</uni-th>
				<uni-th width="100px" align="center">计划详情</uni-th>
			</uni-tr>
			<uni-tr v-for="(item, index) in tableData" :key="index">
				<uni-td align="center">{{ item.planName }}</uni-td>
				<uni-td align="center">{{ item.planSubject }}</uni-td>
				<uni-td align="center">{{ item.planDetail }}</uni-td>
			</uni-tr>

		</uni-table>
		<view class="uni-pagination-box">
			<uni-pagination :page-size="pages.pageSize" :current="pages.pageCurrent" :total="pages.total"
				@change="pageChange" />
		</view>
		<view class="remindBtn">
			<view class="addBtn">
				<button type="primary" @click="addPlan">新增</button>
			</view>
			<button type="warn" @click="deletePlan">删除计划</button>
		</view>
		<view>
			<!-- 输入框示例 -->
			<uni-popup mode="center" ref="popup">
				<view class="addPlanForm">
					<uni-section title="新增计划" sub-title="添加新增计划的详细信息" type="line">
						<uni-forms :modelValue="addPlanForm" ref="uForm" labelWidth="80px">
							<uni-forms-item label="计划名称" name="planName">
								<uni-easyinput trim="all" v-model="addPlanForm.planName" placeholder="请输入计划名称">
								</uni-easyinput>
							</uni-forms-item>
							<uni-forms-item label="所属种类" name="planSubject">
								<uni-easyinput trim="all" v-model="addPlanForm.planSubject" placeholder="请输入计划名称">
								</uni-easyinput>
							</uni-forms-item>
							<uni-forms-item label="计划详情" name="planDetail">
								<uni-easyinput trim="all" v-model="addPlanForm.planDetail" placeholder="请输入计划名称">
								</uni-easyinput>
							</uni-forms-item>
						</uni-forms>
						<view class="addPlanFormBtn">
							<button type="primary" size="mini" @click="submit">提交</button>
							<button size="mini" @click="resetSubmit">取消</button>
						</view>
					</uni-section>
				</view>
			</uni-popup>

			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="warn" cancelText="关闭" confirmText="同意" title="删除提醒" content="是否删除所选计划"
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
				tableData: [{
						id: 1,
						planName: '慢跑',
						planSubject: '有氧运动',
						planDetail: '慢走30分钟'
					},
					{
						id: 2,
						planName: '慢跑',
						planSubject: '有氧运动',
						planDetail: '慢跑20分钟'
					},
					{
						id: 3,
						planName: '游泳',
						planSubject: '有氧运动',
						planDetail: '游泳20分钟'
					},
					{
						id: 4,
						planName: '跳绳',
						planSubject: '有氧运动',
						planDetail: '跳绳10分钟'
					},
					{
						id: 5,
						planName: '哑铃',
						planSubject: '无氧运动',
						planDetail: '哑铃10分钟'
					},
					{
						id: 6,
						planName: '杠铃',
						planSubject: '无氧运动',
						planDetail: '杠铃10分钟'
					},
					{
						id: 7,
						planName: '引体向上',
						planSubject: '无氧运动',
						planDetail: '引体向上100下'
					},
					{
						id: 8,
						planName: '瑜伽',
						planSubject: '柔韧度训练',
						planDetail: '瑜伽10分钟'
					},
					{
						id: 9,
						planName: '伸展运动',
						planSubject: '柔韧度训练',
						planDetail: '伸展运动10分钟'
					}
				],
				addPlanForm: {},
				selectedIndexs: [],
				messageText: '请先选择要删除的计划',
				rules: {
					chapterId: [{
						required: true,
						message: '请选择章节',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change'],
					}],
				},
			}
		},
		watch: {
			// this.$refs.uForm.setRules(this.rules);
			show: {

				handler(value) {

					this.$nextTick(() => { //在弹窗加载出来只有 show 才会变成 true

						if (value == true) { //判断 弹窗 v-model 变成 true 的时候去加载规则。 原理：在弹窗渲染完成之后表单渲染完成之前去加载规则就不会报错了

							this.$refs.uForm.setRules(this.rules);
						}

					})

				},

			},
			immediate: true, // 重点
			deep: true, // 重点

		},
		onLoad() {
			this.selectedIndexs = []
			this.getData(1)
		},
		methods: {
			// 分页触发
			pageChange(e) {
				this.$refs.table.clearSelection()
				this.selectedIndexs.length = 0
				this.getData(e.current, this.pages.pageSize)
			},
			selectionChange(e) {
				console.log(e.detail.index)
				this.selectedIndexs = e.detail.index
			},
			addPlan() {
				this.$refs.popup.open()
			},
			resetSubmit() {
				this.addPlanForm = {}
				this.$refs.popup.close()
			},
			submit() {},
			deletePlan() {
				if (this.selectedIndexs.length > 0) {
					this.$refs.alertDialog.open()
				} else {
					this.$refs.message.open()
				}
			},
			dialogConfirm() {}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-section-content {
		padding: 20px
	}

	.clockInPlan {
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
			margin: 20px;

			.addBtn {
				margin-bottom: 10px;
			}
		}

		.addPlanForm {
			padding: 10px;
			background-color: #ffffff;

			.addPlanFormBtn {
				margin-top: 20px;
				display: flex;
				justify-content: space-evenly;
			}
		}
	}
</style>
