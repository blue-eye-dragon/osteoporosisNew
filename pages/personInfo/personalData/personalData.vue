<template>
	<view class="personalData">
		<view class="personTitle">
			<view class="personTitleImg">
				<uni-file-picker v-model="fileList" disable-preview :del-icon="false" limit="1"
					:imageStyles="imageStyles" file-mediatype="image" @success="success">上传照片</uni-file-picker>
			</view>
			<view class="personTitleContent">
				<view class="personName">李亚东<uni-icons type="compose" size="18" @click="changePersonAbstract">
					</uni-icons>
				</view>
				<view class="personTags" v-if="userType == 0">
					<view class="personTagsTitle">
						标签:
					</view>
					<view class="personTagsContent">
						<view class="tag-view" v-for="item in patientsList" :key="item">
							<uni-tag :text="item" size="mini" type="warning" />
						</view>
					</view>
				</view>
				<view class="personTags" v-if="userType == 1">
					<view class="personTagsTitle">
						简介:
					</view>
					<view class="personTagsContent">
						{{personTagsContent}}
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			<uni-forms ref="baseForm" :modelValue="patientBaseFormData" labelWidth="80px" :border="!isEdit"
				v-if="userType == 0">
				<uni-forms-item label="姓名:">
					<uni-easyinput v-model="patientBaseFormData.name" placeholder="请输入姓名" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="年龄:">
					<uni-easyinput v-model="patientBaseFormData.age" placeholder="请输入年龄" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="性别:">
					<uni-data-checkbox v-model="patientBaseFormData.sex" :localdata="sexs" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="联系方式:">
					<uni-easyinput v-model="patientBaseFormData.mobile" placeholder="请输入联系方式" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="籍贯:">
					<uni-easyinput v-model="patientBaseFormData.nativePlace" placeholder="请输入籍贯" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="患病周期:">
					<uni-easyinput v-model="patientBaseFormData.itsDuration" placeholder="请输入患病周期" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="当前症状:">
					<uni-easyinput type="textarea" autoHeight v-model="patientBaseFormData.currentSymptoms"
						placeholder="请输入当前症状" :disabled="!isEdit" :inputBorder="isEdit" />
				</uni-forms-item>
			</uni-forms>
			<uni-forms ref="baseForm" :modelValue="docBaseFormData" labelWidth="80px" :border="!isEdit"
				v-if="userType == 1">
				<uni-forms-item label="姓名:">
					<uni-easyinput v-model="docBaseFormData.name" placeholder="请输入姓名" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="年龄:">
					<uni-easyinput v-model="docBaseFormData.age" placeholder="请输入年龄" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="性别:">
					<uni-data-checkbox v-model="docBaseFormData.sex" :localdata="sexs" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="科室:">
					<uni-easyinput v-model="docBaseFormData.department" placeholder="请输入科室" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="职称:">
					<uni-easyinput v-model="docBaseFormData.position" placeholder="请输入职称" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="专长:">
					<uni-easyinput v-model="docBaseFormData.specialty" placeholder="请输入专长" :disabled="!isEdit"
						:inputBorder="isEdit" />
				</uni-forms-item>
				<uni-forms-item label="个人介绍:">
					<uni-easyinput type="textarea" autoHeight v-model="docBaseFormData.introduction"
						placeholder="请输入个人介绍" :disabled="!isEdit" :inputBorder="isEdit" />
				</uni-forms-item>
			</uni-forms>
			<button type="primary" @click="isEdit = true" v-show="!isEdit">编辑</button>
			<button type="primary" @click="submitInfo('doctorForm')" v-show="isEdit">提交信息</button>
		</view>
		<view>
			<uni-popup ref="inputDialog" mode="center">
				<view class="inputDialog" v-if="userType == 0">
					<view class="inputDialogTitle">
						标签选择:
					</view>
					<uni-data-checkbox mode="tag" multiple v-model="inputDialogTags" :localdata="hobby">
					</uni-data-checkbox>
					<view class="addPlanFormBtn">
						<button type="primary" size="mini" @click="submit">提交</button>
						<button size="mini" @click="resetSubmit">取消</button>
					</view>
				</view>
				<view class="inputDialog" v-if="userType == 1">
					<view class="inputDialogTitle">
						请输入个人简介:
					</view>
					<uni-easyinput type="textarea" maxlength="200" autoHeight v-model="inputDialogContent"
						placeholder="请输入内容">
					</uni-easyinput>
					<view class="addPlanFormBtn">
						<button type="primary" size="mini" @click="submit">提交</button>
						<button size="mini" @click="resetSubmit">取消</button>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	import {
		mapState
	} from "vuex"
	export default {
		mixins: [mixins],
		computed: {
			...mapState(['userName', 'userType'])
		},
		data() {
			return {
				current: 0,
				isEdit: false,
				fileList: {
					url: 'https://s1.ax1x.com/2022/11/09/zS361I.jpg',
					extname: 'png',
					name: 'shuijiao.png'
				},
				docBaseFormData: {
					name: '李亚东',
					age: '45',
					sex: 0,
					department: '骨科',
					position: '主任医师',
					specialty: '创伤骨科、骨质疏松',
					introduction: '擅长常见骨科疾病和老年骨质疏松症的诊断和治疗， 熟练掌握手术治疗四肢等常见骨折的技术， 在微创手术治疗高龄老年人骨折方面富有临床经验。现任《 中国临床医生杂志》 编委会第八届编委， 中国中西医结合学会骨伤科专业委员会第八届委员， 中国老年医学学会骨与关节分会创伤骨科学术工作委员会第一届委员。 从事骨科临床、 教学和科研工作二十多年， 先后多次被评为院级优秀医师、 优秀教师和优秀共产党员。曾在香港中文大学附属威尔士亲王医院骨科学系、 丹麦哥本哈根大学CCBR基础医学中心和德国汉堡大学附属医院创伤骨科中心等做访问学者。承担多项院、 局级的骨科科研课题， 以第一或通讯作者发表中国科技核心期刊及英文SCI期刊的论文二十篇。 主要著作《 髓内钉内固定》 第一、 二版编委， 第三版副主编；《 骨科病例精解》 主编。 '
				},
				patientBaseFormData: {
					name: '李珊珊',
					age: 20,
					sex: 1,
					mobile: '13311116666',
					nativePlace: '四川省成都市金牛区',
					itsDuration: '7年',
					currentSymptoms: '腰背疼、腿疼，有时会出现相应部位的隐疼、酸疼、胀疼'
				},
				imageStyles: {
					width: 120,
					height: 120,
					border: {
						color: "#eee", // 边框颜色
						width: "1px", // 边框宽度
						style: "solid", // 边框样式
						radius: "50%" // 边框圆角，支持百分比
					}
				},
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				hobby: [{
					text: '乏力',
					value: '乏力'
				}, {
					text: '腰酸背痛',
					value: '腰酸背痛'
				}, {
					text: '经常抽筋',
					value: '经常抽筋'
				}, {
					text: '驼背',
					value: '驼背'
				}, {
					text: '身长缩短',
					value: '身长缩短'
				}, {
					text: '脊椎后弯',
					value: '脊椎后弯'
				}, {
					text: '胸廓畸形',
					value: '胸廓畸形'
				}, {
					text: '骨痛',
					value: '骨痛'
				}, {
					text: '骨质变形',
					value: '骨质变形'
				}, {
					text: '骨折',
					value: '骨折'
				}],
				src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
				personTagsContent: '擅长常见骨科疾病和老年骨质疏松症的诊断和治疗，熟练掌握手术治疗四肢等常见骨折的技术，在微创手术治疗高龄老年人骨折方面富有临床经验。',
				patientsList: ['乏力', '腰酸背痛', '骨痛', '骨质变形', '骨折'],
				inputDialogContent: '',
				inputDialogTags: []
			}
		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			changePersonAbstract() {
				this.inputDialogContent = JSON.parse(JSON.stringify(this.personTagsContent))
				this.inputDialogTags = JSON.parse(JSON.stringify(this.patientsList))
				this.$refs.inputDialog.open()
			},
			resetSubmit() {
				this.addPlanForm = {}
				this.$refs.inputDialog.close()
			},
			submit() {
				if (this.userType == 1) {
					this.personTagsContent = JSON.parse(JSON.stringify(this.inputDialogContent))
				}
				if (this.userType == 0) {
					this.patientsList = JSON.parse(JSON.stringify(this.inputDialogTags))
				}
				this.$refs.inputDialog.close()
			},
			submitInfo() {
				this.isEdit = false
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			}
		}
	}
