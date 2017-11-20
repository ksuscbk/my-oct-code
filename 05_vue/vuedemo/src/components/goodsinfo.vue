<template>
    <div class="temp">
        <!-- 轮播图 -->
        <lunbo :lunboData="goodsInfoData"></lunbo>
        <!-- 商品描述 -->
        <div class="title">
            <h3>{{goodsDesData.title}}</h3>
            <div class="price">
                <div>折扣价：￥{{goodsDesData.sell_price}}</div>
                <del>原价:￥{{goodsDesData.market_price}}</del>
            </div>
            <div class="number">
                购买数量:
                <!-- {{goodsDesData.number}} -->
                <num v-on:productNum="getNumber"></num>
                <!-- 动画 -->
                <transition>
                    <div v-if="isShow" class="ball"></div>
                </transition>
                <div class="ball" v-if="isShow"></div>
            </div>
            
            <div class="btn">
                <mt-button type="primary" size="small" >立即购买</mt-button>
                <mt-button type="danger" size="small" @click="shoppingCar">加入购物车</mt-button>
            </div>

            <div class="info">
                商品参数:
                <div>
                    <ul>
                        <li>商品货号:{{goodsDesData.good_no}}</li>
                        <li>库存情况:{{goodsDesData.stock_quantity}}</li>
                        <li>上架时间:{{goodsDesData.add_time | getTime('YYYY-MM-DD')}}</li>
                    </ul>
                </div>
            </div>

            <div class="btns">
                <mt-button plain type="primary" size="large" @click="goToDesc">图文介绍</mt-button>
                <mt-button class="bottomBtn" plain type="danger" size="large" @click="goToComment">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import lunbo from './son/lunbo.vue';
import tools from '../tools/tools';
import num from './son/num.vue';
import {setInfo} from '../tools/localStorage';
import {bus} from '../tools/bus';
export default {
    data () {
        return {
            goodsInfoData: [],
            goodsDesData: {},
            productNum: 1,
            isShow: true
        }
    },
    created () {
        var id = this.$route.params.id;
        this.getGoodsInfoData(id);
        this.getGoodsDesData(id);
    },
    components: {
        lunbo,
        num
    },
    methods: {
        // 请求商品轮播图数据
        getGoodsInfoData (id) {
            var url = `${tools.HTTP}${tools.SERVER_PATH}/api/getthumimages/${id}`
            this.$http.get(url).then(
                res => {
                    this.goodsInfoData = res.body.message;
                    // console.log(res);
                },
                res => {
                    console.log("请求商品详情页轮播图数据出错");
                }
            )
        },

        // 请求商品描述信息
        getGoodsDesData (id) {
            var url = `${tools.HTTP}${tools.SERVER_PATH}/api/goods/getinfo/${id}`
            this.$http.get(url).then(
                res => {
                    this.goodsDesData = res.body.message[0];
                },
                res => {
                    console.log("请求商品描述信息出错");
                }
            )            
        },

        getNumber (productNum) {
        // 将接收到的当前产品数重置
            this.productNum = productNum
        },
        // 跳转到desc页面的方法
        goToDesc () {
            var descId = this.$route.params.id
            this.$router.push(
                {name: 'goodsdesc', params: {id: descId}}
            )
        },

        // 跳转到商品评论页面
        goToComment () {
            var goodsId = this.$route.params.id
            this.$router.push({
                name: 'comment',
                params: {id: goodsId}
            })
        },
        shoppingCar () {
            // 存数据到本地缓存中
            var id = this.$route.params.id;
            var count = this.productNum;
            var data = {'goodsid': id, "count": count}
            setInfo(data);

            // 小球显示
            this.isShow = true;

            // 更改购物车中物品的值
            bus.$emit('shopCount', this.productNum);
        },
        // vue中的动画的钩子方法
        beforeEnter: function (el) {
            el.style.transform = "translate3d(0, 0, 0)"
        },
        enter: function (el, done) {
            var width = el.offsetWidth;
            el.style.transform = 'translate3d(-40px, 320px, 0)';
            done();
        },
        afterenter: function () {
            this.isShow = !this.isShow;
        }

    }
}
</script>

<style scoped>
    .info ul{
        list-style: none;
        color:rgba(1,1,1,0.6);
    }
    .title {
        background-color: #fff;
        padding: 10px 0;
    }
    .price, .btn {
        display: flex;
        justify-content: space-around;
        padding: 5px 0;
    }
    h3 {
        font-size: 20px;
        text-align: center;
        margin: 5px auto;
    }

    .number {
        display: flex;
        justify-content: space-around;
    }
    /* 小球 */
    .ball {
        position: absolute;
        right: 100px;
        top: 0px;
        width: 35px;
        height: 35px;
        background-color: orangered;
        border-radius: 50%;
        transition: all 1s cubic-bezier(1,-1.07,.9,.31)
    }
</style>
