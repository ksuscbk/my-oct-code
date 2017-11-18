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
// 图片预览展示
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)


// vue-router控制路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 页面路由
import home from './components/home.vue';
// 会员页
import member from './components/member.vue';
// 购物车
import shopcar from './components/shopcar.vue';
// 搜索
import search from './components/search.vue';
// 新闻列表
import newslist from './components/newslist.vue';
// 新闻详情
import newsdetail from './components/newsdetail.vue';
// 图片列表
import photolist from './components/photolist.vue';
// 图片详情
import photodetail from './components/photodetail.vue';
// 商品列表
import goodslist from './components/goodslist.vue';
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
        {name: 'newslist', path: '/newslist', component: newslist},
        {name: 'newsdetail', path: '/newsdetail/:id', component: newsdetail},
        {name: 'photolist', path: '/photolist', component: photolist},
        {name: 'photodetail', path: '/photodetail/:id', component: photodetail},
        {name: 'goodslist', path: '/goodslist', component: goodslist}

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