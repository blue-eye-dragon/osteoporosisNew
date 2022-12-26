<template>
	<view class="nutritionForm">
		<uni-section title="营养评估量表" type="line" padding titleFontSize="18px" subTitleFontSize="14px">
			<uni-forms label-position="top" :modelValue="nutritionForm" ref="form2" labelWidth="auto">
				<view class="questionTitle" v-if="!isSubmit">
					问题{{selectNum}}/共{{allItemNum}}问
				</view>
				<uni-forms-item label="过去三个月內有没有因为食欲不振、消化问题、咀嚼或吞咽困难而减少食量" v-if="selectNum == 1 || isSubmit">
					<uni-data-checkbox v-model="nutritionForm.form1" :localdata="nutritionList1" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="过去三个月內体重下降的情况" v-if="selectNum == 2 || isSubmit">
					<uni-data-checkbox v-model="nutritionForm.form2" :localdata="nutritionList2" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="活动能力" v-if="selectNum == 3 || isSubmit">
					<uni-data-checkbox v-model="nutritionForm.form3" :localdata="nutritionList3" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="过去三个月內有没有受到心理创伤或患上急性疾病" v-if="selectNum == 4 || isSubmit">
					<uni-data-checkbox v-model="nutritionForm.form4" :localdata="nutritionList4" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="精神心理状况" v-if="selectNum == 5 || isSubmit">
					<uni-data-checkbox v-model="nutritionForm.form5" :localdata="nutritionList5" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="身体质量指数(BMI)是（） (kg/m2)" v-if="selectNum == 6 || isSubmit">
					<uni-data-checkbox v-model="nutritionForm.form6" :localdata="nutritionList6" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
			</uni-forms>

			<view class="btnList">
				<button class="changeSelectNum" v-if="selectNum != 1 && !isSubmit" size="mini"
					@click="changeSelectNum('del')">上一页</button>
				<button class="changeSelectNum" v-if="selectNum != allItemNum && !isSubmit" size="mini"
					@click="changeSelectNum('add')">下一页</button>
				<button v-if="selectNum == allItemNum && !isSubmit" @click="complete()" type="primary"
					size="mini">完成</button>
				<button class="submit" v-if="isSubmit && flag != 'look'" @click="submit()" type="primary"
					size="mini">提交</button>
			</view>
		</uni-section>
		<view class="guideInformation" v-if="selectNum == 1 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 2 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 3 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 4 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 5 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 6 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: '',
				isSubmit: false,
				iscomplete: false,
				allItemNum: 6,
				selectNum: 1,
				nutritionForm: {},
				nutritionList1: [{
					text: '食量严重减少',
					value: 0
				}, {
					text: '食量中度减少',
					value: 1
				}, {
					text: '食量没有改变',
					value: 2
				}],
				nutritionList2: [{
					text: '体重下降大于3公斤',
					value: 0
				}, {
					text: '不知道',
					value: 1
				}, {
					text: '体重下降1-3公斤',
					value: 2
				}, {
					text: '体重没有下降',
					value: 3
				}],
				nutritionList3: [{
					text: '需长期臥床或坐轮椅',
					value: 0
				}, {
					text: '可以下床或离开轮椅、但不能外出',
					value: 1
				}, {
					text: '可以外出',
					value: 2
				}],
				nutritionList4: [{
					text: '有',
					value: 0
				}, {
					text: '没有',
					value: 1
				}],
				nutritionList5: [{
					text: '严重痴呆或抑郁',
					value: 0
				}, {
					text: '轻度痴呆',
					value: 1
				}, {
					text: '没有精神心理问题',
					value: 2
				}],
				nutritionList6: [{
					text: '<19',
					value: 0
				}, {
					text: '19-21',
					value: 1
				}, {
					text: '21-23',
					value: 2
				}, {
					text: '>或=23',
					value: 3
				}],
			}
		},
		onLoad: function(option) {
			if (option.flag) {
				this.flag = option.flag
				this.isSubmit = option.flag == 'look'
			}
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.flag); //打印出上个页面传递的参数。
		},
		methods: {
			changeSelectNum(e) {
				if (e == 'del') {
					this.selectNum--
				}
				if (e == 'add') {
					this.selectNum++
				}
			},
			complete() {
				this.iscomplete = true
				this.isSubmit = true
			},
			submit() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable .checklist-text {
		opacity: 1;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box .radio__inner {
		display: none;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box .checkbox__inner {
		display: none;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
		color: #858585;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-text {
		color: #ffffff;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box.is--list {
		background-color: #ffffff;
		margin-top: 5px;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box.is--list.is-checked {
		background-color: #1a9def;
		margin-top: 5px;
	}

	/deep/.uni-section-content {
		padding: 20px;
		width: 90%;
		box-sizing: border-box;
		margin: 20px auto 20px;
		background-color: #f2f2f2;
		color: #000000;
	}

	/deep/.uni-forms-item__label {
		font-size: 18px;
		height: auto;
		color: #003366;
		margin-bottom: 20px;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
		font-size: 16px;
		line-height: 20px;
	}

	.nutritionForm {
		padding-bottom: 20px;

		.questionTitle {
			text-align: right;
			color: #858585;
			line-height: 35px;
			font-size: 16px;
		}
	}


	.guideInformation {
		font-size: 16px;
		text-align: center;
		color: #6a6a6a;
		margin: 20px;
		padding: 10px;
		min-height: 100px;
		background-color: #f1f1f1;

		.guideInformationTitle {
			font-size: 22px;
			margin: 10px;
		}

		.guideInformationContent {
			font-size: 16px;
		}
	}

	.btnList {
		display: flex;
		justify-content: center;

		.changeSelectNum {
			color: #ffffff;
			background-color: #1a9def;
		}

		.submit {
			width: 90%;
		}

		button {
			margin: 0 10px;
		}
	}

	/deep/.uni-section .uni-section-header__decoration.line {
		position: absolute;
		top: 20px;
	}

	/deep/.uni-section .uni-section-header__content {
		margin-left: 10px;
	}

	/deep/.uni-forms-item__label {
		align-items: flex-start;
	}

	/deep/.uni-forms-item.is-direction-top .uni-forms-item__label {
		padding: 0;
	}
</style>
