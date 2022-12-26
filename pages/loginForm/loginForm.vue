<template>
	<view>
		<view class="loginBox main">
			<view class="titleName">
				<view :style="{'fontSize':'50rpx'}">老年肌少-骨质疏松人群</view>
				<view :style="{'fontSize':'40rpx'}">移动健康管理运营平台</view>
			</view>
			<view class="loginForm">
				<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
					activeColor="#007aff"></uni-segmented-control>
				<view class="content">
					<view v-show="current === 0">
						<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
						<uni-forms label-position="top" :modelValue="loginModel" :rules="loginRules" ref="loginModel" labelWidth="auto">
							<uni-forms-item label="用户名/邮箱/手机号：" name="username" ref="item">
								<uni-easyinput prefixIcon="person" v-model="loginModel.username" placeholder="请输入账号">
								</uni-easyinput>
							</uni-forms-item>
							<uni-forms-item label="密码：" name="password" ref="item">
								<uni-easyinput prefixIcon="locked" type="password" v-model="loginModel.password"
									placeholder="请输入密码">
								</uni-easyinput>
							</uni-forms-item>
						</uni-forms>
						<button type="basics" @click="submitLogin">提交</button>
						<view class="forgotPassword">忘记密码？</view>
						<view class="socialSccount">
							<view class="socialSccountTitle">社交账号登陆</view>
							<view>
								<img src="../../static/login/weChat.png"></img>
								<img :style="{'margin':'0 40rpx'}" src="../../static/login/QQ.png"></img>
								<img src="../../static/login/sinaWeibo.png"></img>
							</view>
						</view>
					</view>
					<view v-show="current === 1">
						<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
						<uni-forms label-position="top" :modelValue="registerModel" :rules="registerRules" ref="registerModel" labelWidth="auto">
							<uni-forms-item label="用户名/邮箱/手机号：" name="username" ref="item">
								<uni-easyinput prefixIcon="person" v-model="registerModel.username" placeholder="请输入账号">
								</uni-easyinput>
							</uni-forms-item>
							<uni-forms-item label="密码：" name="password" ref="item">
								<uni-easyinput prefixIcon="locked" type="password" v-model="registerModel.password"
									placeholder="请输入密码">
								</uni-easyinput>
							</uni-forms-item>
							<uni-forms-item label="密码确认：" name="confirmPassword" ref="item">
								<uni-easyinput prefixIcon="locked" type="password" v-model="registerModel.confirmPassword"
									placeholder="请输入密码">
								</uni-easyinput>
							</uni-forms-item>
						</uni-forms>
						<button type="basics" @click="submitRegister">提交</button>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				current: 0,
				items: ['登陆', '注册'],
				loginModel: {
					username: '',
					password: '',
				},
				registerModel: {},
				loginRules: {
					// 对name字段进行必填验证
					username: {
						rules: [{
							required: true,
							errorMessage: '请输入账号',
						}]
					},
					// 对password字段进行必填验证
					password: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							},
							{
								minLength: 6,
								maxLength: 10,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					}
				},
				registerRules: {
					// 对name字段进行必填验证
					username: {
						rules: [{
							required: true,
							errorMessage: '请输入账号',
						}]
					},
					// 对password字段进行必填验证
					password: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							},
							{
								minLength: 6,
								maxLength: 10,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					// 对password字段进行必填验证
					confirmPassword: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							},
							{
								minLength: 6,
								maxLength: 10,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					}
				},
			}
		},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.loginModel.setRules(this.loginRules)
			this.$refs.registerModel.setRules(this.registerRules)
		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			submitLogin() {
				this.$refs.loginModel.validate().then(res => {
					if (this.loginModel.username == 'admin' && this.loginModel.password == '123456') {
						this.$store.commit('setUserType', 1)
						this.switchTab('/pages/serverPages/serverPages')
					} else if (this.loginModel.username == 'user1' && this.loginModel.password == '123456') {
						console.log(123123)
						this.$store.commit('setUserType', 0)
						this.switchTab('/pages/serverPages/serverPages')
					} else {
						uni.showToast({
							title: '账号或密码错误',
							icon: "error",
							duration: 2000
						});
					}
				}).catch(errors => {
					console.log('表单错误信息：', errors);
				})
				console.log(this.loginModel.username, this.loginModel.password)
			},
			submitRegister () {}
		},
	}
</script>

<style lang="scss" scoped>
	.loginBox {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		padding: 40rpx;
		box-sizing: border-box;
		flex-direction: column;
		align-items: center;
		background: -webkit-linear-gradient(to top, #7764f3, #189fef);
		background: linear-gradient(to top, #7764f3, #189fef);

		.titleName {
			color: #ffffff;
			margin-top: 20%;
			text-align: center;
		}

		.loginForm {
			width: 90%;
			margin-top: 60rpx;
			padding: 40rpx;
			background-color: #ffffff;
			border-radius: 40rpx;

			.content {
				padding: 40rpx 0;

				.loginTitle {
					width: 100%;
					line-height: 10rpx;
					text-align: center;
					font-size: 40rpx;
				}

				.formItemBox {
					margin: 5% 0;
					height: 120rpx;

					.title {
						font-size: 28rpx;
					}

					.inputClass {
						height: 60%;
						padding: 20rpx;
						box-sizing: border-box;
						border-radius: 20rpx;
						background-color: #f1f5f8;
					}
				}

				.forgotPassword {
					width: 100%;
					text-align: center;
					font-size: 28rpx;
					line-height: 60rpx;
				}

				.socialSccount {
					width: 100%;
					height: 160rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-top: 1rpx solid #c2c2c2;
					position: relative;
					margin-top: 40rpx;

					.socialSccountTitle {
						background-color: #ffffff;
						position: absolute;
						top: -44rpx;
						padding: 20rpx;
						font-size: 36rpx;
					}

					img {
						width: 64rpx;
						height: 64rpx;
					}
				}
			}
		}
	}
	/deep/.segmented-control__text {
		font-size: 48rpx;
	}
	/deep/.uni-forms-item__label {
		font-size: 36rpx;
	}
</style>
