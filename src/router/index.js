/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/*import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
*/

const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'

// 声明使用vue插件
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // 应用中所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },

    {
      path: '/a',
      component: A
    },
    {
      path: '/b',
      component: B,
      children: [
        {
          path: '/b/b1',
          component: B1
        },
        {
          path: '/b/b2',
          component: B2
        },
      ]
    },

    {
      path: '/',
      redirect: '/msite'
    }
  ]
})

// 所有需要检查的路径的数组
const paths = ['/a', '/b']
// 添加全局前置卫士
router.beforeEach((to, from, next) => {
  console.log('beforeEach()', to, from)
  // 判断请求的路由路径是否是/a或/b
  if(paths.indexOf(to.path)>=0) {
    // 判断是否已经登陆,
    // 如果已经登陆, 放行
    // debugger
    if(Vue.store.state.user._id) {
      //
      next()
    } else {
      // 跳转到登陆界面
      next('/login')
      // next()
    }
  } else {
    // 放行
    next()
  }

})

export default router