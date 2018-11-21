import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import AppIndex from '@/components/index/Index'
import OrderList from '@/components/order/OrderList'
import OrderDetails from '@/components/order/OrderDetails'
import ReverseDetails from '@/components/reverse/ReverseDetails'
import AppPractice from '@/components/practice/AppPractice'

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'index',
      component: AppIndex
    },
    {
      path:'/orderdetails',
      name:'orderdetails',
      component: OrderDetails
    },
    {
      path:'/orderlist',
      name:'orderlist',
      component:OrderList
    },
    {
      path:'/reversedetails',
      name:'reversedetails',
      component:ReverseDetails
    },
    {
      path:'/practice',
      name:'practice',
      component:AppPractice,
      meta:{ requiresAuth: true }
    }
  ]
})
