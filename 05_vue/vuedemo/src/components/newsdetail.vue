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
    </div>
</template>

<script>
    import tools from '../tools/tools';
    export default {
        data () {
            return {
                newsDetailData: {}
            }
        },
        
        created () {
            this.getNewsDetailData(this.$route.params.id);
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
