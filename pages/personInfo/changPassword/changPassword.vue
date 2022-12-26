<template>
	<view class="changPassword">
		<view class="changePasswordModel">
			<uni-forms :modelValue="changePasswordModel" :rules="changePasswordRules" ref="changePasswordModel"
				:border="true" labelWidth="auto">
				<uni-forms-item label="原密码" name="changePasswordNum">
					<uni-easyinput type="password" v-model="changePasswordModel.oldPassword" placeholder="请输入原密码"
						:inputBorder="false">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="新密码" name="changePasswordNum">
					<uni-easyinput type="password" v-model="changePasswordModel.newPassword" placeholder="请输入新密码"
						:inputBorder="false">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="确认新密码" name="changePasswordNum">
					<uni-easyinput type="password" v-model="changePasswordModel.confirmNewPassword" placeholder="请确认新密码"
						:inputBorder="false">
					</uni-easyinput>
				</uni-forms-item>
			</uni-forms>
		</view>
		<button type="basics" @click="mobileSubmit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				changePasswordModel: {},
				changePasswordRules: {}
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.changPassword {
		padding: 20rpx;
		.changePasswordModel {
			border-bottom: 1rpx solid #eee;
			margin: 20rpx auto;
		}
	}
</style>
