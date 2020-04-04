import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
    component: () => import('../views/Signin/Signin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup/Signup.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home/Home.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
