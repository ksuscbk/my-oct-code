<template>
    <div>
        <div @click="minus" class="left">-</div>
        <div class="middle">
            {{num}}
        </div>
        <div @click="add" class="right">+</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            num: 1
        }
    },
    methods: {
        add () {
                this.num++
                this.submitNum()
        },
        minus () {
            if (this.num < 1) {
                return
            }
            if (this.num > 1) {
                this.num--
                this.submitNum()
            }
        },
        submitNum () {
            this.$emit('productNum', this.num)
        }
    }
}
</script>

<style scoped>
    div {
        display: inline-block;
        background-color: #fff;
        text-align: center;
    }
    .left, .right {
        width: 30px;
        font-size: 20px;
    }
    .middle {
        width: 40px;
        background-color: orange;
        color: red;
    }
</style>
