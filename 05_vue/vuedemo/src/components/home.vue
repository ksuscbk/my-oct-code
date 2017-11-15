<template>
    <div class="temp">
        <h1 @click="getHomeData">home</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            getHomeData () {
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(
                    // function(response) {

                    // },
                    // function (err) {
                        
                    // }
                    res => {console.log(res)},
                    res => {console.log(res)}
                )
            }
        }
    }
</script>

<style>

</style>
