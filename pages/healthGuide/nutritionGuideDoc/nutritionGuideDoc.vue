<template>
	<view class="container">
		<editor1 :editorDetail=infos.content @getContents="getContents" class="bg"></editor1>
		<view class="buttonBox">
			<button type="basics" @click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	import mixins from "@/mixins/mixins.js"
	import editor1 from '@/components/editor/editor.vue'
	export default {
		mixins: [mixins],
		components: {
			editor1
		},
		data() {
			return {
				infos: {
					content: '', //绑定值
				}
			}
		},
		methods: {
			getContents(html) {
				this.infos.content = html
			},
			submit () {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		padding: 10px;
	}
	.bg {
		height: calc(100vh - 44px);
		background-color: #f7f7f7;
		background-image: url('https://s1.ax1x.com/2022/11/07/xvuYCT.jpg');
		background-repeat: no-repeat;
		background-origin: border-box;
		background-position-y: 10vh;
	}
	buttonBox {
		margin-top: 10px;
	}
</style>
