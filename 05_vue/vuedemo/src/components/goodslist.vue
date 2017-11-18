<template>
    <div class="temp">
        
    </div>
</template>

<script>
    import tools from '../tools/tools'
    export default {
        data () {
            return {
                goodsListData: []
            }
        },
        created () {
            this.getGoodsListData();
        },
        methods: {
            getGoodsListData () {
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getgoods?pageindex=1`
                this.$http.get(url).then(
                    res => {
                        this.getGoodsListData = res.body.message;
                        console.log(res);
                    },
                    res => {
                        console.log("goodslist请求页面数据出错")
                    }
                )
            }
        }
    }
</script>

<style>

</style>
