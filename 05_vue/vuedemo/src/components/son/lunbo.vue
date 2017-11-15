<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item class="slide1" v-for="(item, index) in lunboData" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="" class="img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props: ['lunboData']
    }
</script>

<style>
    .img {
        width: 100%;
    }
    .mint-swipe {
        height: 200px;
    }
</style>
