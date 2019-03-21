import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/components/Login'
import ShopUpload from '@/components/ShopUpload'
import Category from '@/components/Category'

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/category',
          name: 'category',
          component: Category
        },
        {
          path: '/shop',
          name: 'shop',
          component: Login
        },
        {
          path: '/shop_upload',
          name: 'shop_upload',
          component: ShopUpload
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
