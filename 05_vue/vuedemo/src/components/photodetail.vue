<template>
    <div class="temp">
        <div class="title">
            <h3>{{photoDetailData.title}}</h3>
        </div>
        <div class="otitle">
            <div>{{photoDetailData.click}}次浏览</div>
            分类: 经济民生
        </div>
        <!-- 图片  用九宫格 -->
        <!-- 图片预览 -->
        <lg-preview class="mark"></lg-preview>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for="(item, index) in imgData" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <!-- <router-link to="/newslist"> -->
                        <img :src="item.src" alt="" v-preview="item.src" class="img">
                    <!-- </router-link> -->
                </li>
            </ul>
        </div>


        <div class="content">
            <p v-html="photoDetailData.content"></p>
        </div>
        <discuss :recId="imgId"></discuss> 
    </div>
</template>

<script>
    import tools from '../tools/tools'
    import discuss from './son/discuss.vue'
    export default {
        data () {
            return {
                photoDetailData: {},
                imgData: [],
                imgId: 0
            }
        },
        created() {
            var id = this.$route.params.id;
            this.getPhotoDetailData(id);
            this.getPhotoImgData(id);
            this.imgId = id;
        },
        components: {
            discuss
        },
        methods: {
            getPhotoDetailData (id) {
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getimageInfo/${id}`
                this.$http.get(url).then(
                    res => {
                        this.photoDetailData = res.body.message[0];
                    },
                    res => {
                        console.log("请求图片对应文字描述出错")
                    }
                )
            },
            getPhotoImgData (id) {
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getthumimages/${id}`
                this.$http.get(url).then(
                    res => {
                        this.imgData = res.body.message;
                    },
                    res => {
                        console.log("请求图片出错")
                    }
                )
            }
        }
    }
</script>

<style>
    .title h3 {
        color: orange;
        font-size: 24px;
    }

    .otitle {
        display: flex;
        justify-content: space-around;
        color: #333;
    }

    .img {
        width: 90px;
        height: 90px;
    }

    .mark {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
