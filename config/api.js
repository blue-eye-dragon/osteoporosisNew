import { baseUrl } from './baseUrl.js'
// post请求，获取菜单
const post = function(url, params, config = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: 'POST',
			data: params || {},
			dataType: 'json',
			header: {
				'content-type': 'application/json'
			},
			success: (res) => {
				// 当状态码正确时,才获取数据
				let { data, state } = res.data;
				if (state== 200) {
					// 当请求返回正确数据时,resolve
					resolve(data)
				}
			},
			//失败调用reject，
			fail: (error) => {
				// 失败做处理
				reject(error)
			}
		})
	})

}


// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
const get = function(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: 'GET',
			data: params || {},
			dataType: 'json',
			header: {
				'content-type': 'application/json'
			},
			success: (res) => {
				// 当状态码正确时,才获取数据
				let { data, state } = res.data;
				if (state== 200) {
					// 当请求返回正确数据时,resolve
					resolve(data)
				}
			},
			//失败调用reject，
			fail: (error) => {
				// 失败做处理
				reject(error)
			}
		})
	})
}

uni.addInterceptor('request', {
  invoke(args) {
    // request 触发前拼接 url 
    args.url = baseUrl+args.url
  },
  success(args) {
    // 请求成功后，修改code值为1
    args.data.code = 1
  }, 
  fail(err) {
    console.log('interceptor-fail',err)
  }, 
  complete(res) {
    console.log('interceptor-complete',res)
  }
})


export {
	post,
	get
}
