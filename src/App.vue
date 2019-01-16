<template>
    <div class="wrap">
        <Nav></Nav>
        <Bread></Bread>
        <div id="contentApp"  :class="{'marginLeft':isBreadToggle}" :style="{'minHeight':height}">
            <router-view name="body"></router-view>
            <!-- <div class="item">sdsfdsf</div> -->
        </div>

    </div>

</template>

<script>
import Nav from '@/component/nav'
import Bread from '@/component/bread'
import {mapGetters,mapActions} from 'vuex'
export default {
    data() {
        return {
            height:''
        }
    },
    methods:{
        setHeight () {
            console.info(document.documentElement.clientHeight)
           this.height =  document.documentElement.clientHeight - 80 +'px'
        }
    },
    components: {
        Nav,
        Bread
    },
    computed: {
        ...mapGetters(['isBreadToggle'])
    },
    mounted() {
        window.addEventListener('resize',()=>{
            this.setHeight()
        })
        this.setHeight();
    }
};
</script>

<style lang='less' scoped>
#contentApp{
    margin-top: 60px;
    margin-left:200px;
    background-color: #fff;
    transition: all ease-in-out .3s;
    padding:10px;
    .item{
        height:600px;
    }
}
.marginLeft{
      margin-left:64px;
}
</style>
