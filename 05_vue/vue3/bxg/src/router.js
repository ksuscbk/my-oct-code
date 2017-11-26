import Vue from 'vue'
import Router from 'vue-router'

// 引入各组件
import Home from './components/home.vue'
import SignIn from './components/signin.vue'
import DashBoard from './components/dashboard.vue'
import TecList from './components/teclist.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        //  表明嵌套关系的方式就是写在children
        {name: 'home',path: '/path', component: Home,children: [
            {name: 'DashBoard',path: '/dashboard', component: DashBoard},
            {name: 'TecList',path: '/teclist', component: TecList}
        ]},
        {name: 'signin',path: '/signin', component: SignIn}
    ]
})
