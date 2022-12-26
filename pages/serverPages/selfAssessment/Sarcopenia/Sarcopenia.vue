<template>
	<view class="Sarcopenia">
		<uni-section title="老年肌少症问卷"
			subTitle="每个条目取值范围是0-2分,问卷取值范围是0-10分。当得分为0-3分时,认为受试者目前不存在肌少症；当得分≥4分时,认为受试者患有肌少症,且得分越高程度越严重" padding
			titleFontSize="36rpx" subTitleFontSize="28rpx">
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<uni-forms label-position="top" :modelValue="sarcopeniaForm" ref="form1" labelWidth="auto">
				<view class="questionTitle" v-if="!isSubmit">
					问题{{selectNum}}/共{{allItemNum}}问
				</view>
				<uni-forms-item label="您提起或者搬运10斤物品有多大困难" v-if="selectNum == 1 || isSubmit">
					<uni-data-checkbox v-model="sarcopeniaForm.handling" :localdata="selectedList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="您步行穿过一个房间有多大困难" v-if="selectNum == 2 || isSubmit">
					<uni-data-checkbox v-model="sarcopeniaForm.walking" :localdata="selectedList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="您从椅子或床边站起有多大困难" v-if="selectNum == 3 || isSubmit">
					<uni-data-checkbox v-model="sarcopeniaForm.standUp" :localdata="selectedList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="您上10个台阶有多大困难" v-if="selectNum == 4 || isSubmit">
					<uni-data-checkbox v-model="sarcopeniaForm.onSteps" :localdata="selectedList" mode="list"
						:disabled="flag =='look' || iscomplete" />
				</uni-forms-item>
				<uni-forms-item label="您在过去的一年里跌倒了多少次" v-if="selectNum == 5 || isSubmit">
					<uni-data-checkbox v-model="sarcopeniaForm.fallNumber" :localdata="fallNumber" mode="list"
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag: '',
				isSubmit: false,
				iscomplete: false,
				allItemNum: 5,
				selectNum: 1,
				sarcopeniaForm: {},
				selectedList: [{
					text: '没有',
					value: 0
				}, {
					text: '有一些',
					value: 1
				}, {
					text: '很多或无法完成',
					value: 2
				}],
				fallNumber: [{
					text: '没有',
					value: 0
				}, {
					text: '1-3次',
					value: 1
				}, {
					text: '≥4次',
					value: 2
				}]
			}
		},
		onLoad: function(option) {
			if (option.flag) {
				this.flag = option.flag
				this.isSubmit = (option.flag == 'look')
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

	.Sarcopenia {
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
			margin: 0 20rpx;
		}
	}

	/deep/.uni-section .uni-section-header__decoration.line {
		position: absolute;
		top: 33rpx;
	}

	/deep/.uni-section .uni-section-header__content {
		margin-left: 20rpx;
	}

	/deep/.uni-forms-item__label {
		align-items: flex-start;
	}

	/deep/.uni-forms-item.is-direction-top .uni-forms-item__label {
		padding: 0;
	}
</style>
