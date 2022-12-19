<template>
	<view>
		<uni-calendar :insert="true" :lunar="true" :selected="selectedCalendar" :start-date="'2000-3-2'"
			:end-date="'2060-5-20'" @change="change" />
		<view class="nutritionContent" v-if="clockIned">
			<view class="serverListTitle">早餐</view>
			<uni-easyinput type="textarea" disabled v-model="breakfast" placeholder="请输入内容" />
			<view class="serverListTitle">午餐</view>
			<uni-easyinput type="textarea" disabled v-model="lunch" placeholder="请输入内容" />
			<view class="serverListTitle">晚餐</view>
			<uni-easyinput type="textarea" disabled v-model="dinner" placeholder="请输入内容" />
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				clockIned: false,
				breakfast: '',
				lunch: '',
				dinner: '',
				selectedCalendar: [{
						date: '2022-10-1',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-2',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-3',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-4',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-15',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-6',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-7',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-8',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-9',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-10',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-11',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-12',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-13',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-14',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-15',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-16',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-17',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: '2022-10-18',
						info: '已打卡',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					}
				]
			}
		},
		methods: {
			change(e) {
				this.clockIned = e.extraInfo.data ? true : false
			}
		}
	}
</script>

<style lang="less" scoped>
	.nutritionContent {
		padding: 10px 20px;
		background-color: #ffffff;

		.serverListTitle {
			padding: 5px 0;
		}
	}
</style>
