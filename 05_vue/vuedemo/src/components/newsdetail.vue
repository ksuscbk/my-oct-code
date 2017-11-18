<template>
    <div class="temp">
        <h3>{{newsDetailData.title}}</h3>
        <div class="time">
            {{newsDetailData.add_time | getTime("YYYY-MM-DD")}}
            <span>{{newsDetailData.click}}浏览</span>
        </div>
        <div class="content">
            <p v-html="newsDetailData.content"></p>
        </div>
        <!-- 添加评论组件 -->
        <discuss :recId="commentId"></discuss>
    </div>
</template>

<script>
    import tools from '../tools/tools';
    import discuss from './son/discuss.vue';
    export default {
        data () {
            return {
                newsDetailData: {},
                commentId: 0
            }
        },
        components: {
            discuss
        },
        
        created () {
            this.getNewsDetailData(this.$route.params.id);
            this.commentId = this.$route.params.id;
        },
        methods: {
            getNewsDetailData (id) {
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getnew/${id}`;
                    this.$http.get(url).then(
                        res => {
                            this.newsDetailData = res.body.message[0];
                        },
                        res => {
                            console.log("请求详细信息时出错");
                        }
                    )
            }
        }
    }    
</script>

<style scoped>
    h3 {
        font-size: 16px;
        margin-top: 10px;
        padding: 10px;
    }
    .time {
        display: flex;
        justify-content: space-around;
        font-size: 12px;
    }
</style>
