<template>
  <!-- 要有一个根标签  有且只有一个-->
  <div>
      <h3>hello,components呆橘</h3>
      <!-- <img src="../images/back1.jpg" alt=""> -->

      <Son :yy="msg" @sendData="aaa"></Son>

      呆呆呆呆呆呆
  </div>
</template>

<script>
    // 引入
    import Son from './son.vue'
    // 导出 
    export default {
        data: function () {
            return {
                msg: '我是父组件的值'
            }
        },
        // 在父组件中接收的子组件
        components: {
            Son
        },
        
        methods: {
            aaa: function (data) {
                console.log(data);
            }
        }
    }
</script>

<style>

</style>

