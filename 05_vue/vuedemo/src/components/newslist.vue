<template>
    <div class="temp">
        <!-- 新闻列表 mui框架的 -->
            <ul class="mui-table-view">
                <li v-for="(item, index) in newsListData" :key="index" class="mui-table-view-cell mui-media">
                    <router-link v-bind='{to:"/newsdetail/"+item.id}'>
                        <img class="mui-media-object mui-pull-left" :src="item.img_url">
                        <div class="mui-media-body">
                            <h3>{{item.title}}</h3>
                            
                            <p class='mui-ellipsis'>发布时间:{{item.add_time | getTime('YYYY-MM-DD')}}
                                <span>点击量: {{item.click}}</span>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
    </div>
</template>

<script>
    import tools from '../tools/tools'
    export default {
        data() {
            return {
                newsListData: []
            }
        },
        created() {
            this.getNewsListData()
        },
        methods: {
            getNewsListData() {
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getnewslist`
                this.$http.get(url).then(
                    res => {
                        // console.log(res)
                        this.newsListData = res.body.message
                    },
                    res => {
                        console.log("请求新闻列表数据时出错")
                    }
                )
            }
        }
    }
</script>

<style>
    .mui-table-view .mui-ellipsis span {
        float: right;
        margin-right: 10px;
        color: orange;
    }

    .mui-table-view h3 {
        font-size: 16px;
        color: hotpink;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    /* .mui-table-view h3:hover {
        animation: textanimate 1s linear infinite;
    } */

    @keyframes textanimate {
        0% {
            margin-left: 0;
        }
        50% {
            margin-left: 60px;
        }
    }
</style>