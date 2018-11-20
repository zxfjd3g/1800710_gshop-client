/*
Vuex最核心的管理对象
 */
import {
  reqAddress,
  reqShops,
  reqFoodCategorys,
  reqUserInfo
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER
} from './mutation-types'

export default {

  // 异步获取地址信息的异步action
  async getAddress ({commit, state}) {
    // 发ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 根据结果提交mutation
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取食品分类列表的异步action
  async getFoodCategorys ({commit}) {
    // 发ajax请求
    const result = await reqFoodCategorys()
    // 根据结果提交mutation
    if(result.code===0) {
      const foodCategorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys: foodCategorys})
    }
  },

  // 异步获取商家列表的异步action
  async getShops ({commit, state}) {
    // 发ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    // 根据结果提交mutation
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 保存user的同步action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

  // 获取当前用户信息的异步action
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  }
}