<template>
  <div>
        Son.vue
        <button @click="hello">按钮</button>
  </div>
</template>

<script>
    export default {
        props: ['yy', 'aa'],
        created: function () {
            console.log(this);
        },
        data: function () {
            return {
                son: '我是子组件的数据'
            }
        },
        methods: {
            hello: function () {
                // 子组件向父组件传值    this是son.vue  组件      
                // 两个参数   方法名  要传的值
                this.$emit('sendData', '我也是子组件的数据');
            }
        }
    }
</script>

<style>

</style>
