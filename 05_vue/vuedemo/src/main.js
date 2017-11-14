import Vue from 'vue';
import App from './app.vue';

// 引入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

// 引入mui中的样式
import './static/css/mui.min.css';

new Vue({
    el: '#app',
    // render: function (createElement) {
    //     createElement(App)
    // }
    render: createElement => createElement(App)
})