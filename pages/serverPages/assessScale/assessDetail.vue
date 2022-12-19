<template>
	<view class="assessDetail">
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button"
			activeColor="#1a9def"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<uni-section title="老年肌少症问卷"
					subTitle="每个条目取值范围是0-2分,问卷取值范围是0-10分。当得分为0-3分时,认为受试者目前不存在肌少症；当得分≥4分时,认为受试者患有肌少症,且得分越高程度越严重"
					type="line" padding>
					<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
					<uni-forms label-position="top" :modelValue="sarcopeniaForm" ref="form1" labelWidth="auto">
						<uni-forms-item label="1、您提起或者搬运10斤物品有多大困难" required>
							<uni-data-checkbox v-model="sarcopeniaForm.handling" :localdata="selectedList" />
						</uni-forms-item>
						<uni-forms-item label="2、您步行穿过一个房间有多大困难" required>
							<uni-data-checkbox v-model="sarcopeniaForm.walking" :localdata="selectedList" />
						</uni-forms-item>
						<uni-forms-item label="3、您从椅子或床边站起有多大困难" required>
							<uni-data-checkbox v-model="sarcopeniaForm.standUp" :localdata="selectedList" />
						</uni-forms-item>
						<uni-forms-item label="4、您上10个台阶有多大困难" required>
							<uni-data-checkbox v-model="sarcopeniaForm.onSteps" :localdata="selectedList" />
						</uni-forms-item>
						<uni-forms-item label="5、您在过去的一年里跌倒了多少次" required>
							<uni-data-checkbox v-model="sarcopeniaForm.fallNumber" :localdata="fallNumber" />
						</uni-forms-item>
					</uni-forms>
					<button type="primary">计算</button>
					<view class="score" v-if="sarcopeniaScore">
						得分:{{sarcopeniaScore}}
					</view>
				</uni-section>
			</view>
			<view v-show="current === 1">
				<uni-section title="迷你营养评估量表" type="line" padding>
					<uni-forms label-position="top" :modelValue="nutritionForm" ref="form2" labelWidth="auto">
						<uni-forms-item label="1、过去三个月內有没有因为食欲不振、消化问题、咀嚼或吞咽困难而减少食量" required>
							<uni-data-checkbox v-model="nutritionForm.form1" :localdata="nutritionList1" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="2、过去三个月內体重下降的情况" required>
							<uni-data-checkbox v-model="nutritionForm.form2" :localdata="nutritionList2" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="3、活动能力" required>
							<uni-data-checkbox v-model="nutritionForm.form3" :localdata="nutritionList3" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="4、过去三个月內有没有受到心理创伤或患上急性疾病" required>
							<uni-data-checkbox v-model="nutritionForm.form4" :localdata="nutritionList4" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="5、精神心理状况" required>
							<uni-data-checkbox v-model="nutritionForm.form5" :localdata="nutritionList5" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="6、身体质量指数(BMI)是（   ） (kg/m2)" required>
							<uni-data-checkbox v-model="nutritionForm.form6" :localdata="nutritionList6" mode="list"
								icon="right" />
						</uni-forms-item>
					</uni-forms>
					<button type="primary">计算</button>
					<view class="score" v-if="nutritionScore">
						得分:{{nutritionScore}}
					</view>
				</uni-section>
			</view>
			<view v-show="current === 2">
				<uni-section title="日常生活能力量表" subTitle="总分≤26分为基本正常、>26分提示有不同程度的功能下降，若两项及以上≥3分提示存在明显功能障碍，最高分为56分"
					type="line" padding>
					<uni-forms label-position="top" :modelValue="viabilityForm" ref="form3" labelWidth="auto">
						<uni-forms-item label="1、使用公共车辆" required>
							<uni-data-checkbox v-model="viabilityForm.form1" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="2、行走" required>
							<uni-data-checkbox v-model="viabilityForm.form2" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="3、做饭菜" required>
							<uni-data-checkbox v-model="viabilityForm.form3" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="4、做家务" required>
							<uni-data-checkbox v-model="viabilityForm.form4" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="5、吃药" required>
							<uni-data-checkbox v-model="viabilityForm.form5" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="6、吃饭" required>
							<uni-data-checkbox v-model="viabilityForm.form6" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="7、穿衣" required>
							<uni-data-checkbox v-model="viabilityForm.form3" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="8、梳头、刷牙等" required>
							<uni-data-checkbox v-model="viabilityForm.form4" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="9、洗衣" required>
							<uni-data-checkbox v-model="viabilityForm.form5" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="10、洗澡" required>
							<uni-data-checkbox v-model="viabilityForm.form6" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="11、购物" required>
							<uni-data-checkbox v-model="viabilityForm.form3" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="12、定时上厕所" required>
							<uni-data-checkbox v-model="viabilityForm.form4" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="13、打电话" required>
							<uni-data-checkbox v-model="viabilityForm.form5" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
						<uni-forms-item label="14、处理自己钱财" required>
							<uni-data-checkbox v-model="viabilityForm.form6" :localdata="viabilityList" mode="list"
								icon="right" />
						</uni-forms-item>
					</uni-forms>
					<button type="primary">计算</button>
					<view class="score" v-if="viabilityScore">
						得分:{{viabilityScore}}
					</view>
				</uni-section>
			</view>

			<view v-show="current === 3">
				<uni-section title="危险因素测试" subTitle="国际骨质疏松症基金会（IOF）一分钟危险因素测试,一道题答“是”即为高危人群" type="line" padding>
					<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
					<uni-forms label-position="top" :modelValue="riskFactorsForm" ref="form4" labelWidth="auto">
						<uni-forms-item label="1、您的父母有骨质疏松病史或轻微跌倒后发生骨折的经历" required>
							<uni-data-checkbox v-model="riskFactorsForm.form1" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="2、您的父母是否有驼背" required>
							<uni-data-checkbox v-model="riskFactorsForm.form2" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="3、实际年龄超过40岁" required>
							<uni-data-checkbox v-model="riskFactorsForm.form3" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="4、您在成年后是否曾经因为轻微的碰撞就发生骨折" required>
							<uni-data-checkbox v-model="riskFactorsForm.form4" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="5、您过去1年有跌倒的经历吗？或者您因为身体虚弱而害怕跌倒" required>
							<uni-data-checkbox v-model="riskFactorsForm.form5" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="6、在您40岁后，身高是否比年轻时降低了超过3厘米" required>
							<uni-data-checkbox v-model="riskFactorsForm.form6" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="7、您的体重是否较低（体重指数<19kg/m2）" required>
							<uni-data-checkbox v-model="riskFactorsForm.form7" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="8、您是否曾连续3个月以上服用“可的松、强的松”等激素类药品" required>
							<uni-data-checkbox v-model="riskFactorsForm.form8" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="9、您是否有类风湿性关节炎病史" required>
							<uni-data-checkbox v-model="riskFactorsForm.form9" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="10、您是否有甲状腺功能亢进、甲状旁腺功能亢进、1型糖尿病、营养或胃肠道功能障碍（克罗恩病、腹部疾病）病史" required>
							<uni-data-checkbox v-model="riskFactorsForm.form10" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="11、（女士回答） 您是否在45岁以前就绝经了" required>
							<uni-data-checkbox v-model="riskFactorsForm.form11" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="12、（女士回答） 您是否曾经有过连续12个月以上没有月经？（绝经、怀孕、子宫切除除外）" required>
							<uni-data-checkbox v-model="riskFactorsForm.form12" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="13、（女士回答）50岁前，您是否做过卵巢切除，且没有接受激素替代治疗" required>
							<uni-data-checkbox v-model="riskFactorsForm.form13" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="14、（男士回答）您是否患有阳痿或缺乏性欲等雄激素缺乏的症状" required>
							<uni-data-checkbox v-model="riskFactorsForm.form14" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="15、您经常大量饮酒吗" required>
							<uni-data-checkbox v-model="riskFactorsForm.form15" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="16、您目前或曾经一段时间吸烟吗" required>
							<uni-data-checkbox v-model="riskFactorsForm.form16" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="17、您每天的体力活是否少于30分钟（家务、养花、走路、跑步）" required>
							<uni-data-checkbox v-model="riskFactorsForm.form17" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="18、您是否不喝牛奶或奶制品，或对奶制品过敏，且未补充钙剂" required>
							<uni-data-checkbox v-model="riskFactorsForm.form18" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="19、您每天的户外活动是否少于10分钟，且未补充维生素D" required>
							<uni-data-checkbox v-model="riskFactorsForm.form19" :localdata="whetherNotList" />
						</uni-forms-item>
					</uni-forms>
					<button type="primary">计算</button>
					<view class="score" v-if="riskFactorsScore">
						得分:{{riskFactorsScore}}
					</view>
				</uni-section>
			</view>
			<view v-show="current === 4">
				<uni-section title="骨质疏松自我筛查" subTitle="亚洲绝经后妇女骨质疏松自我筛查（OSTA）工具,计算方法是：OSTA 指数 =〔体质量（kg）- 年龄（岁）〕×0.2。"
					type="line" padding>
					<uni-forms :modelValue="OSTAForm" ref="form4" labelWidth="120px">
						<uni-forms-item label="体质量（kg）" required>
							<uni-easyinput v-model="OSTAForm.weight" :inputBorder="false" placeholder="请输入体质量"
								@iconClick="clickWeight"></uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="年龄（岁）" required>
							<uni-easyinput v-model="OSTAForm.age" :inputBorder="false" placeholder="请输入年龄"
								@iconClick="clickAge"></uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="OSTA 指数">
							<uni-easyinput v-model="OSTAForm.exponent" placeholder="请输入内容" @iconClick="onClick"
								disabled></uni-easyinput>
						</uni-forms-item>
					</uni-forms>
					<button type="primary">计算</button>
					<view class="score" v-if="OSTAScore">
						得分:{{OSTAScore}}
					</view>
				</uni-section>
			</view>
			<view v-show="current === 5">
				<uni-section title="骨折风险预测工具" subTitle="骨折风险采用 WHO 推荐的骨折风险预测工具（FRAX®）计算" type="line" padding>
					<uni-forms label-position="top" :modelValue="riskProfileForm" ref="form4" labelWidth="auto">
						<uni-forms-item label="1、年龄或出生日期（40-90年之间）" required>
							<view class="riskProfilAge">
								<uni-easyinput v-model="riskProfileForm.age" placeholder="请输入年龄"></uni-easyinput>
							</view>
							<uni-datetime-picker type="date" v-model="riskProfileForm.birthday" />
						</uni-forms-item>
						<uni-forms-item label="2、性别" required>
							<uni-data-checkbox v-model="riskProfileForm.sex" :localdata="sexs" />
						</uni-forms-item>
						<uni-forms-item label="3、体重 (kg)" required>
							<uni-easyinput v-model="riskProfileForm.age" placeholder="请输入体重"></uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="4、身高 (cm)" required>
							<uni-easyinput v-model="riskProfileForm.height" placeholder="请输入身高">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="5、既往骨折史" required>
							<uni-data-checkbox v-model="riskProfileForm.form5" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="6、父母髋骨骨折" required>
							<uni-data-checkbox v-model="riskProfileForm.form6" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="7、目前抽烟行为" required>
							<uni-data-checkbox v-model="riskProfileForm.form7" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="8、肾上腺皮质激素服用" required>
							<uni-data-checkbox v-model="riskProfileForm.form8" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="9、风湿性关节炎" required>
							<uni-data-checkbox v-model="riskProfileForm.form9" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="10、继发性骨质疏松症" required>
							<uni-data-checkbox v-model="riskProfileForm.form10" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="11、每日酒精摄取量达3个单位或以上" required>
							<uni-data-checkbox v-model="riskProfileForm.form11" :localdata="whetherNotList" />
						</uni-forms-item>
						<uni-forms-item label="12、骨密度 (BMD)" required>
							<uni-data-select v-model="riskProfileForm.BMDmodels" placeholder="选择BMD机型"
								:localdata="BMDmodelsList" @change="change"></uni-data-select>
							<uni-easyinput v-model="riskProfileForm.form12" placeholder="请输入身高">
							</uni-easyinput>
						</uni-forms-item>
					</uni-forms>
					<button type="primary">计算</button>
					<view class="score" v-if="riskProfileScore">
						得分:{{riskProfileScore}}
					</view>
				</uni-section>
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
				riskProfileScore: 89,
				items: ['问卷一', '问卷二', '问卷三', '问卷四', '问卷五', '问卷六'],
				sarcopeniaForm: {},
				sarcopeniaScore: '89',
				nutritionForm: {},
				nutritionScore: '',
				viabilityForm: {},
				viabilityScore: '',
				riskFactorsForm: {},
				riskFactorsScore: '',
				OSTAForm: {},
				OSTAScore: '',
				riskProfileForm: {},
				riskProfile: '',
				rules: [],
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				selectedList: [{
					text: '没有',
					value: 0
				}, {
					text: '有一些',
					value: 1
				}, {
					text: '很多或无法完成',
					value: 2
				}],
				fallNumber: [{
					text: '没有',
					value: 0
				}, {
					text: '1-3次',
					value: 1
				}, {
					text: '≥4次',
					value: 2
				}],
				nutritionList1: [{
					text: '食量严重减少',
					value: 0
				}, {
					text: '食量中度减少',
					value: 1
				}, {
					text: '食量没有改变',
					value: 2
				}],
				nutritionList2: [{
					text: '体重下降大于3公斤',
					value: 0
				}, {
					text: '不知道',
					value: 1
				}, {
					text: '体重下降1-3公斤',
					value: 2
				}, {
					text: '体重没有下降',
					value: 3
				}],
				nutritionList3: [{
					text: '需长期臥床或坐轮椅',
					value: 0
				}, {
					text: '可以下床或离开轮椅、但不能外出',
					value: 1
				}, {
					text: '可以外出',
					value: 2
				}],
				nutritionList4: [{
					text: '有',
					value: 0
				}, {
					text: '没有',
					value: 1
				}],
				nutritionList5: [{
					text: '严重痴呆或抑郁',
					value: 0
				}, {
					text: '轻度痴呆',
					value: 1
				}, {
					text: '没有精神心理问题',
					value: 2
				}],
				nutritionList6: [{
					text: '<19',
					value: 0
				}, {
					text: '19-21',
					value: 1
				}, {
					text: '21-23',
					value: 2
				}, {
					text: '>或=23',
					value: 3
				}],
				viabilityList: [{
						text: '自己独立完成（1分）',
						value: 0
					},
					{
						text: '有些困难（2分）',
						value: 1
					},
					{
						text: '需要帮助（3分）',
						value: 2
					},
					{
						text: '完全依赖他人（4分）',
						value: 3
					}
				],
				whetherNotList: [{
						text: '否',
						value: 0,
					},
					{
						text: '是',
						value: 1,
					}
				],
				BMDmodelsList: [{
						value: 0,
						text: "GE-Lunar"
					},
					{
						value: 1,
						text: "Hologic"
					},
					{
						value: 2,
						text: "Norland"
					},
					{
						value: 3,
						text: "T指数"
					},
					{
						value: 4,
						text: "DMS/Medilink"
					},
					{
						value: 5,
						text: "Mindways QCT"
					},
				]
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			clickWeight() {},
			clickAge() {},
			change() {}
		}
	}
</script>

<style lang="less" scoped>
	.assessDetail {
		padding: 20px 10px;
	}

	.uni-forms {
		max-height: 500px;
		overflow-y: auto;
	}

	.riskProfilAge {
		margin-bottom: 10px;
	}
	.score {
		display: flex;
		height: 80px;
		justify-content: center;
		align-items: center;
		font-size: 25px;
	}

	/deep/.uni-section .uni-section-header__decoration.line {
		position: absolute;
		top: 16px;
	}

	/deep/.uni-section .uni-section-header__content {
		margin-left: 10px;
	}

	/deep/.uni-forms-item__label {
		align-items: flex-start;
	}

	/deep/.uni-forms-item.is-direction-top .uni-forms-item__label {
		padding: 0;
	}
</style>
