<template>
	<view class="dailyLivingAbilityScale">
		<uni-section title="日常生活能力量表" subTitle="总分≤26分为基本正常、>26分提示有不同程度的功能下降，若两项及以上≥3分提示存在明显功能障碍，最高分为56分" padding
			titleFontSize="36rpx" subTitleFontSize="28rpx">
			<uni-forms label-position="top" :modelValue="viabilityForm" ref="form3" labelWidth="auto">
				<view class="questionTitle" v-if="!isSubmit">
					问题{{selectNum}}/共{{allItemNum}}问
				</view>
				<uni-forms-item label="使用公共车辆" v-if="selectNum == 1 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form1" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="行走" v-if="selectNum == 2 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form2" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="做饭菜" v-if="selectNum == 3 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form3" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="做家务" v-if="selectNum == 4 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form4" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="吃药" v-if="selectNum == 5 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form5" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="吃饭" v-if="selectNum == 6 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form6" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="穿衣" v-if="selectNum == 7 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form3" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="梳头、刷牙等" v-if="selectNum == 8 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form4" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="洗衣" v-if="selectNum == 9 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form5" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="洗澡" v-if="selectNum == 10 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form6" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="购物" v-if="selectNum == 11 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form3" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="定时上厕所" v-if="selectNum == 12 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form4" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="打电话" v-if="selectNum == 13 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form5" :localdata="viabilityList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="处理自己钱财" v-if="selectNum == 14 || isSubmit">
					<uni-data-checkbox v-model="viabilityForm.form6" :localdata="viabilityList" mode="list"
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
		<view class="guideInformation" v-if="selectNum == 13 && !isSubmit">
			<view class="guideInformationTitle">
				60岁以上？
			</view>
			<view class="guideInformationContent">
				身体质量指数（BMI）小于19 kg/m2（相当于19 lbs/in2）
				骨质疏松风险随着年龄的增长而增加。如果您是60岁或以上的女性，或70岁或以上的男性，即使您并无其他临床风险因素，也应该在下次体检时和医生讨论骨骼健康问题
			</view>
		</view>
		<view class="guideInformation" v-if="selectNum == 14 && !isSubmit">
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
				allItemNum: 14,
				selectNum: 1,
				viabilityForm: {},
				viabilityList: [{
						text: '自己独立完成（1分）',
						value: 0
					},
					{
						text: '有些困难（2分）',
						value: 1
					},
					{
						text: '需要帮助（3分）',
						value: 2
					},
					{
						text: '完全依赖他人（4分）',
						value: 3
					}
				],
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

	.dailyLivingAbilityScale {
		padding-bottom: 35rpx;

		.questionTitle {
			text-align: right;
			color: #858585;
			line-height: 62rpx;
			font-size: 34rpx;
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
