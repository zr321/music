<template>
  <div class="header">
    <div class="header-a">  
        <router-link :to="{name:'recommend'}" :class="{'active' :curTab == 0}"><span @click="changeTab(0)">推荐</span></router-link>
		<router-link :to="{name:'rank'}" :class="{'active' :curTab == 1}"><span @click="changeTab(1)">排行榜</span></router-link>
		<router-link :to="{name:'search'}" :class="{'active' :curTab == 2}"><span @click="changeTab(2)">搜索</span></router-link>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data(){
      return{
          
      }
  },
  methods:{
      ...mapMutations(["changeTab"])
  },
  computed:{
      ...mapState(["curTab"])
  }
}
</script>
<style scoped lang="less" rel="stylesheet/less">
@height-a:90/75rem;
@font-a:32/75rem;
@aWidth:100/3%;
    .header{
        position:fixed;
        top:0;
        width:100%;
        height: @height-a;
        line-height: @height-a;
        background:#fff;
        color:#666666;
        z-index: 10;
    }
    .header-a{
        font-size: 0;
    }
    a{
        display: inline-block;
        width:@aWidth;
        color:#666;
        font-size:@font-a;
        text-align: center;
		span {
			display: block;
		}
    }
    .active{
        color:#31c27c;
        border-bottom:1px solid #31c27c;
    }
</style>
