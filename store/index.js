import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		userName: '',
		userType: 0,
		token: ''
	},
	getters: {
		userName (state) {
			return state.userName
		},
		userType (state) {
			return state.userType
		},
		token (state) {
			return state.token
		}
	},
    mutations: {
		//相当于同步的操作
		setUserName (state, name) {
			state.userName = name
		},
		setUserType (state, userType) {
			state.userType = userType
		},
		setToken (state, token) {
			state.token = token
		}
	},
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
export default store
