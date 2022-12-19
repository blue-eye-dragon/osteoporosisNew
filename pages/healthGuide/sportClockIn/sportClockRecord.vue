<template>
	<view>
		<uni-calendar :insert="true" :lunar="true" :selected="selectedCalendar" :start-date="'2000-3-2'"
			:end-date="'2060-5-20'" @change="change" />
		<view class="sportContent" v-if="clockIned">
			<view class="uni-title uni-common-mt serverListTitle">有氧运动</view>
			<view>
				<uni-data-checkbox multiple v-model="sportContent.aerobicExercise" :localdata="aerobicExercise">
				</uni-data-checkbox>
			</view>
			<view class="uni-title uni-common-mt serverListTitle">无氧运动</view>
			<view>
				<uni-data-checkbox multiple v-model="sportContent.anaerobicExercise" :localdata="anaerobicExercise">
				</uni-data-checkbox>
			</view>
			<view class="uni-title uni-common-mt serverListTitle">柔韧度训练</view>
			<view>
				<uni-data-checkbox multiple v-model="sportContent.flexibilityTraining" :localdata="flexibilityTraining">
				</uni-data-checkbox>
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
				clockIned: false,
				aerobicExercise: [{
						text: '慢走',
						value: '慢走',
						disable: true
					},
					{
						text: '慢跑',
						value: '慢跑',
						disable: true
					},
					{
						text: '游泳',
						value: '游泳',
						disable: true
					},
					{
						text: '跳绳',
						value: '跳绳',
						disable: true
					}
				],
				anaerobicExercise: [{
					text: '哑铃',
					value: '哑铃',
					disable: true
				}, {
					text: '杠铃',
					value: '杠铃',
					disable: true
				}, {
					text: '引体向上',
					value: '引体向上',
					disable: true
				}],
				flexibilityTraining: [{
						text: '瑜伽',
						value: '瑜伽',
						disable: true
					},
					{
						text: '伸展运动',
						value: '伸展运动',
						disable: true
					}
				],
				sportContent: {
					aerobicExercise: ['慢走', '慢跑', '跳绳'],
					anaerobicExercise: ['哑铃', '引体向上'],
					flexibilityTraining: ['伸展运动'],
				},
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
	.u-checkbox {
		margin-right: 20px;
	}

	.sportContent {
		padding: 10px 20px;
		background-color: #ffffff;

		.serverListTitle {
			padding: 10px 0;
		}
	}
</style>
