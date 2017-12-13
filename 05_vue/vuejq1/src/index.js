import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

new Vue({
    el: '#box',
    router,
    render: createElement => createElement(App)
})