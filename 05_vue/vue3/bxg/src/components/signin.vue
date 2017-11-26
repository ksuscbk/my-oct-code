<template>
    <div>
        <div class="login">
            <div class="login-wrap">
                <div class="avatar">
                    <img src="../assets/img/monkey.png" class="img-circle" alt="">
                </div>
                <form action="" class="col-xs-offset-1 col-xs-10">
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">
                            <i class="fa fa-user"></i>
                        </span>
                        <input id="name" type="text" class="form-control" placeholder="用户名" value="前端学院">
                    </div>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon">
                            <i class="fa fa-key"></i>
                        </span>
                        <input id="pass" type="password" class="form-control" placeholder="密码" value="123456">
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>