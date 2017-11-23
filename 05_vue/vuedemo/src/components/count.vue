<template>
    <div class="temp">
        <h2>{{msg}}</h2>
        <hr>
        <h3>{{$store.state.count}}</h3>
        <button @click="$store.commit('add', num)">count加加</button>
        <button @click="$store.commit('reduce', num)">count减减</button>
        <br>
        <button @click="add">增加</button>
        <button @click="reduce">减少</button>
    </div>
</template>

<script>
import store from '../store/store';
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
    data () {
        return {
            msg: "hello Vuex !!",
            num: 10
        }
    },
    store,
    // methods: mapMutations([
    //     'add', 'reduce'
    // ])
    methods: mapMutations([
        'add', 'reduce'
    ])
    // computed: {
    //     ...mapGetters(["count"])
    // }
}
</script>

<style>

</style>
