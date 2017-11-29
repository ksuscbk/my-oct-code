<template>
    <div>
        <h3>我是孩子</h3>
        <!-- <h3 :jq="aa">{{aa}}</h3> -->
        <button @click="hello">发送</button>
    </div>
</template>

<script>
export default {
    // props: ['aa']
    data () {
        return {
            'sonname': '嘟嘟'
        }
    },
    methods: {
        hello () {
            this.$emit('send', this.sonname)
        }
    }
}
</script>

<style>

</style>
