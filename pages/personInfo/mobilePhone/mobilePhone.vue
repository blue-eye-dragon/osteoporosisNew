<template>
	<view class="mobilePhone">
		<view class="remindWords">为了提高账号安全性，请马上绑定手机号</view>
		<view class="mobileForm">
			<uni-forms :modelValue="mobileModel" :rules="mobileRules" ref="mobileModel" :border="true">
				<uni-forms-item name="mobileNum">
					<uni-easyinput v-model="mobileModel.mobileNum" placeholder="请输入手机号" :inputBorder="false">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="verificationCode">
					<view class="verificationCode">
						<uni-easyinput v-model="mobileModel.verificationCode" placeholder="请输入验证码" :inputBorder="false">
						</uni-easyinput>
						<button type="primary"size="mini" @click="clickCode" :disabled="codeDisabled">{{codeText}}</button>
					</view>
				</uni-forms-item>
			</uni-forms>
		</view>
		<button type="primary" @click="mobileSubmit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobileModel: {},
				mobileRules: {},
				codeDisabled: false,
				codeText: '获取验证码',
			}
		},
		methods: {
			clickCode() {
				if(!this.codeDisabled) {
					let num = 60
					this.codeDisabled = true
					this.codeText = num
					let timer = setInterval(()=>{
						num-- 
						this.codeText = num
						if (num < 0) {
							this.codeDisabled = false
							this.codeText = '重新获取验证码'
							clearTimeout(timer)
						}
					},1000)
				}
			},
			mobileSubmit() {}
		}
	}
</script>

<style lang="less" scoped>
	.mobilePhone {
		padding: 20px;

		.remindWords {
			text-align: center;
		}

		.mobileForm {
			margin: 20px auto;
			border-bottom: 1px solid #eee;

			.verificationCode {
				display: flex;
			}
		}
	}
</style>
