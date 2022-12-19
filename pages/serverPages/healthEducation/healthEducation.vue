<template>
	<view class="healthEducation">

		<uni-list>
			<uni-list-item title="运动指导" note="通过运动缓解症状的持续发展" showArrow clickable @click="pushItem('sport')">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color0" v-html="'&#xe6d1;'"></i>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="营养指导" note="注意饮食搭配,促进骨形成" showArrow clickable @click="pushItem('nutrition')">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color1" v-html="'&#xe607;'"></i>
					</view>
				</template>
			</uni-list-item>
			<uni-list-item title="药物咨询" note="咨询医生，进行准确的药物治疗" showArrow clickable @click="pushItem('drug')">
				<template v-slot:header>
					<view class="slot-box">
						<i class="iconfont serverListIcon color2" v-html="'&#xe700;'"></i>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {

			}
		},
		methods: {
			pushItem(e) {
				let url = ''
				switch (e) {
					case 'sport':
						url = '/pages/serverPages/healthEducation/sportCoaching/sportCoaching'
						break;
					case 'nutrition':
						url = '/pages/serverPages/healthEducation/nutritionGuide/nutritionGuide'
						break;
					case 'drug':
						url = '/pages/serverPages/healthEducation/drugCounseling/drugCounseling'
						break;
				}
				this.navigateTo(url)
			}
		}
	}
</script>

<style lang="less" scoped>
	.healthEducation {
		.slot-box {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
		}

		.serverListIcon {
			font-size: 28px;
			padding: 10px;
			border-radius: 50%;
			color: #ffffff;
			margin-right: 20px;
		}

		.color0 {
			background-color: #27b6ff;
		}

		.color1 {
			background-color: #02e49c;
		}

		.color2 {
			background-color: #e273ff;
		}
	}
</style>
