<template>
    <div class="temp">
        <ul>
            <li>
                <a v-if="isAll" @click="getImgData(0)">全部</a>
            </li>
            <li v-for="(item, index) in newsListData" :key="index">
                <a @click="getImgData(item.id)">{{item.title}}</a>
            </li>
        </ul>
        <div class="image" v-for="(item, index) in imgData" :key="index">
            <router-link v-bind='{to:"/photodetail/"+item.id}'>
                <img :src="item.img_url" alt="">
                <div class="zhaiyao">
                    <p>{{item.zhaiyao}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import tools from '../tools/tools';
    import {Indicator} from 'mint-ui';
    export default {
        data: function () {
            return {
                newsListData: [],
                imgData: [],
                isAll: false
            }
        },
        created () {
            this.getPhotoListData();
            this.getImgData(0);
        },
        methods: {
            getPhotoListData () {
                Indicator.open('加载中');
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getimgcategory`;
                this.$http.get(url).then(
                    res => {
                        this.newsListData = res.body.message;
                        this.isAll = true;
                        Indicator.close();
                    },
                    res => {
                        console.log("获取图片分类信息出错");
                        Indicator.close();
                    }
                )
                
            },
            getImgData (id) {
                // 图片信息
                Indicator.open('加载中');
                var pUrl = `${tools.HTTP}${tools.SERVER_PATH}/api/getimages/${id}`;
                this.$http.get(pUrl).then(
                    res => {
                        this.imgData = res.body.message;
                        Indicator.close();
                    },
                    res => {
                        console.log("获取图片信息出错");
                        Indicator.close();
                    }
                )
            }
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        list-style: none;
        padding: 2px;
        font-size: 12px;
        overflow-x: auto;
        height: 40px;
    }
    li {
        /* white-space: nowrap; */
        flex-shrink: 0;
        margin-left: 6px;
    }

    .image {
        position: relative;
        display: block;
    }
    .image img {
        width: 100%;

    }

    .zhaiyao p{
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
    }
    
</style>
