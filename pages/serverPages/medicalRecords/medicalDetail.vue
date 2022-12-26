<template>
	<view>
		<uni-collapse accordion v-model="accordionVal" @change="change">
			<uni-collapse-item title="检测结果">
				<view class="content">
					<uni-forms label-position="left" :modelValue="detectionModel" ref="form" labelWidth="160rpx">
						<uni-forms-item label="T值:" borderBottom>
							<uni-easyinput v-model="detectionModel.Tvalue" :inputBorder="false" disabled
								 :styles="{'disableColor':'#ffffff'}">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="骨量丢失:" borderBottom>
							<uni-easyinput v-model="detectionModel.boneLoss" :inputBorder="false" disabled
								 :styles="{'disableColor':'#ffffff'}">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="骨骼状况:" borderBottom>
							<uni-easyinput v-model="detectionModel.boneStatus" :inputBorder="false" disabled
								 :styles="{'disableColor':'#ffffff'}"></uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="当前症状:" borderBottom>
							<uni-easyinput type="textarea" v-model="detectionModel.symptom" autoHeight :inputBorder="false" disabled
								 :styles="{'disableColor':'#ffffff'}"></uni-easyinput>
						</uni-forms-item>
					</uni-forms>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="处方信息">
				<view class="content">
					<view class="ethicals" v-for="item in ethicals" :key="item.id">
						<view class="ethicalsName">
							药品名称：{{item.ethicalsName}}
						</view>
						<view class="ethicalsSpecifications">
							药品规格：{{item.ethicalsSpecifications}}
						</view>
						<view class="ethicalsFrequency">
							药品用量：{{item.ethicalsFrequency}}
						</view>
						<view class="ethicalsDosage">
							服用方法：{{item.ethicalsDosage}}
						</view>
					</view>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="测评报告">
				<view class="content">
					<uni-section title="测评报告" type="line" padding="0 20rpx">
						心里测评的目的是为了给个体的心里健康水平提供客观、量化的信息，但是测评结果不能作为唯一评判的依据，需结合近期生活中发生的应激事件、个人的成长背景进行综合考量
					</uni-section>
					<uni-section title="测评结果" type="line" padding="0 20rpx">
						<view class="psychologicalRes">
							<view class="psychologicalResTit">
								<view class="level">测评等级： A</view>
								<view class="explain">
									<uni-icons type="gear-filled" color="#2979ff" size="18"></uni-icons>
									<view class="explainText">等级说明</view>
								</view>
							</view>
							<uni-rate active-color="#FA3534" color="#b2b2b2" margin="40rpx" :max="count" readonly
								v-model="value"></uni-rate>
						</view>
					</uni-section>
					<uni-section title="结果解析" type="line" padding="0 20rpx">
						<view class="">
							患者情绪控制远高于一般人，在生活中情绪状态稳定，能够很好的控制自身的情绪变化，承受较大的压力。
						</view>
					</uni-section>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {
				count: 5,
				value: 4,
				accordionVal: '0',
				detectionModel: {
					Tvalue: '-1.75',
					boneLoss: '10%',
					boneStatus: '骨密度轻度降低',
					symptom: '腰酸膝痛，劳动容易腰背痛，小腿抽筋，上下楼梯费劲，关节时常有摩擦感、响声'
				},
				ethicals: [{
						id: 1,
						ethicalsName: '	碳酸钙D3片',
						ethicalsSpecifications: '30片*1瓶',
						ethicalsFrequency: '一天一片',
						ethicalsDosage: '口服'
					},
					{
						id: 2,
						ethicalsName: '骨化三醇胶片',
						ethicalsSpecifications: '0.25ug*10*1盒',
						ethicalsFrequency: '一天一粒',
						ethicalsDosage: '口服'
					},
					{
						id: 3,
						ethicalsName: '阿仑膦酸钠片',
						ethicalsSpecifications: '70mg*1片*1盒',
						ethicalsFrequency: '一周一片',
						ethicalsDosage: '口服'
					}
				]
			}
		},
		methods: {
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="less" scoped>
	/deep/.uni-forms-item {
		margin-bottom: 20rpx;
	}
	.content {
		padding: 20rpx;
		background-color: #ffffff;

		.ethicals {
			padding: 20rpx 40rpx;
			margin-bottom: 20rpx;
			background-color: #ffffff;
			border-radius: 40rpx;
			font-size: 32rpx;
			box-shadow: 3rpx 3rpx 5rpx 2rpx #c1c1c1;
		}

		.psychologicalRes {
			height: 160rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;

			.psychologicalResTit {
				display: flex;
				justify-content: space-between;
				width: 100%;

				.level {
					padding: 2rpx 10rpx;
					border-radius: 10rpx;
					background-color: #2da2ff;
					color: #ffffff;
				}

				.explain {
					display: flex;
					align-items: center;

					.explainText {
						margin-left: 5rpx;
					}
				}
			}
		}
	}
</style>
