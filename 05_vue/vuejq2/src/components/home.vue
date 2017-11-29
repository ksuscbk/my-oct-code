<template>
    <div>
        <h1>状难写之景如在目前</h1>
        <button @click="shopcar">跳转shopcar</button>
        <son :aa="msg" @send="hello"></son>
    </div>
</template>

<script>
import son from './son.vue'
export default {
    data () {
        return {
            'msg': '呆橘'
        }
    },
    components: {
        son
    },
    methods: {
        shopcar () {
            this.$router.push({name: 'shopcar'})
        },
        hello (data) {
            console.log(data + '123321')
        }
    }
}
</script>

<style>

</style>
