<template>
	<view>
		<!--#ifdef MP-->
		<uni-nav-bar background-color="#1a9def" :border="false"></uni-nav-bar>
		<!--#endif-->
		<view class="newSearch">
			<uni-icons type="back" size="20" color="#ffffff" @click="back"></uni-icons>
			<view class="newSearchTitle">新闻头条</view>
			<view class="newSearchInput">
				<uni-easyinput suffixIcon="search" v-model="searchValue" placeholder="搜你想搜的"
					placeholderStyle="font-size:16px" @iconClick="iconClick">
				</uni-easyinput>
			</view>
		</view>
		<scroll-view class="scroll-view_H" scroll-x="true">
			<view :class="[activeName == item ? 'activeCls' : '','scroll-view-item_H']" v-for="item in newsTitle"
				:key="item" @click="activeName = item">{{item}}</view>
		</scroll-view>
		<scroll-view scroll-top="0" scroll-y="true" class="scroll-Y">
			<uni-list>
				<uni-list-item :clickable="true" @click="newsDetails(item.id)" v-for="item in newsList" :key="item.id">
					<template v-slot:body>
						<view class="slot-box">
							<view class="slot-box-title">{{item.title}}</view>
							<view class="slot-box-content">
								<view class="">{{item.name}}</view>
								<view class="">{{item.time}}</view>
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
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				searchValue: '',
				newsTitle: ['要闻', '视频', '北京', '娱乐', '独家', '社会', '图片'],
				activeName: '要闻',
				newsList: [{
					id: 1,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 2,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 3,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 4,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 5,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 6,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 7,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 8,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 9,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}, {
					id: 10,
					title: '2022中国互联网年度风云榜（附榜单）',
					name: '华夏金融订阅号',
					time: '2022-04-22',
					imgSrc: '/static/img/q.jpg'
				}]
			}
		},
		methods: {
			iconClick() {
				console.log(123)
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="less" scoped>
	.newSearch {
		display: flex;
		align-items: center;
		background-color: #1a9def;
		height: 50px;
		justify-content: space-evenly;

		.back {
			color: #ffffff;
			font-size: 16px;
		}

		.newSearchTitle {
			font-size: 26px;
			color: #ffffff;
			font-family: cursive;
			font-weight: 600;
		}

		.newSearchInput {
			width: 50%;
		}
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		border-bottom: 1px solid #f1f3f4;
	}

	.scroll-view-item_H {
		display: inline-block;
		font-size: 18px;
		width: 80px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}

	.activeCls {
		color: #1a9def;
		font-size: 20px;
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

		.slot-box-title {}

		.slot-box-content {
			width: 100%;
			font-size: 12px;
			color: #9e9e9e;
			display: flex;
			justify-content: space-between;
		}
	}

	.scroll-Y {
		height: calc(100vh - 90px);
		/* #ifdef MP */
		height: calc(100vh - 180px)
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
