import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home'),
    meta: {
      isAuth: false,
      keepAlive: true
    }
  },
  {
    path: '/production',
    name: 'Production',
    component: () => import('../views/production'),
    meta: {
      isAuth: false,
      keepAlive: false
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/personal-center/mine'),
    redirect: { name: 'order' },
    meta: {
      keepAlive: false
    },
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/personal-center/mine-order.vue'),
        meta: {
          isAuth: true,
          keepAlive: false
        }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/personal-center/mine-setting.vue'),
        meta: {
          isAuth: true,
          keepAlive: false
        }
      }
    ]
  },
  {
    path: '/mineOrderDetail',
    name: 'mineOrderDetail',
    component: () => import('../views/personal-center/mine-order-detail.vue'),
    meta: {
      isAuth: true,
      keepAlive: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login'),
    meta: {
      isAuth: false,
      keepAlive: false
    }
  }, {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register'),
    meta: {
      isAuth: false,
      keepAlive: false
    }
  }, {
    path: '/userProtocol',
    name: 'userProtocol',
    component: () => import('../views/login/user-protocol'),
    meta: {
      isAuth: false,
      keepAlive: false
    }
  }, {
    path: '/findPassword',
    name: 'findPassword',
    component: () => import('../views/login/find-password'),
    meta: {
      isAuth: false,
      keepAlive: false
    }
  }, {
    path: '/orderDetail',
    name: 'orderDetail',
    component: () => import('../views/order-detail'),
    meta: {
      isAuth: true,
      keepAlive: false
    }
  }, {
    path: '/business',
    name: 'business',
    component: () => import('../views/business'),
    meta: {
      isAuth: false,
      keepAlive: true
    }
  }, {
    path: '/information',
    name: 'information',
    component: () => import('../views/information'),
    redirect: { name: 'notice' },
    meta: {
      isAuth: false,
      keepAlive: true
    },
    children: [{
      path: 'notice',
      name: 'notice',
      component: () =>
        import('../views/information/notice.vue'),
      meta: {
        isAuth: false,
        keepAlive: true
      }
    }, {
      path: 'help',
      name: 'help',
      component: () =>
        import('../views/information/help.vue'),
      meta: {
        isAuth: false,
        keepAlive: true
      }
    }, {
      path: 'detail',
      name: 'detail',
      component: () =>
        import('../views/information/detail.vue'),
      meta: {
        isAuth: false,
        keepAlive: false
      }
    }],
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
