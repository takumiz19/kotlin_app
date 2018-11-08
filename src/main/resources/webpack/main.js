import Vue from 'Vue';
import VueRouter from 'vue-router';
import TOP from './vue/top.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/',component:TOP,name:'top'}
]

const router = new VueRouter({
    routes
})

new Vue({router, render: h => h('router-view')}).$mount(document.body)