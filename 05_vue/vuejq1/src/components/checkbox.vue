<template>
    <div>
        <Checkbox-group :model.sync="social">
        <Checkbox value="twitter">
            <Icon type="social-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
            <Icon type="social-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
            <Icon type="social-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
            <Icon type="social-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </Checkbox-group>
    <Checkbox-group :model.sync="fruit">
        <Checkbox value="香蕉"></Checkbox>
        <Checkbox value="苹果"></Checkbox>
        <Checkbox value="西瓜"></Checkbox>
    </Checkbox-group>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果']
            }
        }
    }
</script>
