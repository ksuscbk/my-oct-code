import Vue from 'vue'
import Router from 'vue-router'

// 引入各组件
import Home from './components/home.vue'
// 登陆
import SignIn from './components/signin.vue'
// 仪表盘
import DashBoard from './components/dashboard.vue'
// 讲师列表
import TecList from './components/teclist.vue'
// 个人中心
import Center from './components/center.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {name: '', path: '/', component: Home},
        //  表明嵌套关系的方式就是写在children
        {name: 'home',path: '/home', component: Home,children: [
            {name: 'dashboard',path: '/dashboard', component: DashBoard},
            {name: 'teclist',path: '/teclist', component: TecList},
            {name: 'center', path:'/center', component: Center}
        ]},
        {name: 'signin',path: '/signin', component: SignIn}
    ]
})
