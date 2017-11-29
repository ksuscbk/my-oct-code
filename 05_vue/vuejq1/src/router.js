import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './components/home.vue'
export default new Router ({
    routes: [
        {name: 'root', path: '/', component: Home}
    ]
})