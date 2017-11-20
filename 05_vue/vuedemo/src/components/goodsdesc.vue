<template>
    <div class="temp">
        <div class="title">
            <h3>{{goodsDescData.title}}</h3>
        </div>
        <div class="content">
            <p v-html="goodsDescData.content"></p>
        </div>
    </div>
</template>

<script>
import tools from '../tools/tools'
export default {    
    data () {
        return {
            goodsDescData: {}
        }
    },
    created () {
        var id = this.$route.params.id;
        this.getDescData(id);
    },
    methods: {
        getDescData (id) {
            var url = `${tools.HTTP}${tools.SERVER_PATH}/api/goods/getdesc/${id}`
            this.$http.get(url).then(
                res => {
                    this.goodsDescData = res.body.message[0]
                },
                res => {
                    console.log("请求商品详细描述数据出错");
                }
            )
        }
    }
}
</script>

<style>
    .title{
        padding: 5px;
        text-align: center;
        color: orange;
    }
    .content {
        padding: 5px;
    }
    .content p {
        line-height: 28px;
        text-indent: 2em;
    }
</style>
