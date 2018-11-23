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

  // 评价的总数据
  ratingsCount (state) {
    return state.ratings.length
  },

  // 满意的评价的总数据
  positiveRatingsCount (state) {
    return state.ratings.reduce((pre, rating) => pre + (rating.rateType===0 ? 1 : 0), 0)
  }
}