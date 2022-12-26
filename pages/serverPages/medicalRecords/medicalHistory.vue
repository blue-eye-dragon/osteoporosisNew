<template>
	<view>
		<view class="patientsInfo">
			<uni-forms label-position="left" :modelValue="patientsInfoForm" ref="form" labelWidth="160rpx">
				<uni-forms-item label="姓名:">
					<uni-easyinput v-model="patientsInfoForm.name" :inputBorder="false" disabled :styles="{'disableColor':'#ffffff'}">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="性别:">
					<uni-easyinput v-model="patientsInfoForm.sex" :inputBorder="false" disabled :styles="{'disableColor':'#ffffff'}">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="年龄:">
					<uni-easyinput v-model="patientsInfoForm.age" :inputBorder="false" disabled :styles="{'disableColor':'#ffffff'}">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="联系方式:">
					<uni-easyinput v-model="patientsInfoForm.mobile" :inputBorder="false" disabled
						:styles="{'disableColor':'#ffffff'}">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="籍贯:">
					<uni-easyinput v-model="patientsInfoForm.nativePlace" :inputBorder="false" disabled
						:styles="{'disableColor':'#ffffff'}">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="患病周期:">
					<uni-easyinput v-model="patientsInfoForm.itsDuration" :inputBorder="false" disabled
						:styles="{'disableColor':'#ffffff'}">
					</uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="当前症状:">
					<view class="symptomContent">
						<view class="symptom" v-for="item in patientsInfoForm.symptoms" :key="item">
							{{item}}
						</view>
					</view>
				</uni-forms-item>
			</uni-forms>
		</view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
			activeColor="#1a9def"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<uni-card v-for="item in medicalCardList" :key="item.id" :title="item.title" :sub-title="item.subTitle"
					:extra="item.seeDoctorDay" :thumbnail="item.personImg">
					<view class="uni-body medicalCard">
						<view class="medicalAbstract">
							<view class="">就诊时间: <span class="medicalAbstractContent">{{item.seeDoctorTime}}</span>
							</view>
							<view class="">就诊医生: <span class="medicalAbstractContent">{{item.seeDoctorName}}</span>
							</view>
							<view class="">就诊方向: <span class="medicalAbstractContent">{{item.seeDirection}}</span>
							</view>
						</view>
						<view class="detailBtn">
							<button type="primary" size="mini" @click="onClick(item.id)">详情</button>
						</view>
					</view>
				</uni-card>
			</view>
			<view v-show="current === 1">
				<uni-card v-for="item in medicalCardList" :key="item.id" :title="item.title" :sub-title="item.subTitle"
					:extra="item.seeDoctorDay" :thumbnail="item.personImg">
					<view class="uni-body medicalCard">
						<view class="medicalAbstract">
							<view class="">就诊时间: <span class="medicalAbstractContent">{{item.seeDoctorTime}}</span>
							</view>
							<view class="">就诊医生: <span class="medicalAbstractContent">{{item.seeDoctorName}}</span>
							</view>
							<view class="">就诊方向: <span class="medicalAbstractContent">{{item.seeDirection}}</span>
							</view>
						</view>
						<view class="detailBtn">
							<button type="primary" size="mini" @click="onClick(item.id)">详情</button>
						</view>
					</view>
				</uni-card>
			</view>
			<view v-show="current === 2">
				<uni-card v-for="item in medicalCardList" :key="item.id" :title="item.title" :sub-title="item.subTitle"
					:extra="item.seeDoctorDay" :thumbnail="item.personImg">
					<view class="uni-body medicalCard">
						<view class="medicalAbstract">
							<view class="">就诊时间: <span class="medicalAbstractContent">{{item.seeDoctorTime}}</span>
							</view>
							<view class="">就诊医生: <span class="medicalAbstractContent">{{item.seeDoctorName}}</span>
							</view>
							<view class="">就诊方向: <span class="medicalAbstractContent">{{item.seeDirection}}</span>
							</view>
						</view>
						<view class="detailBtn">
							<button type="primary" size="mini" @click="onClick(item.id)">详情</button>
						</view>
					</view>
				</uni-card>
			</view>
			<view v-show="current === 3">
				<uni-card v-for="item in medicalCardList" :key="item.id" :title="item.title" :sub-title="item.subTitle"
					:extra="item.seeDoctorDay" :thumbnail="item.personImg">
					<view class="uni-body medicalCard">
						<view class="medicalAbstract">
							<view class="">就诊时间: <span class="medicalAbstractContent">{{item.seeDoctorTime}}</span>
							</view>
							<view class="">就诊医生: <span class="medicalAbstractContent">{{item.seeDoctorName}}</span>
							</view>
							<view class="">就诊方向: <span class="medicalAbstractContent">{{item.seeDirection}}</span>
							</view>
						</view>
						<view class="detailBtn">
							<button type="primary" size="mini" @click="onClick(item.id)">详情</button>
						</view>
					</view>
				</uni-card>
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
				items: ['一周内', '一月内', '三月内', '三月以上'],
				sexs: [{
					text: '男',
					value: 0,
					disable: true

				}, {
					text: '女',
					value: 1,
					disable: true
				}],
				patientsInfoForm: {
					name: '李珊珊',
					age: 20,
					sex: '女',
					mobile: '13311116666',
					nativePlace: '四川省成都市金牛区',
					itsDuration: '7年',
					symptoms: ['乏力', '腰酸背痛', '骨痛', '骨质变形'],
					newTime: '2020-10-10 20:10:09'
				},
				medicalCardList: [{
						id: 1,
						title: '中山医院',
						subTitle: '骨科-普通门诊',
						seeDoctorDay: '2022-10-10',
						personImg: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						seeDoctorTime: '2020-10-10 10:20-11:30',
						seeDoctorName: '王凤霞',
						seeDirection: '复诊-骨质疏松'
					},
					{
						id: 2,
						title: '中山医院',
						subTitle: '骨科-普通门诊',
						seeDoctorDay: '2022-10-10',
						personImg: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						seeDoctorTime: '2020-10-10 10:20-11:30',
						seeDoctorName: '王凤霞',
						seeDirection: '复诊-骨质疏松'
					},
					{
						id: 3,
						title: '中山医院',
						subTitle: '骨科-普通门诊',
						seeDoctorDay: '2022-10-10',
						personImg: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						seeDoctorTime: '2020-10-10 10:20-11:30',
						seeDoctorName: '王凤霞',
						seeDirection: '复诊-骨质疏松'
					},
					{
						id: 4,
						title: '中山医院',
						subTitle: '骨科-普通门诊',
						seeDoctorDay: '2022-10-10',
						personImg: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						seeDoctorTime: '2020-10-10 10:20-11:30',
						seeDoctorName: '王凤霞',
						seeDirection: '复诊-骨质疏松'
					},
					{
						id: 5,
						title: '中山医院',
						subTitle: '骨科-普通门诊',
						seeDoctorDay: '2022-10-10',
						personImg: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						seeDoctorTime: '2020-10-10 10:20-11:30',
						seeDoctorName: '王凤霞',
						seeDirection: '复诊-骨质疏松'
					}
				]
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			onClick() {
				this.navigateTo('/pages/serverPages/medicalRecords/medicalDetail')
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-forms-item {
		margin-bottom: 0rpx;
	}

	/deep/.uni-forms-item__content {
		display: flex;
		align-items: center;
	}

	.patientsInfo {
		padding: 20rpx;
	}

	.symptomContent {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		.symptom {
			height: 32rpx;
			padding: 6rpx 8rpx;
			color: #ffffff;
			font-size: 24rpx;
			border-radius: 10rpx;
			margin-right: 4rpx;
			background-color: #f9ae3d;
		}
	}

	.content {
		max-height: 800rpx;
		overflow-y: auto;

		.medicalCard {
			display: flex;

			.medicalAbstract {
				flex: 1;
				font-size: 26rpx;
				padding: 20rpx;

				.medicalAbstractContent {
					margin-left: 20rpx;
				}
			}

			.detailBtn {
				width: 160rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
