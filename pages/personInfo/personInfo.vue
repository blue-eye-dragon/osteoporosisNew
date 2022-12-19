<template>
	<view class="personBox secendMain">
		<!--#ifdef MP-->
		<uni-nav-bar background-color="#1a9def" :border="false"></uni-nav-bar>
		<!--#endif-->
		<tab-bar :userIdentity="userType" :selected="2"></tab-bar>
		<view class="personInfo" v-if="userType == 1">
			<view class="personImg">
				<img src="https://s1.ax1x.com/2022/11/09/zS361I.jpg" alt="">
			</view>
			<view class="personMsg">
				<view class="name">
					黄晓冰<span>主治医生</span>
				</view>
				<view class="position">
					中山大学附属第三医院
					<view>口腔科</view>
				</view>
			</view>
			<view class="personalData" @click="personalData()">
				个人资料 >
			</view>
		</view>
		<view class="personInfo" v-if="userType == 0">
			<view class="personImg">
				<img src="https://s1.ax1x.com/2022/11/09/zS361I.jpg" alt="">
			</view>
			<view class="personMsg">
				<view class="name">
					李珊珊<span class="lVspan">LV3</span>
				</view>
				<view class="position">
					<view class="membershipGrade">还差53分升级为4级会员</view>
					<cmd-progress :percent="30" :show-info="false" :stroke-width="8"></cmd-progress>
				</view>
			</view>
			<view class="personalData" @click="personalData()">
				个人资料 >
			</view>
		</view>
		<uni-list>
			<uni-list-item title="我的订单" showArrow url="" rightText="查看全部订单" link
				to="/pages/personInfo/allOrders/allOrders"></uni-list-item>
		</uni-list>
		<view class="OrdersClass">
			<uni-grid :column="4" :highlight="true" @change="change" :showBorder="false">
				<uni-grid-item v-for="(baseListItem,baseListIndex) in baseList" :index="baseListIndex"
					:key="baseListIndex" :height="80">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons custom-prefix="iconfont" :type="baseListItem.name" :color="baseListItem.color"
							size="25"></uni-icons>
						<text class="grid-text">{{baseListItem.title}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<scroll-view scroll-top="0" scroll-y="true" class="scroll-Y">
			<uni-list class="listBox">
				<uni-list-item title="实名认证" rightText="已认证" showArrow clickable @click="pushItem('realName')"
					thumb="/static/personInfo/realName.png">
				</uni-list-item>
				<uni-list-item title="手机号绑定" rightText="未绑定" showArrow clickable @click="pushItem('mobilePhone')"
					thumb="/static/personInfo/mobilePhone.png">
				</uni-list-item>
				<uni-list-item title="修改密码" showArrow clickable @click="pushItem('changPassword')"
					thumb="/static/personInfo/changePassword.png">
				</uni-list-item>
				<!-- 	<uni-list-item title="问诊记录" showArrow link
					to="/pages/personInfo/interrogationRecord/interrogationRecord"
					thumb="/static/personInfo/Interrogation.png">
				</uni-list-item> -->
				<uni-list-item title="我的患者" showArrow clickable @click="pushItem('patients')" v-if="userType == 1"
					thumb="/static/personInfo/patients.png">
				</uni-list-item>
				<uni-list-item title="我的医生" showArrow clickable @click="pushItem('doctor')" v-if="userType == 0"
					thumb="/static/personInfo/doctor.png">
				</uni-list-item>
				<uni-list-item title="数据分析" showArrow clickable @click="pushItem('analysis')" v-if="userType == 0"
					thumb="/static/personInfo/analysis.png">
				</uni-list-item>
				<uni-list-item title="切换用户" showArrow clickable @click="pushItem('changePerson')"
					thumb="/static/personInfo/changePerson.png">
				</uni-list-item>
			</uni-list>
		</scroll-view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	import {
		mapState
	} from "vuex"
	import tabBar from "@/components/tab-bar/tab-bar.vue"
	import topTabbar from '@/components/topTabbar/topTabbar.vue'
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		mixins: [mixins],
		data() {
			return {
				baseList: [{
						name: "icon-daifukuan1",
						title: '待付款',
						color: '#f5ba42'
					}, {
						name: 'icon-daishouhuo1',
						title: '待收货',
						color: '#ff8b4a'
					},
					{
						name: 'icon-daipingjia',
						title: '待评价',
						color: '#ff6076'
					},
					{
						name: 'icon-shouhou',
						title: '售后',
						color: '#63b2e8'
					},
				]
			}
		},
		computed: {
			...mapState(['userName', 'userType'])
		},
		components: {
			tabBar,
			topTabbar,
			cmdProgress
		},
		mounted() {
			console.log(123312)
			uni.setTabBarBadge({
				index: 0,
				text: '23'
			})
		},
		methods: {
			change(e) {
				let index = e.detail.index
				let url = ''
				switch (index) {
					case 0:
						url = '/pages/personInfo/waitPayment/waitPayment'
						break;
					case 1:
						url = '/pages/personInfo/waitGoods/waitGoods'
						break;
					case 2:
						url = '/pages/personInfo/waitEvaluate/waitEvaluate'
						break;
					case 3:
						url = '/pages/personInfo/afterSales/afterSales'
						break;
				}
				this.navigateTo(url)
			},
			pushItem(e) {
				let url = ''
				switch (e) {
					case 'realName':
						url = '/pages/personInfo/nameCertification/nameCertification'
						break;
					case 'mobilePhone':
						url = '/pages/personInfo/mobilePhone/mobilePhone'
						break;
					case 'changPassword':
						url = '/pages/personInfo/changPassword/changPassword'
						break;
					case 'patients':
						url = '/pages/personInfo/myPatients/myPatients'
						break;
					case 'doctor':
						url = '/pages/personInfo/myDoctor/myDoctor'
						break;
					case 'changePerson':
						url = '/pages/loginForm/selectUserType'
						break;
					case 'analysis':
						url = '/pages/personInfo/analysisOfData/analysisOfData'
						break;
				}
				this.navigateTo(url)
			},
			onNavigationBarButtonTap(e) { //监听自定义导航栏按钮跳转页面
				if (e.index === 0) {
					this.navigateTo('/pages/personInfo/personSetting/personSetting')
				}
			},
			allOrders() {
				this.navigateTo('/pages/personInfo/allOrders/allOrders')
			},
			personalData() {
				this.navigateTo('/pages/personInfo/personalData/personalData')
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/ .uni-list-item__content-title {
		font-size: 18px;
	}

	.OrdersClass {
		border-bottom: 1px solid #909399;
	}

	.u-cell-group {
		border-top: 5px solid #e0e0e0;
	}

	.grid-text {
		font-size: 16px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}

	.scroll-Y {
		height: calc(100vh - 470px);
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;

		.iconSize {
			font-size: 25px;
		}
	}

	.personBox {
		background-color: #ffffff;
		padding-top: ;

		.personInfo {
			min-height: 100px;
			position: relative;
			padding: 20px;
			background: linear-gradient(180deg, #1a9def, #75c4f5);
			display: flex;
			align-items: center;

			.personImg {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				overflow: hidden;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.personMsg {
				color: aliceblue;
				width: calc(100% - 140px);
				padding: 20px;
				height: 100px;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				.name {
					font-size: 20px;

					span {
						font-size: 14px;
						margin-left: 10px;
						color: #fbff00;
					}

					.lVspan {
						font-size: 6px;
						margin-left: 10px;
						color: #000000;
						padding: 1px 5px;
						border-radius: 5px;
						background-color: #fbff00;
					}
				}

				.position {
					font-size: 14px;

					.membershipGrade {
						margin: 5px 0;
						font-size: 12px;
						color: #ffffff;
					}
				}
			}

			.personalData {
				position: absolute;
				font-size: 12px;
				right: -7px;
				color: #ffffff;
				padding: 3px 11px;
				border-radius: 15px;
				background-color: #1f80e8;
			}
		}

		.cellImg {
			width: 22px;
			height: 22px;
		}
	}

	.listBox {
		max-height: 500px;
		overflow-y: auto;
	}
</style>
