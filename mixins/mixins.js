import {
	post,
	get
} from "@/config/api"
const mixins = {
	data() {
		return {
			pages: {
				pageSize: 10,
				pageCurrent: 1,
				total: 20
			},
			loading: false
		}
	},
	methods: {
		post,
		get,
		dateTimeStr(str) {
			var date = new Date(),
				year = date.getFullYear(), //年
				month = date.getMonth() + 1, //月
				day = date.getDate(), //日
				hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), //时
				minute = date.getMinutes() < 10 ? date.getMinutes() : date.getMinutes(), //分
				second = date.getSeconds() < 10 ? date.getSeconds() : date.getSeconds(); //秒
			month >= 1 && month <= 9 ? (month = "0" + month) : "";
			day >= 0 && day <= 9 ? (day = "0" + day) : "";
			hour >= 0 && hour <= 9 ? hour : "";
			minute >= 0 && minute <= 9 ? (minute = "0" + minute) : "";
			second >= 0 && second <= 9 ? (second = "0" + second) : "";
			if (str.indexOf('y') != -1) {
				str = str.replace('y', year)
			}
			if (str.indexOf('m') != -1) {
				str = str.replace('m', month)
			}
			if (str.indexOf('d') != -1) {
				str = str.replace('d', day)
			}
			if (str.indexOf('h') != -1) {
				str = str.replace('h', hour)
			}
			if (str.indexOf('i') != -1) {
				str = str.replace('i', minute)
			}
			if (str.indexOf('s') != -1) {
				str = str.replace('s', second)
			}
			return str;
		},
		navigateTo(url, params) {
			let urlParams = ''
			let URLs = url
			if (params) {
				for (let key in params) {
					urlParams += key + "=" + params[key] + '&'
				}
				urlParams.substring(0, params.length - 1)
				URLs += `?${urlParams}`
			}
			console.log(URLs, 123)
			uni.navigateTo({
				url: URLs
			})
		},
		switchTab(url, params) {
			let urlParams = ''
			let URLs = url
			if (params) {
				for (let key in params) {
					urlParams += key + "=" + params[key] + '&'
				}
				urlParams.substring(0, params.length - 1)
				URLs += `?${urlParams}`
			}
			console.log(URLs)
			uni.switchTab({
				url: URLs
			})
		},
		// 获取数据
		getData(pageCurrent = 1, pageSize = 10, value = '') {
			// this.loading = true
			// this.pageCurrent = pageCurrent
			// this.request({
			// 	pageSize: this.pages.pageSize,
			// 	pageCurrent: this.pages.pageCurrent,
			// 	value: value,
			// 	success: res => {
			// 		// console.log('data', res);
			// 		this.tableData = res.data
			// 		this.total = res.total
			// 		this.loading = false
			// 	}
			// })
		},
	}
}


export default mixins
