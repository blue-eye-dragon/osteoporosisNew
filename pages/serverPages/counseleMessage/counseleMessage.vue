<template>
	<view class="secendMain">
		<view class="searchInput">
			<view class="searchInputContent">
				<uni-easyinput prefixIcon="search" v-model="counselModule" placeholder="请输入要查询的信息">
				</uni-easyinput>
			</view>
			<button size="mini" type="primary">搜索</button>
		</view>
		<!-- 	<swiper class="swiper" :indicator-dots="false">
			<swiper-item v-for="(swiperItem,index) in info" :key="index" :index="index">
				<view class="swiper-item">
					<uni-grid :column="4" :highlight="true" @change="changeGrid" :showBorder="false">
						<uni-grid-item v-for="(item) in swiperItem" :index="item.id" :key="item.id">
							<view class="grid-item-box" style="background-color: #fff;">
								<uni-icons custom-prefix="iconfont" :type="item.icon" size="30" />
								<text class="text" :style="{'color':'#1a9def'}">{{item.text}}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</swiper-item>
		</swiper> -->
		<uni-section title="聊天记录">
			<scroll-view scroll-top="0" scroll-y="true" class="scroll-Y">
				<uni-list :border="true" class="chatlistBox">
					<uni-list-chat v-for="item in chatHistory" :index="item.id" :key="item.id" :title="item.title"
						:avatar="item.avatar" :note="item.note" :time="item.time" :badge-text="item.infoNum"
						:clickable="true" @click="chatListClick(item.id)"></uni-list-chat>
				</uni-list>
			</scroll-view>
		</uni-section>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				counselModule: '',
				current: 0,
				swiperDotIndex: 0,
				dotsStyles: {
					backgroundColor: 'rgba(190, 236, 255, 0.3 )',
					border: '1px rgba(149, 223, 249, 0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(190, 236, 255, 0.9 )',
					selectedBorder: '1px rgba(149, 223, 249,0.9) solid'
				},
				info: [
					[{
							id: 1,
							text: '运动咨询',
							icon: 'icon-yundong1'
						},
						{
							id: 2,
							text: '营养咨询',
							icon: 'icon-yinshijihua'
						},
						{
							id: 3,
							text: '药物咨询',
							icon: 'icon-yaowuqiangdu'
						},
						{
							id: 4,
							text: '心理指导',
							icon: 'icon-zhuanyeceping'
						},
						{
							id: 5,
							text: '病症咨询',
							icon: 'icon-quyuzhuanzhen'
						},
						{
							id: 6,
							text: '处方查看',
							icon: 'icon-jilu'
						},
						{
							id: 7,
							text: '与医互动',
							icon: 'icon-duanxin1'
						},
						{
							id: 8,
							text: '我的健康',
							icon: 'icon-tuijianfuwu'
						},
					],
					[{
							id: 9,
							text: '我的药物',
							icon: 'icon-jibenxinxi'
						},
						{
							id: 10,
							text: '购买记录',
							icon: 'icon-minzhengpinggu'
						},
						{
							id: 11,
							text: '健康规划',
							icon: 'icon-zhidaoshu-'
						},
					]
				],
				chatHistory: [{
						id: 0,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 1,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 2,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 3,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 4,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 5,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 6,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 7,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 8,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 9,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					},
					{
						id: 10,
						title: '李川川',
						avatar: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
						note: '您收到一条新的消息',
						time: '2020-02-02 20:20',
						infoNum: '12'
					}
				]

			}
		},
		methods: {
			changeSwiper(e) {
				this.current = e.detail.current
			},
			changeGrid(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++

				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
			chatListClick() {
				this.navigateTo('/pages/HM-chat/HM-chat')
			}
		}
	}
</script>

<style lang="less" scoped>
	.searchInput {
		padding: 10px;
		display: flex;

		.searchInputContent {
			flex: 1;
		}
	}


	.swiper {
		height: 200px;
		background-color: #ffffff;
	}


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


	.scroll-Y {
		height: calc(100vh - 150px);
		/* #ifdef MP */
		height: calc(100vh - 200px)
			/* #endif */
	}

	.chat-custom-right {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.chat-custom-text {
		font-size: 12px;
		color: #999;
	}
</style>
