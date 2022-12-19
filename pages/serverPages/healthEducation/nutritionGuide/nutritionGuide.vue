<template>
	<view class="nutritionGuide">
		<view class="bgImage"></view>
		<h3>温馨提示</h3>
		<span class="chatDoctor" @click="chatDoctor">联系医生</span>
		<div class="warmPrompt">
			在饮食健康教育方面，包括营养原则，即高钙、低盐、适量蛋白质的均衡饮食，以及适宜和不适宜的食物种类。但是由于我国居民饮食习惯的地域性特点，以及语言习惯差异，食物的喜好程度、食用频度，甚至称呼均有可能不同。如海鲜类食品是推荐的高钙和富含优质蛋白食物，沿海地区居民食用较多，调查结果显示很多社区居民食用较少；奶制品也是推荐的高钙食物，但由于自幼养成的饮食习惯，奶制品并不为很多群众普遍接受，而以豆制品为主要的补钙食品。因此，很多通用的营养健康教育并不完全符合我们居民的饮食特点。
		</div>

		<h3 class="title">饮食指导</h3>
		<h4>1、供给充足的蛋白质</h4>
		<div class="content">
			蛋白质是组成骨基质的原料，可增加钙的吸收和储存，对防止和延缓骨质疏松有利。如奶中的乳白蛋白，骨头里的骨白蛋白，核桃中的核白蛋白，蛋类的白蛋白，都含有弹性蛋白和胶原蛋白，维生素C对胶原合成有利，故老年人应有充足的蛋白质与维生素C。
		</div>
		<h4>2、多吃含维生素、钙、磷等较多的食物</h4>
		<div class="content">
			饮食中钙、磷的比值要合适，最好为2：1。多吃新鲜蔬菜、新鲜牛奶、蛋类、谷类、豆制品、虾皮、等食物。尤其要指出的是，老年人每天喝两杯牛奶，能有效地防治骨质疏松症。牛奶中含有大量的钙、磷成分，是食物中最优质的钙磷来源，而且钙与磷比例合适。

			一般情况下，100毫升的牛奶含钙125毫克，两杯牛奶约400毫升，含钙600毫克左右，再从食物中摄取400毫克以上钙成分，老年人每天的钙摄人量就达到了1000毫克以上，只要老年人保证每日的钙需求量就能有效地防治骨质疏松症。

		</div>
		<h4>3、饮食结构要合理</h4>
		<div class="content">
			主食以米、面、杂粮为主，粗细搭配，副食以高蛋白质、低脂肪饮食为主，辅以富含钙和维生素的食物。
		</div>
		<h4>4、饮食和运动相结合</h4>
		<div class="content">
			饮食行为干预与健康管理是提高老年骨质疏松患者自我管理行为与生活质量的重要途径，主要是针对影响骨质疏松的危险因素，对患者的生活方式以及饮食行为进行干预，例如多食用高蛋白、高铁与维生素的食物，多加强户外运动，最好以有氧运动为主，如太极拳、慢跑等方式，尽可能避免高强度运动，过度的运动会加重骨关节结构的破坏，引起疼痛症状；增加日晒时间，同时通过运动锻炼来改善患者的运动能力，预防骨质疏松。
		</div>




	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	export default {
		mixins: [mixins],
		data() {
			return {

			};
		},
		methods: {
			chatDoctor() {
				this.navigateTo('/pages/HM-chat/HM-chat')
			}
		}
	}
</script>

<style lang="less">
	.nutritionGuide {
		position: relative;
		padding: 10px;
		padding-bottom: 30px;

		h3 {
			line-height: 40px;
		}

		h4 {
			line-height: 30px;
		}

		.content {
			text-indent: 2em;
		}

		.warmPrompt {
			font-size: 14px;
			color: #696969;
		}

		.bgImage {
			opacity: 0.5;
			position: fixed;
			width: 100%;
			height: 100%;
			top: 30%;
			left: 0;
			// background: radial-gradient(circle farthest-side at 0, #ffffff,#0082fc);
			// background-image: linear-gradient(#ffffff,#0082fc);
			background: url('https://s1.ax1x.com/2022/11/07/xvuYCT.jpg');
			background-repeat: no-repeat;
			background-size: auto;
			z-index: -1;
		}

		.title {
			margin: 10px 0;
		}

		.chatDoctor {
			position: fixed;
			top: 55px;
			/* #ifdef MP */
			top: 10px;
			/* #endif */
			right: 10px;
			font-size: 15px;
			color: #ffffff;
			padding: 5px 10px;
			border-radius: 10px;
			background-color: #1a9def;
		}
	}
</style>
