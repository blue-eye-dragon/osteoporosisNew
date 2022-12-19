<template>
	<view class="sportClockIn">
		<view class="sportClockTop">
			<view class="sportClockTopText">
				<span>健康</span>生活每一天
			</view>
		</view>
		<view class="serverList">
			<span class="sportClockRecord" @click="sportClockRecord">
				打卡记录
			</span>
			<view class="serverListTitle">
				有氧运动
			</view>
			<view class="serverListItem" @click="sportCoaching()">
				<view>
					<i class="iconfont serverListIcon color0" v-html="'&#xe689;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">慢走</view>
					<text class="serverListLable">慢走30分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"   @click="clockIn('manzou')" v-if="!sportContent.manzou">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListItem" @click="nutritionGuide()">
				<view class="">
					<i class="iconfont serverListIcon color1" v-html="'&#xe61d;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">慢跑</view>
					<text class="serverListLable">慢跑20分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('manpao')" v-if="!sportContent.manpao">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListItem" @click="drugCounseling()">
				<view>
					<i class="iconfont serverListIcon color2" v-html="'&#xe6b3;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">游泳</view>
					<text class="serverListLable">游泳20分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('youyong')" v-if="!sportContent.youyong">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListItem" @click="regularEvaluation()">
				<view class="">
					<i class="iconfont serverListIcon color3" v-html="'&#xe64d;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">跳绳</view>
					<text class="serverListLable">跳绳10分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('tiaosheng')" v-if="!sportContent.tiaosheng">打卡</button>
					<button  type="primary" size="mini"   disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListTitle">
				无氧运动
			</view>
			<view class="serverListItem" @click="sportCoaching()">
				<view>
					<i class="iconfont serverListIcon color0" v-html="'&#xe640;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">哑铃</view>
					<text class="serverListLable">哑铃10分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('yaling')" v-if="!sportContent.yaling">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListItem" @click="nutritionGuide()">
				<view class="">
					<i class="iconfont serverListIcon color1" v-html="'&#xe67a;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">杠铃</view>
					<text class="serverListLable">杠铃10分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('gangling')" v-if="!sportContent.gangling">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListItem" @click="drugCounseling()">
				<view>
					<i class="iconfont serverListIcon color2" v-html="'&#xe63f;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">引体向上</view>
					<text class="serverListLable">引体向上100下</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('yintixiangshang')" v-if="!sportContent.yintixiangshang">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListTitle">
				柔韧度训练
			</view>
			<view class="serverListItem" @click="sportCoaching()">
				<view>
					<i class="iconfont serverListIcon color0" v-html="'&#xe623;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">瑜伽</view>
					<text class="serverListLable">瑜伽30分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('yujia')" v-if="!sportContent.yujia">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
			</view>
			<view class="serverListItem" @click="nutritionGuide()">
				<view class="">
					<i class="iconfont serverListIcon color1" v-html="'&#xe680;'"></i>
				</view>
				<view>
					<view class="serverListItemTitle">伸展运动</view>
					<text class="serverListLable">伸展运动20分钟</text>
				</view>
				<view class="clockIn" @click="">
					<!-- 打卡 -->
					<button  type="primary" size="mini"  @click="clockIn('shenzhanyundong')" v-if="!sportContent.shenzhanyundong">打卡</button>
					<button  type="primary" size="mini"  disabled v-else>已打卡</button>
				</view>
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
				sportContent: {
					manzou: false,
					manpao: false,
					youyong: false,
					tiaosheng: false,
					yaling: false,
					gangling: false,
					yintixiangshang: false,
					yujia: false,
					shenzhanyundong: false
				}
			}
		},
		methods: {
			sportClockRecord () {
				this.navigateTo('/pages/healthGuide/sportClockIn/sportClockRecord')
			},
			clockIn (e) {
				this.sportContent[e] = true
			},
			drugCounseling (){},
			nutritionGuide (){},
			regularEvaluation (){},
			sportCoaching (){}
		}
	}
</script>

<style lang="less" scoped>
	.sportClockIn {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 30px;
		.sportClockTop {
			width: 100%;
			height: 200px;
			position: relative;
			background-image: linear-gradient(#1a9def, #9bd9ff);
			.sportClockTopText {
				font-size: 35px;
				color: #ffffff;
			    margin: 40px auto;
			    text-align: center;
				span {
					color: #f0cd34;
				}
			}
		}

		.serverList {
			width: 90%;
			margin-top: -80px;
			padding: 10px 5px 10px;
			border-radius: 30px;
			background-color: #ffffff;
			overflow: hidden;
			position: relative;
			.sportClockRecord {
				position: absolute;
				top: 10px;
			    right: 16px;
			    display: inline-block;
			    color: #ffffff;
			    padding: 3px 5px;
			    background-color: #1a9def;
			}
			.serverListTitle {
				font-size: 18px;
				padding: 10px 20px;
			}
			.serverListItem {
				display: flex;
				align-items: center;
				padding: 10px 20px;
				background-color: #ffffff;
				position: relative;

				.serverListIcon {
					font-size: 28px;
					padding: 10px;
					border-radius: 50%;
					color: #ffffff;
				}

				.serverListItemTitle {
					font-size: 18px;
					margin-left: 12px;
					line-height: 30px;
				}

				.serverListLable {
					color: #a9a9a9;
					font-size: 14px;
					margin-left: 12px;
				}

				.clockIn {
					position: absolute;
					right: 10px;
				}
			}
		}
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

	.color3 {
		background-color: #ffad20;
	}
</style>
