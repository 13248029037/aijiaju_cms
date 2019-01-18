<template>
    <div :class="{'bread_wrap':true,'isBreadToggle':isBreadToggle}">
        <span :class="{'grey':true,'iconfont':true,'icon-zuobian1':!isBreadToggle,'arron':true,'icon-youbian1':isBreadToggle}" @click="toggleBread"></span>
        <span class="iconfont icon-guanbi float logout"> 退出登录</span>
        <span class="float">
            <span class="welcome">hi!欢迎回来 </span>
            <span class="iconfont icon-ren"></span> 肖树林</span>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
        };
    },
    methods: {
        ...mapActions(["setIsBreadToggle"]),
        toggleBread() {
            this.setIsBreadToggle(!this.isBreadToggle);
        }
    },
    computed: {
        ...mapGetters(["isBreadToggle"])
    },
    components: {},
    mounted() {
        console.info(this.setIsBreadToggle);
    }
};
</script>

<style lang='less' scoped>
.bread_wrap {
    position: fixed;
    top: 0px;
    left: 200px;
    height: 60px;
    right: 0px;
    background-color: #fff;
    transition: all ease-in-out 0.3s;
    padding-right: 50px;
    box-shadow:0px 1px 5px #ccc;
    .arron {
        display: inline-block;
        width: 50px;
        height: 100%;
        line-height: 50px;
        font-size: 30px;
        cursor: pointer;
    }
    .float {
        float: right;
        margin-top: 24px;
        margin-right: 16px;
        color: #924b29;
        .welcome {
            font-size: 14px;
            margin-right: 20px;
        }
    }
    .logout {
        cursor: pointer;
    }
}
.isBreadToggle {
    left: 64px;
    transition: all ease-in-out 0.3s;
}
.grey {
    color: #ddd;
    padding-left: 5px;
}
</style>
