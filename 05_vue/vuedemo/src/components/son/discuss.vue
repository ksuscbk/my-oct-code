<template>
    <div class="content">
        <div class="submitComment">
            <h3>用户评论</h3>
            <textarea ref="textArea" name="" id="" cols="30" rows="10">

            </textarea>
            <mt-button type="primary" size="large" @click="postComment">
                提交评论
            </mt-button>
        </div>

        <div class="showComment">
            <h3>相关评论</h3>
            <ul>
                <li v-for="(item, index) in commentList" :key="index">
                    <div class="">{{item.content}}</div>
                    <div class="info">
                        <div>{{item.user_name}}</div>
                        {{item.add_time | getTime('YYYY-MM-DD')}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import tools from '../../tools/tools'
    // 提示用户评论为空
    import {Toast} from 'mint-ui'
    export default {
        props: ['recId'],
        data () {
            return {
                commentList: [],
            }
        },
        created () {
            this.getCommentData();
        },

        methods: {
            postComment (id) {
                // 获取评论内容
                let comment = this.$refs.textArea.value;
                // 为空不提交
                if (!comment || comment.trim() == "") {
                    Toast('评论不能为空');
                    return;
                }
                
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/postcomment/${this.recId}`
                this.$http.post(url, {content: comment}, {emulateJSON:true}).then(
                    res => {
                        Toast('评论成功');
                        this.$refs.textArea.value = '';
                        this.getCommentData();
                    },
                    res => {
                        Toast('评论失败');
                        console.log('上传评论时出错');
                    }
                )
            },
            // 获取评论数据
            getCommentData () {
                var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getcomments/${this.recId}?pageindex=1`
                this.$http.get(url).then(
                    res => {
                        this.commentList = res.body.message;
                        console.log(res);
                    },
                    res => {
                        console.log("请求评论时出错");
                    }
                )
            }
        }
        
    }
</script>

<style scoped>
    textarea {
        height: 80px;
    }

    .content {
        padding: 10px;
    }

    h3 {
        font-size: 22px;
        font-weight: normal;
    }

    .showComment li {
        list-style: none;
        border-bottom: 1px solid rgba(0, 0, 0, .3);
    }

    .info {
        display: flex;
        justify-content: space-between;
    }
</style>
