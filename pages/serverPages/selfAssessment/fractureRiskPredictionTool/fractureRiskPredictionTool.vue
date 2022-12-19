<template>
	<view class="fractureRiskPredictionTool">
		<uni-section title="骨折风险预测工具" subTitle="骨折风险采用 WHO 推荐的骨折风险预测工具（FRAX®）计算" type="line" padding
			titleFontSize="18px" subTitleFontSize="14px">
			<uni-forms label-position="top" :modelValue="riskProfileForm" ref="form4" labelWidth="auto">
				<view class="questionTitle" v-if="!isSubmit">
					问题{{selectNum}}
				</view>
				<uni-forms-item label="年龄或出生日期（40-90年之间）" v-if="selectNum == 1 || isSubmit">
					<view class="riskProfilAge">
						<uni-easyinput v-model="riskProfileForm.age" placeholder="请输入年龄"
							:disabled="flag =='look' || iscomplete">
						</uni-easyinput>
					</view>
					<uni-datetime-picker type="date" v-model="riskProfileForm.birthday"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="性别" v-if="selectNum == 2 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.sex" :localdata="sexs" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="体重 (kg)" v-if="selectNum == 3 || isSubmit">
					<uni-easyinput v-model="riskProfileForm.age" placeholder="请输入体重"
						:disabled="flag =='look' || iscomplete">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="身高 (cm)" v-if="selectNum == 4 || isSubmit">
					<uni-easyinput v-model="riskProfileForm.height" placeholder="请输入身高"
						:disabled="flag =='look' || iscomplete">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="既往骨折史" v-if="selectNum == 5 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.form5" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="父母髋骨骨折" v-if="selectNum == 6 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.form6" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="目前抽烟行为" v-if="selectNum == 7 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.form7" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="肾上腺皮质激素服用" v-if="selectNum == 8 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.form8" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="风湿性关节炎" v-if="selectNum == 9 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.form9" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="继发性骨质疏松症" v-if="selectNum == 10 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.form10" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="每日酒精摄取量达3个单位或以上" v-if="selectNum == 11 || isSubmit">
					<uni-data-checkbox v-model="riskProfileForm.form11" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="骨密度 (BMD)" v-if="selectNum == 12 || isSubmit">
					<view class="BMDmodels">
						<uni-data-select v-model="riskProfileForm.BMDmodels" placeholder="选择BMD机型"
							:localdata="BMDmodelsList" @change="change" :disabled="flag =='look' || iscomplete">
						</uni-data-select>
					</view>
					<uni-easyinput v-model="riskProfileForm.form12" placeholder="请输入身高"
						:disabled="flag =='look' || iscomplete">
					</uni-easyinput>
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
		<view class="guideInformation" v-if="selectNum == 7 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 8 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 9 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 10 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 11 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 12 && !isSubmit">
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
				allItemNum: 12,
				selectNum: 1,
				riskProfileForm: {},
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				whetherNotList: [{
						text: '否',
						value: 0,
					},
					{
						text: '是',
						value: 1,
					}
				],
				BMDmodelsList: [{
						value: 0,
						text: "GE-Lunar"
					},
					{
						value: 1,
						text: "Hologic"
					},
					{
						value: 2,
						text: "Norland"
					},
					{
						value: 3,
						text: "T指数"
					},
					{
						value: 4,
						text: "DMS/Medilink"
					},
					{
						value: 5,
						text: "Mindways QCT"
					},
				]
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
			},
			change() {}
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

	.fractureRiskPredictionTool {
		padding-bottom: 20px;

		.questionTitle {
			text-align: center;
			line-height: 30px;
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
		background-color: #fff1e5;

		.guideInformationTitle {
			font-size: 22px;
			margin: 10px;
		}

		.guideInformationContent {
			font-size: 16px;
		}
	}

	.riskProfilAge, .BMDmodels {
		margin-bottom: 10px;
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

	/deep/.uni-select {
		background-color: #ffffff;
	}
</style>
