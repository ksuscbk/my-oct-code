import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

new Vue({
    el: '#box',
    router,
    render: createElement => createElement(App)
})