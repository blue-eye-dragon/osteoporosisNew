<template>
	<view class="onlineConsulting">
		<view class="searchInput">
			<view class="searchInputContent">
				<uni-easyinput suffixIcon="search" v-model="chatSearch" placeholder="请输入要搜索的内容" @iconClick="iconClick">
				</uni-easyinput>
			</view>
			<button size="mini" type="basics">搜索</button>
		</view>
		<scroll-view scroll-top="0" scroll-y="true" class="scroll-Y">
			<uni-list :border="true" class="chatlistBox">
				<uni-list-chat v-for="item in chatHistory" :index="item.id" :key="item.id" :title="item.title"
					:avatar="item.avatar" :note="item.note" :time="item.time" :badge-text="item.infoNum"
					:clickable="true" @click="chatListClick(item.id)"></uni-list-chat>
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
				chatSearch: '',
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
			iconClick() {},
			chatListClick() {
				this.navigateTo('/pages/HM-chat/HM-chat')
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-list-chat__container {
		padding: 10px 0;
	}
	.onlineConsulting {
		padding: 0 20rpx 50rpx;

		.searchInput {
			padding: 20rpx 0;
			display: flex;
			align-items: center;

			.searchInputContent {
				flex: 1;
				margin-right: 20rpx;
			}
		}
	}

	.scroll-Y {
		height: calc(100vh - 130px);
		overflow-y: auto;
		/* #ifdef MP */
		height: calc(100vh - 57px - env(safe-area-inset-bottom));

		/* #endif */
	}
</style>
