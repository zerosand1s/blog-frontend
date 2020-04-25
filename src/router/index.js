import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const isUserAuthenticated = (to, from, next) => {
  const token = localStorage.getItem('token');
  if (token && token.trim().length) {
    next();
  } else {
    next('/signin');
  }
};

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: {
      name: 'signin'
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    beforeEnter: isUserAuthenticated
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    beforeEnter: isUserAuthenticated
  },
  {
    path: '/new-blog',
    name: 'new-blog',
    component: () => import('../views/CreateNewBlog.vue'),
    beforeEnter: isUserAuthenticated
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
