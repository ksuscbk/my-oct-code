import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

// css文件
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'nprogress/nprogress.css'
import './assets/css/index.css'


new Vue({
    el: '#box',
    router,
    render: function (createElement) {
        return createElement(App)
    }
})