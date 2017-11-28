<template>
    <div class="body teacher-profile">
        <div class="settings">
            <form action="" class="form-horizontal">
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">{{userInfo.username}}</label>
                    <div class="col-xs-5">
                        <p class="form-control-static">天下二</p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">头像</label>
                    <div class="col-xs-2 preview">
                        <img :src="userInfo.avatar">
                        <input ref="upfile" @change="upFile" type="file" id="upfile">
                        <div class="cover">
                            <i class="fa fa-upload"></i>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">昵称</label>
                    <div class="col-xs-5">
                        <input v-model="userInfo.nickname" type="text" class="form-control input-sm">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">性别</label>
                    <div class="col-xs-3">
                        <label class="radio-inline">
                            <!-- userInfo.gender的值和value值一样，就会被选中 -->
                            <input v-model="userInfo.gender" value="0" type="radio"> 男
                        </label>
                        <label class="radio-inline">
                            <input v-model="userInfo.gender" value="1" type="radio"> 女
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">出生日期</label>
                    <div class="col-xs-5">
                        <input v-model="userInfo.birthday" type="text" class="form-control input-sm">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">籍贯</label>
                    <div class="col-xs-5">
                        <select name="" class="form-control input-sm">
                            <option value="">河北省</option>
                            <option value="">山东省</option>
                            <option value="">北京市</option>
                        </select>
                        <select name="" class="form-control input-sm">
                            <option value="">河北省</option>
                            <option value="">山东省</option>
                            <option value="">北京市</option>
                        </select>
                        <select name="" class="form-control input-sm">
                            <option value="">河北省</option>
                            <option value="">山东省</option>
                            <option value="">北京市</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">手机号码</label>
                    <div class="col-xs-5">
                        <input v-model="userInfo.phone" type="text" class="form-control input-sm">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">电子邮箱</label>
                    <div class="col-xs-5">
                        <input type="text" class="form-control input-sm">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">入职日期</label>
                    <div class="col-xs-5">
                        <input v-model="userInfo.joinDate" type="text" class="form-control input-sm">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-3 control-label">个人介绍</label>
                    <div class="col-xs-5 ckeditor">
                        <textarea v-model="userInfo.introduce" name="" rows="15" class="form-control input-sm"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-8">
                        <button class="btn btn-success btn-sm pull-right">保 存</button>
                        <a href="./repass.html" class="btn btn-link btn-sm pull-right">更改密码？</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import bus from '../bus'
    export default {
        data () {
            return {
                userInfo: {},
                region: ''
            }
        },
        beforeCreate () {

        },
        created () {
            this.getUserInfo()
            this.getRegion()
        },
        methods: {
            // 获取用户信息
            getUserInfo () {
                this.axios.get('http://bxg.huoqishi.net/userinfo').then(
                    res => {
                        if (res.data.errcode !== 0) {
                            return alert(res.data.errmsg)
                        }
                        this.userInfo = res.data.user
                        console.log(res.data.user)
                    }
                )
            },
            // 选择头像触发的事件
            upFile () {
                const fd = new FormData()
                fd.append('avatar', this.$refs.upfile.files[0])
                this.axios.post('http://bxg.huoqishi.net/avatar', fd).then(
                    res => {
                        if (res.data.errcode !== 0) {
                            return alert(res.data.errmsg)
                        }
                        // 传值
                        bus.$emit('avatar', res.data.avatar)
                        // 修改当前的值
                        this.userInfo.avatar = res.data.avatar
                    }
                )
            },
            // 表单中省市区的信息  因为内容几乎不变  考虑存储在本地
            getRegion () {
                // 控制是否发送请求
                if (!sessionStorage.getItem('region')) {
                    this.axios.get('http://bxg.huoqishi.net/region').then(
                        res => {
                            if (res.data.errcode !== 0) {
                                return alert(res.data.errmsg)
                            }
                            // 将数据存到session中
                            sessionStorage.setItem('region', JSON.stringify(res.data.region))
                            this.region = res.data.region
                        }
                    )
                }else {
                    this.region = JSON.parse(sessionStorage.getItem('region'))
                }
                
            }
        }
    }
</script>