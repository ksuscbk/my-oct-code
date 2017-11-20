<template>
    <div class="temp">
        <!-- 评论组件 -->
        <discuss :rec="recId"></discuss>
    </div>
</template>

<script>
    import discuss from './son/discuss.vue'
export default {
    data () {
        return {
            recId: 0
        }
    },
    created () {
        this.recId = this.$route.params.id;
    },
    components: {
        discuss
    }
}
</script>

<style>

</style>
