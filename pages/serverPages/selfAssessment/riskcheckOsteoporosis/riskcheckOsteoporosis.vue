<template>
	<view>
		<uni-section title="骨质疏松自我筛查" subTitle="亚洲绝经后妇女骨质疏松自我筛查（OSTA）工具,计算方法是：OSTA 指数 =〔体质量（kg）- 年龄（岁）〕×0.2。" padding
			titleFontSize="36rpx" subTitleFontSize="28rpx">
			<uni-forms :modelValue="OSTAForm" ref="form4" labelWidth="280rpx">
				<uni-forms-item label="体质量（kg）" required>
					<uni-easyinput v-model="OSTAForm.weight" :inputBorder="false" placeholder="请输入体质量"
						@iconClick="clickWeight" :disabled="flag =='look' || iscomplete"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="年龄（岁）" required>
					<uni-easyinput v-model="OSTAForm.age" :inputBorder="false" placeholder="请输入年龄" @iconClick="clickAge"
						:disabled="flag =='look' || iscomplete"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="OSTA 指数">
					<uni-easyinput v-model="OSTAForm.exponent" :inputBorder="false" placeholder="请输入内容"
						@iconClick="onClick" disabled>
					</uni-easyinput>
				</uni-forms-item>
			</uni-forms>
			<view class="btnList">
				<button class="changeSelectNum" v-if="selectNum != 1 && !isSubmit" size="mini"
					@click="changeSelectNum('del')">上一页</button>
				<button class="changeSelectNum" v-if="selectNum != allItemNum && !isSubmit" size="mini"
					@click="changeSelectNum('add')">下一页</button>
				<button v-if="selectNum == allItemNum && !isSubmit" @click="complete()" type="basics"
					size="mini">完成</button>
				<button class="submit" v-if="isSubmit && flag != 'look'" @click="submit()" type="basics"
					size="mini">提交</button>
			</view>
		</uni-section>
		<view class="guideInformation" v-if="!isSubmit">
			指导信息
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
				allItemNum: 1,
				selectNum: 1,
				OSTAForm: {}
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
	/deep/.uni-forms-item {
		align-items: center;
	}

	/deep/.uni-forms-item__label {
		font-size: 36rpx;
	}

	/deep/.uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
		font-size: 32rpx;
	}

	/deep/.uni-section-content {
		padding: 35rpx;
		width: 90%;
		box-sizing: border-box;
		margin: 35rpx auto 35rpx;
		background-color: #f2f2f2;
		color: #000000;
	}

	.guideInformation {
		text-indent: 2em;
		font-size: 32rpx;
		color: #6a6a6a;
		margin: 40rpx;
		padding: 20rpx;
		min-height: 200rpx;
		background-color: #f1f1f1;
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


	/deep/.uni-forms-item.is-direction-top .uni-forms-item__label {
		padding: 0;
	}
</style>
