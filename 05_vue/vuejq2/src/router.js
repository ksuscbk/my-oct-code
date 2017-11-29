import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home.vue'
import shopcar from './components/shopcar.vue'
import son from './components/son.vue'
export default new Router({
    routes: [
        // {name: 'index', path: '/', component: home},
        {name: 'home', path: '/home', component: home, children: [
            {name: 'son', path: '/son', component: son}
        ]},
        {name: 'shopcar', path: '/shopcar', component: shopcar}
    ]
})