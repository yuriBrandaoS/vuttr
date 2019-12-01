import Vue from 'vue';
import VueRouter from 'vue-router';
import Tools from '../components/Tools.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Tools,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