</script>

<style lang="less" scoped>
	.personalData {
		.personTitle {
			height: 170px;
			display: flex;
			border-bottom: 1px solid #f1f1f1;

			.personTitleImg {
				width: 150px;
				text-align: center;
				padding-top: 30px;

				/deep/ .uni-file-picker {
					display: flex;
					justify-content: center;
				}

				.changeImg {
					margin-top: 5px;
					padding: 2px 4px;
					color: #b5b5b5;
					font-size: 12px;
					display: inline-block;
					border: 1px solid #b5b5b5;
				}
			}

			.personTitleContent {
				flex: 1;

				.personName {
					display: flex;
					margin-top: 20px;
					margin-bottom: 5px;
					font-size: 22px;
				}

				.personTags {
					color: #878787;

					.personTagsContent {
						display: flex;
						align-content: flex-start;
						flex-wrap: wrap;
						font-size: 13px;
						max-width: 220px;
						height: 65px;
						padding: 5px;
						overflow-y: auto;

						.tag-view {
							font-size: 10px;
							margin-right: 5px;
							margin-bottom: 5px;
						}
					}
				}
			}
		}

		.content {
			padding: 20px;
			border-top: 8px solid #f1f1f1;
		}

		.inputDialog {
			padding: 20px;
			width: 280px;
			background-color: #ffffff;

			.inputDialogTitle {
				margin: 10px 0;
				font-size: 14px;
			}

			.addPlanFormBtn {
				margin-top: 20px;
				display: flex;
				justify-content: space-around;
			}
		}
	}
</style>
