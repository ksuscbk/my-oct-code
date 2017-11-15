import Vue from 'vue';
import App from './app.vue';

// 引入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

// 全局css样式
import './root.css';
// 引入mui中的样式
import './static/css/mui.min.css';

// vue发送请求  axios不支持json请求    vue-resource支持json请求
import VueResource from 'vue-resource';
Vue.use(VueResource);


// vue-router控制路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 页面路由
import home from './components/home.vue';
import member from './components/member.vue';
import shopcar from './components/shopcar.vue';
import search from './components/search.vue';
import newslist from './components/newslist.vue';
// 管理路由
var router = new VueRouter({
    // 自动检测选中项   更改样式
    linkActiveClass: 'mui-active',
    routes: [
        {name: 'home', path: '/', redirect: '/home'},        
        {name: 'home', path: '/home', component: home},
        // {name: 'home', path: '/', component: home},
        {name: 'member', path: '/member', component: member},
        {name: 'shopcar', path: '/shopcar', component: shopcar},
        {name: 'search', path: '/search', component: search},
        {name: 'newslist', path: '/newslist', component: newslist}
    ]
    
})

// 引入moment
import moment from 'moment'
// 处理时间的全局过滤器  参数  时间 输出格式
Vue.filter('getTime', function (inputTime, fmtString) {
    return moment(inputTime).format(fmtString)
})

new Vue({
    el: '#app',
    // render: function (createElement) {
    //     createElement(App)
    // }
    render: createElement => createElement(App),
    router:router
})