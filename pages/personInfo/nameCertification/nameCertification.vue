<template>
	<view class="nameCertification">
		<uni-section title="实名认证" padding>
			<uni-forms ref="baseForm" :modelValue="baseFormData" labelWidth="100" label-position="top">
				<uni-forms-item label="姓名" required>
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="年龄" required>
					<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item label="性别" required>
					<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
				</uni-forms-item>
				<uni-forms-item label="身份证号" required>
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入身份证号" />
				</uni-forms-item>
				<!-- <uni-forms-item label="兴趣爱好" required name="hobby">
					<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
				</uni-forms-item> -->
				<uni-forms-item label="身份证上传" required name="hobby">
					<view class="example-body">
						<uni-file-picker limit="2" title="上传图片" v-model="imageValue" @select="select"
							@progress="progress" @success="success" @fail="fail"></uni-file-picker>
					</view>
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit('valiForm')">提交</button>
		</uni-section>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				baseFormData: {},
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}]
					},
					hobby: {
						rules: [{
								format: 'array'
							},
							{
								validateFunction: function(rule, value, data, callback) {
									if (value.length < 2) {
										callback('请至少勾选两个兴趣爱好')
									}
									return true
								}
							}
						]
					}
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '保密',
					value: 2
				}],
				// 多选数据源
				hobbys: [{
					text: '跑步',
					value: 0
				}, {
					text: '游泳',
					value: 1
				}, {
					text: '绘画',
					value: 2
				}, {
					text: '足球',
					value: 3
				}, {
					text: '篮球',
					value: 4
				}, {
					text: '其他',
					value: 5
				}],
				imageValue: []
			}
		},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.baseForm.setRules(this.rules)
		},
		methods: {
			submit() {},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style lang="less" scoped>
	.form-item {
		display: flex;
		align-items: center;
	}

	.nameCertification {
		background-color: #fafafa;

		.nameCert {
			margin: 5rpx auto;

			.inputLeft {
				color: grey;
				display: inline-block;
				width: 80rpx;
				font-size: 14rpx;
			}

			.nameCertSex {
				display: flex;
				padding: 6rpx 0;
				border: 1rpx solid #dadbde;

				.nameCertSexTitle {
					padding: 0 9rpx;
					color: grey;
					width: 80rpx;
					font-size: 14rpx;
				}

				.space {
					display: inline-block;
					width: 20rpx;
				}
			}
		}

		.idCarsUpload {
			.idCarsUploadTitle {
				padding: 6rpx 9rpx;
				color: grey;
				width: 80rpx;
				font-size: 14rpx;
			}

			.idCarsUploadContent {
				display: flex;
				padding: 20rpx;
			}
		}
	}

	.u-upload__wrap {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		flex: 1;
		justify-content: center;
	}
</style>
