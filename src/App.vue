<template>
    <div class="wrap" v-loading.fullscreen.lock="isLoading"  element-loading-text="数据拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.4)">
        <Nav></Nav>
        <Bread></Bread>
        <div id="contentApp" :style="{'minHeight':height}" :class="{'contentApp':true,'marginLeft':isBreadToggle}">
            <router-view name="body"></router-view>
            <!-- <div class="item">sdsfdsf</div> -->
        </div>
    </div>
</template>

<script>
import Nav from "@/component/nav";
import Bread from "@/component/bread";
import { mapGetters, mapActions } from "vuex";
import Store from '@/store/index'
import API from './api'
export default {
    data() {
        return {
            height: "",
        };
    },
    methods: {
        setHeight() {
            console.info(document.documentElement.clientHeight);
            this.height = document.documentElement.clientHeight - 80 + "px";
        }
    },
    components: {
        Nav,
        Bread
    },
    computed: {
        ...mapGetters(["isBreadToggle","isLoading"])
    },
    mounted() {
        window.addEventListener("resize", () => {
            this.setHeight();
        });
        this.setHeight();
        setTimeout ( () =>{
            this.loading2 = false
        },4000)
        API.GetLoginInfo()
    }
};
</script>

<style lang='less' scoped>
.contentApp {
    margin-top: 60px;
    margin-left: 200px;
    background-color: #fff;
    transition: all ease-in-out 0.3s;
    padding: 10px;
    .item {
        height: 600px;
    }
}
.marginLeft {
    margin-left: 64px !important;
}

</style>
