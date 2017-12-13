import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from './components/home.vue'
import checkbox from './components/checkbox.vue'
export default new Router ({
    routes: [
        {name: 'root', path: '/', component: Home},
        {name: 'checkbox', path: '/checkbox', component: checkbox}
    ]
})