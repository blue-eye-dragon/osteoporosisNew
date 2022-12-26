<template>
	<view class="riskFactorTest">
		<uni-section title="骨质疏松风险测试"
			subTitle="IOF骨质疏松症风险检查旨在作为一种工具来提高人们对已知会增加骨质疏松症和骨折风险的因素的认知识。此风险检查不是诊断工具：只有医生才能诊断出骨质疏松症。尽管答复是根据您提供的资讯产信息生成的，但它们基本本质上是一般性的，可能与您的个人情况无关。请谘询医生以讨论您可能遇到的任何问题或疑虑。"
			padding titleFontSize="36rpx" subTitleFontSize="28rpx">
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<uni-forms label-position="top" :modelValue="riskFactorsForm" ref="form4" labelWidth="auto">
				<view class="questionTitle" v-if="!isSubmit">
					问题{{selectNum}}/共{{allItemNum}}问
				</view>
				<uni-forms-item label="您是否已超过60岁（含）？" v-if="selectNum == 1 || isSubmit">
					<uni-data-checkbox v-model="riskFactorsForm.form1" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
					<view class="ageRange" v-if="riskFactorsForm.form1 == 0" >
						<uni-data-checkbox mode="list" v-model="riskFactorsForm.age"
							:localdata="ageList">
						</uni-data-checkbox>
					</view>
				</uni-forms-item>
				<uni-forms-item label="您在50岁以后是否发生过骨折?" v-if="selectNum == 2 || isSubmit">
					<uni-data-checkbox v-model="riskFactorsForm.form2" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="您是否体重过轻？(BMI低于19?)" v-if="selectNum == 3 || isSubmit">
					<view class="BMIClass">
						<view class="BMIClassTitle">
							您的体重(kg)
						</view>
						<uni-easyinput type="number" class="BMIClassInput" v-model="riskFactorsForm.weight"
							placeholder="请输入您的体重" @blur="inputWeight" :disabled="flag =='look' || iscomplete">
						</uni-easyinput>
					</view>
					<view class="BMIClass">
						<view class="BMIClassTitle">
							您的身高(cm)
						</view>
						<uni-easyinput type="number" class="BMIClassInput" v-model="riskFactorsForm.height"
							placeholder="请输入您的身高" @blur="inputHeight" :disabled="flag =='look' || iscomplete">
						</uni-easyinput>
					</view>
					<view class="BMIClass">
						<view class="BMIClassTitle">
							BMI结果：
						</view>{{BMIResult}}
					</view>
					<view class="resultStyle" v-if="BMIResult < 19">
						是的，我体重过轻
					</view>
					<view class="resultStyle" v-if="BMIResult >= 19">
						不，我没有体重过轻
					</view>
				</uni-forms-item>
				<uni-forms-item label="40岁以后,您的身高下降是否超过4厘米(约1.5英寸)?" v-if="selectNum == 4 || isSubmit">
					<uni-data-checkbox v-model="riskFactorsForm.form3" :localdata="whetherNotList1" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="您父母中的任何一方是否患有髋部骨折？" v-if="selectNum == 5 || isSubmit">
					<uni-data-checkbox v-model="riskFactorsForm.form4" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="您是否患有下列疾病？" v-if="selectNum == 6 || isSubmit">
					<uni-data-checkbox mode="list" :multiple="true" v-model="riskFactorsForm.form5"
						:localdata="diseaseList1" :disabled="flag =='look' || iscomplete" @change="changeDisease1" />
					<uni-data-checkbox mode="list" v-model="riskFactorsForm.form6" :localdata="diseaseList2"
						:disabled="flag =='look' || iscomplete" @change="changeDisease2" />
					<uni-data-checkbox mode="list" v-model="riskFactorsForm.form7" :localdata="diseaseList3"
						:disabled="flag =='look' || iscomplete" @change="changeDisease3" />
				</uni-forms-item>
				<uni-forms-item label="您是否接受过以下药物治疗？" v-if="selectNum == 7 || isSubmit">
					<uni-data-checkbox mode="list" :multiple="true" v-model="riskFactorsForm.form8"
						:localdata="drugList1" :disabled="flag =='look' || iscomplete" @change="changedrug1" />
					<uni-data-checkbox mode="list" v-model="riskFactorsForm.form9" :localdata="diseaseList2"
						:disabled="flag =='look' || iscomplete" @change="changedrug2" />
					<uni-data-checkbox mode="list" v-model="riskFactorsForm.form10" :localdata="diseaseList3"
						:disabled="flag =='look' || iscomplete" @change="changedrug3" />
				</uni-forms-item>

				<uni-forms-item label="您是否过量饮酒（每天超过3个单位）和/或目前是否吸烟？" v-if="selectNum == 8 || isSubmit">
					<uni-data-checkbox v-model="riskFactorsForm.form11" :localdata="whetherNotList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
			</uni-forms>
			<view class="btnList">
				<button class="changeSelectNum" v-if="selectNum != 1 && !isSubmit" size="mini"
					@click="changeSelectNum('del')">上一页</button>
				<button class="changeSelectNum" v-if="selectNum != allItemNum && !isSubmit" size="mini"
					@click="changeSelectNum('add')">下一页</button>
				<button v-if="selectNum == allItemNum && !isSubmit" @click="complete()" type="basics"
					size="mini">完成</button>
				<button class="submit" v-if="isSubmit && flag !=='look' " @click="submit()" type="basics"
					size="mini">提交</button>
			</view>
		</uni-section>

		<view class="guideInformation" v-if="selectNum == 1 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 2 && !isSubmit">
			<view class="guideInformationTitle">
				是否在50岁后发生过骨折？
			</view>
			<view class="guideInformationContent">
				如果您在轻微跌倒后（从站立高度跌倒）骨折，可能您已经发生了骨质疏松。一次骨折是未来新骨折的主要风险因素，在接下来的两年中风险最高。
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 3 && !isSubmit">
			<view class="guideInformationTitle">
				体重过轻？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				是骨质疏松症的风险因素。体重过轻会导致女孩和女性雌激素水平较低，类似于绝经后，这可能会导致骨质疏松症的发生。与此同时，身体虚弱的人骨折的风险更高
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 4 && !isSubmit">
			<view class="guideInformationTitle">
				是否变矮了？
			</view>
			<view class="guideInformationContent">
				成年后身高下降超过4厘米（1.5英寸）通常是由骨质疏松症引起的脊柱骨折所造成的。并非所有的脊柱骨折都会出现疼痛，这意味着有时人们并不知道自己患有脊椎骨折。
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 5 && !isSubmit">
			<view class="guideInformationTitle">
				父母的病史？
			</view>
			<view class="guideInformationContent">
				如果您的父母患有髋部骨折，您患骨质疏松症和骨折的风险会更高。如果您的父母中有一个驼背或者有很显著的骨质疏松症家族史，这也表明您患骨质疏松症的风险增加。
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 6 && !isSubmit">
			<view class="guideInformationTitle">
				与骨质疏松症相关的疾病
			</view>
			<view class="guideInformationContent">
				一些疾病与骨质疏松症和骨折的风险增加有关。这就是所谓的继发性骨质疏松症。有些情况也会增加跌倒的风险，从而导致骨折。
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 7 && !isSubmit">
			<view class="guideInformationTitle">
				与骨质疏松症相关的药物
			</view>
			<view class="guideInformationContent">
				长期接受某些治疗会增加骨丢失，导致骨折风险增加。有些治疗也会增加跌倒的风险，跌倒会导致骨折。
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 8 && !isSubmit">
			<view class="guideInformationTitle">
				是否过量饮酒？
			</view>
			<view class="guideInformationContent">
				饮酒过量会对骨骼健康产生负面影响，还会导致频繁跌倒，从而增加骨折的风险。
			</view>
			<view class="guideInformationTitle">
				吸烟者？
			</view>
			<view class="guideInformationContent">
				无论您现在吸烟，还是过去吸过烟，您都应该知道吸烟对骨骼健康有负面影响。
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
				allItemNum: 8,
				selectNum: 1,
				BMIResult: '--',
				riskFactorsForm: {
					weight: null,
					height: null,
					// form1: '',
					form2: '',
					form3: '',
					form4: '',
					form5: [],
					form6: '',
					form7: '',
					form8: [],
					form9: '',
					form10: '',
					form11: ''
				},

				whetherNotList: [{
						text: '否',
						value: 0,
					},
					{
						text: '是',
						value: 1,
					}
				],

				whetherNotList1: [{
						text: '否',
						value: 0,
					},
					{
						text: '是',
						value: 1,
					},
					{
						text: '我不知道',
						value: 2,
					}
				],
				ageList: [{
						"value": 0,
						"text": "我50岁以上"
					},
					{
						"value": 1,
						"text": "我40岁以上"
					},
					{
						"value": 2,
						"text": "我不到40岁"
					},
				],
				diseaseList1: [{
					"value": 0,
					"text": "类风湿关节炎"
				}, {
					"value": 1,
					"text": "消化道疾病（炎症性肠病（IBD），腹腔疾病）"
				}, {
					"value": 2,
					"text": "前列腺癌或乳腺癌"
				}, {
					"value": 3,
					"text": "糖尿病"
				}, {
					"value": 4,
					"text": "慢性肾脏疾病"
				}, {
					"value": 5,
					"text": "甲状腺疾病（甲状腺功能亢进、甲状旁腺功能亢进）"
				}, {
					"value": 6,
					"text": "肺病（慢性阻塞性肺病 (COPD)）"
				}, {
					"value": 7,
					"text": "低睾酮（性腺功能减退）"
				}, {
					"value": 8,
					"text": "早绝经、月经停止或卵巢切除（性腺功能减退导致雌激素减少）"
				}, {
					"value": 9,
					"text": "制动"
				}, {
					"value": 10,
					"text": "HIV"
				}, ],
				drugList1: [{
					"value": 0,
					"text": "糖皮质激素，通常被称为“类固醇”，用于治疗各种疾病的炎症（例如，泼尼松）"
				}, {
					"value": 1,
					"text": "用于治疗乳腺癌的芳香化酶抑制剂"
				}, {
					"value": 2,
					"text": "用于治疗前列腺癌的去雄激素治疗"
				}, {
					"value": 3,
					"text": "用于治疗糖尿病的噻唑烷二酮类药物（例如，吡格列酮）"
				}, {
					"value": 4,
					"text": "移植手术后使用的免疫抑制剂（例如，钙调蛋白/钙调神经磷酸酶抑制剂）"
				}, {
					"value": 5,
					"text": "抗抑郁药物用于治疗抑郁症、强迫症等。（例如，选择性血清素再摄取抑制剂（SSRI），如氟西汀、氟伏沙明和帕罗西汀）"
				}, {
					"value": 6,
					"text": "用于治疗癫痫的抗惊厥药物或抗癫痫药（例如，苯巴比妥、卡马西平和苯妥英）"
				}, ],
				diseaseList2: [{
					"value": 11,
					"text": "我不知道，但我会问我的医生"
				}],
				diseaseList3: [{
					"value": 12,
					"text": "以上均不是"
				}, ]
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
			inputWeight() {
				let num = 0
				if (this.riskFactorsForm.height && this.riskFactorsForm.height != 0) {
					num = (this.riskFactorsForm.weight) / (Math.pow((this.riskFactorsForm.height * 0.01), 2))
					this.BMIResult = Number(num).toFixed(2)
				}
			},
			inputHeight() {
				let num = 0
				if (this.riskFactorsForm.weight && this.riskFactorsForm.weight != 0) {
					num = (this.riskFactorsForm.weight) / (Math.pow((this.riskFactorsForm.height * 0.01), 2))
					this.BMIResult = Number(num).toFixed(2)
				}
			},
			changeDisease1(e) {
				this.riskFactorsForm.form6 = ''
				this.riskFactorsForm.form7 = ''
			},
			changeDisease2(e) {
				this.riskFactorsForm.form5 = []
				this.riskFactorsForm.form7 = ''
			},
			changeDisease3(e) {
				this.riskFactorsForm.form5 = []
				this.riskFactorsForm.form6 = ''
			},
			changedrug1() {
				this.riskFactorsForm.form9 = ''
				this.riskFactorsForm.form10 = ''
			},
			changedrug2() {
				this.riskFactorsForm.form8 = []
				this.riskFactorsForm.form10 = ''
			},
			changedrug3() {
				this.riskFactorsForm.form8 = []
				this.riskFactorsForm.form9 = ''
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
		margin-top: 10rpx;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box.is--list.is-checked {
		background-color: #1a9def;
		margin-top: 10rpx;
	}

	/deep/.uni-section-content {
		padding: 35rpx;
		width: 90%;
		box-sizing: border-box;
		margin: 35rpx auto 35rpx;
		background-color: #f2f2f2;
		color: #000000;
	}

	/deep/.uni-forms-item__label {
		font-size: 34rpx;
		height: auto;
		color: #003366;
		margin-bottom: 28rpx;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
		font-size: 32rpx;
		line-height: 40rpx;
	}

	.riskFactorTest {
		padding-bottom: 35rpx;

		.questionTitle {
			text-align: right;
			color: #858585;
			line-height: 62rpx;
			font-size: 34rpx;
		}
	}

	.resultStyle {
		width: 100%;
		color: #ffffff;
		font-size: 20rpx;
		line-height: 25rpx;
		padding: 5rpx 0;
		background-color: #faa836;
	}

	.ageRange {
		margin: 20rpx ;
	}

	.BMIClass {
		display: flex;
		align-items: center;
		font-size: 30rpx;
		line-height: 40rpx;
		margin: 10rpx auto;

		.BMIClassTitle {
			width: 220rpx;
		}
	}


	.guideInformation {
		text-align: center;
		color: #6a6a6a;
		margin: 40rpx;
		padding: 20rpx;
		min-height: 200rpx;
		box-sizing: border-box;
		background-color: #f1f1f1;

		.guideInformationTitle {
			font-size: 40rpx;
			margin: 20rpx;
		}

		.guideInformationContent {
			font-size: 32rpx;
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
			margin: 0 10rpx;
		}
	}

	/deep/.uni-section .uni-section-header__decoration.line {
		position: absolute;
		top: 33rpx;
	}

	/deep/.uni-section .uni-section-header__content {
		margin-left: 10rpx;
	}

	/deep/.uni-forms-item__label {
		align-items: flex-start;
	}

	/deep/.uni-forms-item.is-direction-top .uni-forms-item__label {
		padding: 0;
	}
</style>
