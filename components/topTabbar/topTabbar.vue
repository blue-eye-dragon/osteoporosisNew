<template>
	<view class="topTabbar">
		<!-- app端 topbar -->
		<!--#ifndef MP-->
		<uni-nav-bar color="#ffffff" background-color="#1a9def" @clickLeft="personInfo" @clickRight="scan"
			:border="false" :rightWidth="30">
			<block slot="left">
				<view class="leftIcon">
					<image style="width: 35px; height: 35px; border-radius: 50%;"
						src="https://s1.ax1x.com/2022/11/09/zS361I.jpg" mode="scaleToFill"></image>
				</view>
			</block>
			<view class="input-view">
				<uni-icons style="line-height: 30px;" type="search" size="22" color="#666666" />
				<input v-model="searchValue" confirm-type="search" class="nav-bar-input" type="text"
					placeholder="输入搜索关键词" @confirm="confirm">
			</view>
			<block slot="right">
				<uni-icons type="chat" color="#ffffff" size="30" />
				<uni-badge type="error" size="18" :text="30" absolute="rightTop" :offset="[10,-10]"></uni-badge>
			</block>
		</uni-nav-bar>
		<!--#endif-->

		<!-- 微信端 topbar -->
		<!--#ifdef MP-->
		<uni-nav-bar background-color="#1a9def" :border="false"></uni-nav-bar>
		<uni-nav-bar color="#ffffff" background-color="#1a9def" @clickLeft="personInfo" :border="false" :leftWidth="35">
			<block slot="left">
				<view class="leftIcon">
					<image style="width: 35px; height: 35px; border-radius: 50%;"
						src="https://s1.ax1x.com/2022/11/24/zJpAMT.png" mode="scaleToFill"></image>
				</view>
			</block>
			<view class="title-view">
				肌少-骨质疏松服务
			</view>
		</uni-nav-bar>
		<!--#endif-->
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	import mixins from "@/mixins/mixins.js"
	export default {
		name: "topTabbar",
		mixins: [mixins],
		computed: {
			...mapState(['userName', 'userType'])
		},
		data() {
			return {
				searchValue: '',
				show: false,
				classes: '1-2',
				dataTree: [{
						text: "中国",
						value: "1-0",
						children: [{
								text: "深圳",
								value: "1-1"
							},
							{
								text: "厦门",
								value: "1-2"
							},
							{
								text: "上海",
								value: "1-3"
							},
							{
								text: "拉萨",
								value: "1-4"
							}
						]
					},
					{
						text: "美国",
						value: "2-0",
						children: [{
								text: "得州",
								value: "2-1"
							},
							{
								text: "华盛顿",
								value: "2-2"
							},
							{
								text: "纽约",
								value: "2-3"
							},
							{
								text: "阿拉斯加",
								value: "2-4"
							}
						]
					},
					{
						text: "三年级",
						value: "3-0",
						disable: true
					}
				]
			};
		},
		methods: {
			onnodeclick(e) {
				console.log(e);
			},
			onpopupopened(e) {
				console.log('popupopened');
			},
			onpopupclosed(e) {
				console.log('popupclosed');
			},
			onchange(e) {
				console.log('onchange:', e);
			},
			personInfo() {
				this.navigateTo('/pages/personInfo/personalData/personalData')
			},
			scan() {
				let url = this.userType == 0 ? '/pages/serverPages/onlineConsulting/onlineConsulting' :
					'/pages/serverPages/counseleMessage/counseleMessage'
				this.navigateTo(url)
			},
			confirm() {
				console.log(this.searchValue)
				uni.showToast({
					title: '搜索'
				})
				this.searchValue = ''
			},
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					// picker为选择器this实例，变化第二列对应的选项
					picker.setColumnValues(1, this.columnData[index])
				}
			},
			// 回调参数为包含columnIndex、value、values
			confirm(e) {
				console.log('confirm', e)
				this.show = false
			},
			close() {
				this.show = false
			},
			cancel() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.leftIcon {
		display: flex;
		align-items: center;
	}

	.input-view {
		display: flex;
		flex-direction: row;
		flex: 1;
		background-color: #ffffff;
		height: 30px;
		border-radius: 15px;
		padding: 0 15px;
		flex-wrap: nowrap;
		margin: 7px 0;
		line-height: 30px;
	}
	
	.title-view {
		line-height: 40px;
		font-size: 18px;
		text-align: center;
	}

	.nav-bar-input {
		color: black;
		height: 30px;
		line-height: 30px;
		width: 345rpx;
		/* #ifdef MP */
		width: 200rpx;
		/* #endif */
		padding: 0 5px;
		font-size: 14px;
		background-color: #ffffff;
	}
</style>
