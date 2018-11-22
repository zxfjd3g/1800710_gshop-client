/*
Vuex最核心的管理对象
 */
export default {

  // 购物车中food的数量
  totalCount (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },

  // 购物车中food的总价格
  totalPrice (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
  },
}