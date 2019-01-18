<template>
    <div :class="{'nav_wrap':true,'topnav_box':true,'isBreadToggle':isBreadToggle}">
        <div class="home">
            <span class="iconfont icon-home icon"></span>
            <span :class="{'text':true,'diappear':isBreadToggle}">爱回收</span>
        </div>
        <el-menu @select="handleSelect" :unique-opened="true" text-color="#b4b7ba" background-color="#06152a" default-active="1-1" class="el-menu-vertical-demo" :collapse="isBreadToggle">
            <el-submenu :key="item.index" :index="item.index" v-for="item in (config.nav || [])">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title" class="nav_title">{{item.nav_title}}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item :key="subItem.index" v-for="subItem in item.nav_subs" :path="item.path" :index="subItem.index">
                        <span class="sub_title">{{subItem.sub_title}}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import config from "@/config";
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            isCollapse: false,
            config
        };
    },
    methods: {
        handleSelect (node,arr) {
            console.info(node,'node')
            // console.info(ff,'ff')
            config.nav.forEach(item => {
                if(item.index==arr[0]){
                    item.nav_subs.forEach(value =>{
                        if(value.index == arr[1]){
                            this.$router.push(value.path)
                        }
                    })
                }
            });
        }
    },
    computed: {
        ...mapGetters(["isBreadToggle"])
    }
};
</script>
<style lang='less' scoped>
.home {
    height: 60px;
    .icon {
        display: inline-block;
        width: 64px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 30px;
        color: #f6b01c;
    }
    @keyframes mymove {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(200);
        }
    }
    .text {
        color: #b4b7ba;
        font-size: 22px;
    }
    .diappear {
        animation: mymove 5s;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.nav_title {
    font-size: 16px;
}
.sub_title {
    font-size: 15px;
}
.nav_wrap {
    position: fixed;
    top: 0px;
    width: 200px;
    bottom: 0px;
    left: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all ease-in-out 0.3s;
    background-color: #08152a;
}
.isBreadToggle {
    width: 64px;
}
</style>
