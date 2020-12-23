import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home')
  },
  {
    path: '/production',
    name: 'Production',
    component: () => import('../views/production')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/personal-center/mine'),
    redirect: { name: 'order' },
    children: [
      // {
      //   path: 'assets',
      //   name: 'assets',
      //   component: () => import('../views/personal-center/mine-assets.vue')
      // },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/personal-center/mine-order.vue')
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/personal-center/mine-setting.vue')
      }
    ]
  },
  {
    path: '/mineOrderDetail',
    name: 'mineOrderDetail',
    component: () => import('../views/personal-center/mine-order-detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register')
  }, {
    path: '/findPassword',
    name: 'findPassword',
    component: () => import('../views/login/find-password')
  }, {
    path: '/orderDetail',
    name: 'orderDetail',
    component: () => import('../views/order-detail')
  }, {
    path: '/business',
    name: 'business',
    component: () => import('../views/business')
  }, {
    path: '/information',
    name: 'information',
    component: () => import('../views/information')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
