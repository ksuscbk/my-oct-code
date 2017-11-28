<template>
    <div>
        <!-- 侧边栏 -->
        <div class="aside">
            <!-- 个人资料 -->
            <div class="profile">
                <!-- 头像 -->
                <div class="avatar img-circle">
                    <img :src="user.avatar">
                </div>
                <h4>{{user.username}}</h4>
            </div>
            <!-- 导航菜单 -->
            <div class="navs">
                <ul class="list-unstyled">
                    <li>
                        <router-link :to="{name: 'dashboard'}" class="active">
                            <i class="fa fa-home"></i>
                            仪表盘
                        </router-link>
                    </li>
                    <li>
                        <a href="../user/list.html">
                            <i class="fa fa-bell"></i>
                            用户管理
                        </a>
                    </li>
                    <li>
                        <a href="../teacher/list.html">
                            <i class="fa fa-bell"></i>
                            讲师管理
                        </a>
                    </li>
                    <li>
                        <a @click="isShowCourse = !isShowCourse" href="javascript:;">
                            <i class="fa fa-cog"></i>
                            课程管理
                            <i class="arrow fa fa-angle-right"></i>
                        </a>
                        <ul v-show="isShowCourse" class="list-unstyled">
                            <li>
                                <a href="../course/add.html">
                                    课程添加
                                </a>
                            </li>
                            <li>
                                <a href="../course/list.html">
                                    课程列表
                                </a>
                            </li>
                            <li>
                                <a href="../course/category.html">
                                    课程分类
                                </a>
                            </li>
                            <li>
                                <a href="../course/topic.html">
                                    课程专题
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="../advert/list.html">
                            <i class="fa fa-bell"></i>
                            广告管理
                        </a>
                    </li>
                    <li>
                        <a @click="isShowSystem = !isShowSystem" href="javascript:;">
                            <i class="fa fa-cog"></i>
                            系统设置
                            <i class="arrow fa fa-angle-right"></i>
                        </a>
                        <ul v-show="isShowSystem" class="list-unstyled">
                            <li>
                                <a href="javascript:;">
                                    网站设置
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    权限管理
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 主体 -->
        <div class="main">
            <div class="container-fluid">
                <!-- 头部 -->
                <div class="header">
                    <nav class="navbar navbar-custom">
                        <div class="navbar-header">
                            <a href="javascript:;" class="navbar-brand">
                                <i class="fa fa-navicon"></i>
                            </a>
                        </div>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="javascript:;">
                                    <i class="fa fa-bell"></i>
                                    <span class="badge">8</span>
                                </a>
                            </li>
                            <li>
                                <router-link to="/center">
                                    <i class="fa fa-user"></i>
                                    个人中心
                                </router-link>
                            </li>
                            <li>
                                <a @click.prevent="logout">
                                    <i class="fa fa-sign-out"></i>
                                    退出
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="fa fa-tasks"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!-- 个人资料 -->
                <router-view>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '../bus.js'
export default {

    data () {
        return {
            user: {},
            isShowCourse: false,
            isShowSystem: false
        }
    },
    watch: {
        // 方法名和要监视的属性名要一致
        // isShowCourse 改变时触发的方法
        isShowCourse () {
            // console.log(this.isShowCourse)
            localStorage.setItem('isShowCourse', this.isShowCourse)
        },
        isShowSystem () {
            localStorage.setItem('isShowSystem', this.isShowSystem)
        }
    },
    created () {
        bus.$on('avatar', (img) => {
            // alert(img)
            this.user.avatar = img
            // 把头像保存到本地存储
            localStorage.setItem('userinfo', JSON.stringify(this.user))
        })
        // 查询本地用户登陆信息
        this.readUserInfo()
        // 查询是否登录
        this.isSignIn()
    },
    methods: {
        // 获取本地登录信息
        readUserInfo () {
            // 获取本地存储信息
            this.user = JSON.parse(localStorage.getItem('userinfo') || '{}')
        },
        // 查询是否登陆
        isSignIn () {
            this.axios.get('http://bxg.huoqishi.net/user/status').then(
                res => {
                    if (res.data.errcode !== 0) {
                        alert(res.data.errmsg)
                        this.$router.push({name: 'signin'})
                        return
                    }
                }
            )
        },
        // 退出
        logout () {
            this.axios.post('http://bxg.huoqishi.net/signout').then(
                res => {
                    if (res.data.errcode !== 0) {
                        return alert(res.data.errmsg)
                    }
                    alert('退出成功')
                    this.$router.push({name: 'signin'})
                }
            )
        }
    }
}
</script>
