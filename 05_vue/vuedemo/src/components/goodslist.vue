<template>
    <div class="temp">
        <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li v-for="(item,index) in goodsListData" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link v-bind="{to: '/goodsinfo/'+item.id}">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">
                            <h4>{{item.title}}</h4>
                            <br>
                            <div class="info">
                                {{item.add_time | getTime('hh:mm:ss')}}
                                <div>
                                     库存{{item.stock_quantity}}件 
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
		    </ul>    
		</div>
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
                        this.goodsListData = res.body.message;
                        // console.log(res);
                    },
                    res => {
                        console.log("goodslist请求页面数据出错")
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        height: 75px;
    }
    .mui-media-body h4{
        text-align: center;
        color: orange;
    }
    .info{
        display: flex;
        justify-content: space-between;
        color:rgba(1,1,1,0.4)
    }
</style>
