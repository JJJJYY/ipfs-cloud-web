import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home'),
    meta: {
      isAuth: false
    }
  },
  {
    path: '/production',
    name: 'Production',
    component: () => import('../views/production'),
    meta: {
      isAuth: false
    }
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
        component: () => import('../views/personal-center/mine-order.vue'),
        meta: {
          isAuth: true
        }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/personal-center/mine-setting.vue'),
        meta: {
          isAuth: true
        }
      }
    ]
  },
  {
    path: '/mineOrderDetail',
    name: 'mineOrderDetail',
    component: () => import('../views/personal-center/mine-order-detail.vue'),
    meta: {
      isAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index'),
    meta: {
      isAuth: false
    }
  }, {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register'),
    meta: {
      isAuth: false
    }
  }, {
    path: '/findPassword',
    name: 'findPassword',
    component: () => import('../views/login/find-password'),
    meta: {
      isAuth: false
    }
  }, {
    path: '/orderDetail',
    name: 'orderDetail',
    component: () => import('../views/order-detail'),
    meta: {
      isAuth: true
    }
  }, {
    path: '/business',
    name: 'business',
    component: () => import('../views/business'),
    meta: {
      isAuth: false
    }
  }, {
    path: '/information',
    name: 'information',
    component: () => import('../views/information'),
    meta: {
      isAuth: false
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth === false) {
    next()
  } else {
    if (!localStorage.getItem('token')) {
      next({ name: 'login' })
    } else {
      next()
    }
  }
})

export default router;
