<template>
	<view class="main serverPages">
		<top-tabbar></top-tabbar>
		<view class="bgImage" v-if="userType == 1"></view>
		<tab-bar :userIdentity="userType" :selected="0"></tab-bar>
		<view class="functionModule" v-if="userType == 1">
			<view class="module bgImage" @click="doctorModule(0)">量表评估</view>
			<view class="module bgImage" @click="doctorModule(1)">就诊记录</view>
			<view class="module bgImage" @click="doctorModule(2)">咨询信息</view>
			<view class="module bgImage" @click="doctorModule(3)">打卡记录</view>
		</view>
		<view class="swiperBox" v-if="userType == 0">
			<view class="swiperContent">
				<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="imgList" :current="current"
					mode="round">
					<swiper class="swiper" circular :autoplay="true" :interval="2000"
						:duration="500" easing-function="easeInOutCubic" @change="change">
						<swiper-item v-for="item in imgList" :key="item.url" class="swiperItem">
							<image :src="item.url" mode="scaleToFill" style="width: 100%; height: 100%" class="swiperItemImg"></image>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
			<view class="swiperBg1">
				<!-- <uni-easyinput prefixIcon="search" v-model="value" placeholder="左侧图标" @iconClick="iconClick">
				</uni-easyinput> -->
			</view>
			<view class="swiperBg2"></view>
		</view>
		<!-- <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500"
				easing-function="easeInOutCubic">
				<swiper-item v-for="item in imgList" :key="item.url">
					<image :src="item.url" mode="scaleToFill" style="width: 100%; height: 100%"></image>
				</swiper-item>
			</swiper> -->
		<view class="patientsServer" v-if="userType == 0">
			<uni-section title="功能模块" titleFontSize="18px" type="line">
				<view class="gridBox">
					<uni-grid :column="3" :highlight="true" @change="changeGrid" :showBorder="false">
						<uni-grid-item v-for="(item,index) in swiperList" :index="index" :key="item.id" :height="100">
							<view class="grid-item-box" style="background-color: #fff;">
								<uni-icons custom-prefix="iconfont" :type="item.icon" size="30" />
								<text class="text">{{item.text}}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</uni-section>
			<uni-section title="健康知识" titleFontSize="18px" type="line">
				<!-- <template v-slot:right>
					<view class="" @click="moreNews()">
						更多新闻 >
					</view>
				</template> -->
				<scroll-view scroll-top="0" scroll-y="true" class="scroll-Y">
					<uni-list>
						<uni-list-item :clickable="true" @click="newsDetails(item.id)" v-for="item in newsList"
							:key="item.id">
							<template v-slot:body>
								<view class="slot-box">
									<view class="slot-box-title">{{item.title}}</view>
									<view class="slot-box-content">
										<view class="slot-box-content-name">{{item.name}}</view>
										<view class="slot-box-content-time">{{item.time}}</view>
									</view>
								</view>
							</template>
							<template v-slot:footer>
								<image class="slot-image" :src="item.imgSrc" mode="scaleToFill"
									style="width: 120px; height: 80px;"></image>
							</template>
						</uni-list-item>
					</uni-list>
				</scroll-view>
			</uni-section>
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	import {
		mapState
	} from "vuex"
	import tabBar from "@/components/tab-bar/tab-bar.vue"
	import topTabbar from '@/components/topTabbar/topTabbar.vue'
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		mixins: [mixins],
		components: {
			tabBar,
			topTabbar,
			carousel
		},
		data() {
			return {
				current: 0,
				swiperDotIndex: 0,
				imgList: [{
					url: 'https://s1.ax1x.com/2022/11/07/xv9q0g.jpg',
					id: 1
				}, {
					url: 'https://s1.ax1x.com/2022/11/07/xv9L7Q.jpg',
					id: 2
				}, {
					url: 'https://s1.ax1x.com/2022/11/07/xv9jts.png',
					id: 3
				}, {
					url: 'https://s1.ax1x.com/2022/11/07/xv9Xkj.png',
					id: 4
				}, {
					url: 'https://s1.ax1x.com/2022/11/07/xv9bnS.png',
					id: 5
				}],
				newsList: [{
					id: 1,
					title: '原发性骨质疏松症诊疗指南(2017)',
					name: '中华医学会',
					time: '2022-01-18',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 2,
					title: '苏州市老年人肌少症的相关因素',
					name: '中华骨质疏松和骨矿盐疾病杂志 ',
					time: '2020-01-06',
					imgSrc: 'https://s1.ax1x.com/2022/11/23/z8J7wQ.jpg'
				}, {
					id: 3,
					title: '判断骨骼强度的4种方法，哪种你最常用？',
					name: '《骨科学》',
					time: '2021-03-04',
					imgSrc: 'https://s1.ax1x.com/2022/11/23/z8JHoj.jpg'
				}, {
					id: 4,
					title: '新发现，负载干细胞的可注射多孔微球促进骨质疏松症的骨重建',
					name: '上海交通大学医学院附属瑞金医院',
					time: '2020-03-18',
					imgSrc: 'https://s1.ax1x.com/2022/11/23/z8J4Qf.jpg'
				}, {
					id: 5,
					title: '第二届北医三院骨质疏松论坛成功召开',
					name: '骨科在线',
					time: '2019-06-23',
					imgSrc: 'https://s1.ax1x.com/2022/11/23/z8JTeg.jpg'
				}, {
					id: 6,
					title: '新疆自治区人民医院老年骨质疏松骨折诊治中心成立',
					name: '新疆自治区人民医院',
					time: '2015-12-23',
					imgSrc: 'https://s1.ax1x.com/2022/11/23/z8J5y8.jpg'
				}, {
					id: 7,
					title: '优化管理癌症患者骨骼健康',
					name: '《Curr Osteoporos Rep》',
					time: '2014-05-14',
					imgSrc: 'https://s1.ax1x.com/2022/11/23/z8JIOS.jpg'
				}],
				swiperList: [{
						id: 1,
						text: '自我评价',
						icon: 'icon-jilu',
						url: '/pages/serverPages/selfAssessment/selectScales/selectScales'
					},
					// {
					// 	id: 2,
					// 	text: '评价记录',
					// 	icon: 'icon-dingqipinggu',
					// 	url: '/pages/serverPages/evaluationRecords/evaluationRecords'
					// },
					{
						id: 2,
						text: '在线咨询',
						icon: 'icon-duanxin1',
						url: '/pages/serverPages/onlineConsulting/onlineConsulting'
					},
					{
						id: 3,
						text: '可选服务',
						icon: 'icon-jiaoyu',
						url: '/pages/serverPages/healthEducation/healthEducation'
					},
					// {
					// 	id: 5,
					// 	text: '病症咨询',
					// 	icon: 'icon-quyuzhuanzhen'
					// },
					// {
					// 	id: 6,
					// 	text: '处方查看',
					// 	icon: 'icon-jilu'
					// },
					// {
					// 	id: 7,
					// 	text: '与医互动',
					// 	icon: 'icon-duanxin1'
					// },
					// {
					// 	id: 8,
					// 	text: '我的健康',
					// 	icon: 'icon-tuijianfuwu'
					// }
				]
			}
		},
		computed: {
			...mapState(['userName', 'userType'])
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			selectedBanner(item, index) {
				console.log('🥒', item, index)
			},
			newsDetails() {},
			doctorModule(e) {
				let url = ''
				switch (e) {
					case 0:
						url = '/pages/serverPages/assessScale/assessScale'
						break;
					case 1:
						url = '/pages/serverPages/medicalRecords/medicalRecords'
						break;
					case 2:
						url = '/pages/serverPages/counseleMessage/counseleMessage'
						break;
					case 3:
						url = '/pages/serverPages/clockInRecord/clockInRecord'
						break;
				}
				this.navigateTo(url)
			},
			changeGrid(e) {
				let {
					index
				} = e.detail
				this.navigateTo(this.swiperList[index].url)
			},
			moreNews() {
				// this.navigateTo('/pages/serverPages/newList/newList')
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-section-header__slot-right {
		color: #9e9e9e;
	}

	/deep/.uni-section {
		box-shadow: 2px 2px 2px 2px #cecece;
	}

	/deep/.uni-easyinput {
		border-radius: 50px;
		overflow: hidden;
	}

	.swiperItem {
		padding: 20px;
		box-sizing: border-box;

		.swiperItemImg {
			border-radius: 30px;
		}
	}


	.swiperBox {
		width: 100%;
		position: relative;
		background-color: #edf7ff;

		.swiperContent {
			width: 100%;
			position: absolute;
			z-index: 999;


			.swiper {
				height: 200px;
			}
		}

		.swiperBg1 {
			background: linear-gradient(180deg, #1a9def, #75c4f5);
			height: 100px;
			padding: 10px 20px;
			border-radius: 0 0 30px 30px;
		}

		.swiperBg2 {
			height: 80px;
			background-color: #edf7ff;
		}
	}


	.bgImage {
		width: 100%;
		height: 100%;
		background: url('https://s1.ax1x.com/2022/11/10/zp1nAg.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.patientsServer {
		padding: 0px 20px 10px;
		background-color: #edf7ff;
	}

	.functionModule {
		padding: 20px;
		display: flex;
		align-items: center;
		flex-direction: column;

		.module {
			width: 70%;
			height: 60px;
			margin: 20px 0;
			color: #ffffff;
			display: flex;
			font-size: 20px;
			font-weight: 600;
			justify-content: center;
			align-items: center;
			box-shadow: 5px 3px 10px 0px #1a9def;
		}
	}

	.gridBox {
		border-top: 0.5px solid #e1e1e1;
		margin-bottom: 10px;

		.grid-item-box {
			flex: 1;
			// position: relative;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;

			/deep/.uni-icons {
				padding: 10px;
				border-radius: 50%;
				color: #ffffff !important;
				background-image: linear-gradient(to right, #81c8f3, #237ef9);
			}

		}
	}

	.slot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		margin-right: 10px;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		.slot-box-title {
			width: 100%;
			text-align: left;
		}

		.slot-box-content {
			width: 100%;
			font-size: 12px;
			color: #9e9e9e;
			display: flex;

			.slot-box-content-name {
				flex: 1;
			}

			.slot-box-content-time {
				width: 80px;
				text-align: right;
			}
		}
	}

	.scroll-Y {
		height: calc(100vh - 510px);
		/* #ifdef MP */
		height: calc(100vh - 550px - env(safe-area-inset-bottom))
			/* #endif */
	}

	.slot-image {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		margin-right: 10px;
		width: 120px;
		height: 80px
	}
</style>
