<template>
    <div>
        <div class="login">
            <div class="login-wrap">
                <div class="avatar">
                    <img src="../assets/img/monkey.png" class="img-circle" alt="">
                </div>
                <form @submit.prevent="submit" class="col-xs-offset-1 col-xs-10">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">
                            <i class="fa fa-user"></i>
                        </span>
                        <input v-model="user.username" id="name" type="text" class="form-control" placeholder="用户名" value="前端学院">
                    </div>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">
                            <i class="fa fa-key"></i>
                        </span>
                        <input v-model="user.password" id="pass" type="password" class="form-control" placeholder="密码" value="123456">
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: {
                username: '前端学院',
                password: '123456'
            }
        }
    },
    methods: {
        submit () {
            this.axios.post('http://bxg.huoqishi.net/signin', this.user).then(
                res => {
                    if (res.data.errcode !== 0) {
                        return alert(res.data.errmsg)
                    }
                    // 存数据
                    localStorage.setItem('userinfo', JSON.stringify(res.data.user))
                    this.$router.push({name: 'home'})
                }
            )
        }
    }
}
</script>

<style>

</style>