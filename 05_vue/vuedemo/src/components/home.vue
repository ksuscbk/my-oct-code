<template>
    <div class="temp">
        <!-- mui做的轮播图 -->
        <lunbo :lunboData="homeData"></lunbo>
        <!-- 九宫格 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/newslist">
                        <span class="mui-icon newslist"></span>
                        <div class="mui-media-body">新闻列表</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photolist">
                        <span class="mui-icon email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goodslist">
                        <span class="mui-icon chat"></span>
                        <div class="mui-media-body">商品列表</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/count">
                        <span class="mui-icon location"></span>
                        <div class="mui-media-body">地址</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon search"></span>
                        <div class="mui-media-body">搜索</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon email"></span>
                        <div class="mui-media-body">手机</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon newslist"></span>
                        <div class="mui-media-body">设置</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon picshare"></span>
                        <div class="mui-media-body">关于</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">更多</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import lunbo from "./son/lunbo.vue";
    import tools from "../tools/tools";
    export default {
        data() {
            return {
                homeData: []
            };
        },
        created() {
            this.getHomeData();
        },
        methods: {
            getHomeData() {
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getlunbo`;
                this.$http.get(url).then(
                    // 成功失败回调
                    res => {
                        this.homeData = res.body.message;
                    },
                    res => {
                        console.log("home页面请求轮播数据出错");
                    }
                );
            }
        },
        components: {
            lunbo
        }
    };
</script>

<style scoped>
    body {
        background-color: #f5f5f5;
    }
    .newslist{
        background-image: url('../images/callme.png');
        background-repeat: round;
    }
    .email {
        background-image: url('../images/feedback.png');
        background-repeat: round;
    }
    .chat {
        background: url("../images/goodShow.png") round;
    }
    .location {
        background: url('../images/news.png') round;
    }
    .search {
        background: url('../images/search.png') round;
    }
    .picshare {
        background: url("../images/picShare.png") round;
    }
    .mui-icon-more {
        color: orange;
    }
    .mui-icon{
        width: 40px;
        height: 40px;
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
    }
</style>