<template>
    <!-- 根元素 -->
    <div>
        孩子1
        <button @click="hello">按钮</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                son: ''
            }
        },
        props: ['yy', 'aa'],
        created: function () {
            console.log(this);
        },

        methods: {
            hello: function () {
                // 子组件向父组件传值   标识符  数据
                this.$emit('sendApp', 'son发来的礼物')
            }
        }
    }
</script>

<style>

</style>
