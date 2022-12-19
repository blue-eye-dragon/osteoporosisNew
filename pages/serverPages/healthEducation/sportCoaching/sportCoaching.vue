<template>
	<view class="sportCoaching">
		<view class="bgImage"></view>
		<h3>一、锻炼方法</h3>
		<span class="chatDoctor" @click="chatDoctor">联系医生</span>
		<view>
			<h4>（1）散步：</h4>
			<div>强度：每次2～3圈(每圈400 m)，80―90步／min 。</div>
			<div>技术要求：抬头、挺胸、直腰、四肢摆动自如，两臂刚力向前摆动 ，注意力主要放在呼吸系统、胸廓及肩带的活动上。</div>
			<h4>（2）跑步：</h4>
			<div>强度：每次2～3圈(运动强度参考“心率=l70一年龄岁数”)。</div>
			<div>技术要求：上体稍前倾，头部自然。躯干收腹拔背，两臂自然协调摆动，两腿用力蹬摆，注意力主要放在腿的蹬地及腰椎受力的感受上。</div>
			<h4>（3）健身操：</h4>
			<div>颈椎运动方法：与项争力、颈项争力、前伸探海、回头望月等；</div>
			<div>上肢运动方法：左右开弓、双手举鼎、弯肱拨刀、俯卧撑等；</div>
			<div>腰背运动方法：按腰转腰、插掌攀足、拧腰转体、仰卧两头起、伸背架桥等；</div>
			<div>腿部运动方法： 膝、转膝、摆踢、举腿、换步、半登跳等。</div>
			<div>强度：运动的时间每次为l5―20 min</div>
			<div>技术要求：动作方向准确，幅度到位，所活动的肌肉明确，注意力放在被锻炼的部位。</div>
			<h4>（4）太极拳：</h4>
			<div>24式简化太极拳和太极推手训练，到后期主要为太极推手训练。</div>
			<div>强度：每次训练时间为l5～20 min。</div>
			<div>技术要求：主要控制重心的运动性平衡，动作以腰为轴、腰为主宰，训练时以意念引导气血运行周身。重点放在腰部，尤其为太极推手训练要重视腰椎的感受。以下运动频率：每周参加运动锻炼的次数为3―5次，不少于3次
			</div>
		</view>
		<h3>二、锻炼原则</h3>
		<view>
			<ul>
				<li>（1）防治骨质疏松的运动以中老年人为主，运动前须进行常规身体检查和运动功能试验，以确保安全。</li>
				<li>（2）运动中应避免过多的爆发性、力量性练习和屏气动作，运动强度应从小逐渐加太，防发生运动损伤。</li>
				<li>（3）尽可能于室外运动。</li>
				<li>（4）运动期间，要加强饮食营养，尤其注意动物性食物中钙的补充必要时应在医生的指导下适量补充药物。</li>
				<li>（5）要想维持较高的骨量或延缓骨量的丢失不论是年轻人还是中老年人，都必须持之以恒坚持锻炼，提高锻炼兴趣，养成锻炼习惯。</li>
				<li>（6）定期检查身体，根据榆查结果和运动感觉随时进行整，以保证可靠的运动效果。</li>
			</ul>
		</view>
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
		methods:{
			chatDoctor (){
				this.navigateTo('/pages/HM-chat/HM-chat')
			}
		}
	}
</script>

<style lang="less">
	.sportCoaching {
		position: relative;
		padding: 10px;
		padding-bottom: 30px;
		.bgImage {
			opacity: 0.5;
			position: fixed;
			width: 100%;
			height: 100%;
			top: 30%;
			left: 0;
			background: url('https://s1.ax1x.com/2022/11/07/xvuYCT.jpg');
			background-repeat: no-repeat;
			background-size: auto;
			z-index: -1;
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
