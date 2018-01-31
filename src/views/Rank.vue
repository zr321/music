<template>
  <div class="rank">
      <Header></Header>
      <div class="rank-top">
          <template v-for="list in toList">
            <router-link :to="{name:'ListDetail',params:{id:list.id}}">
              <div class="rank-content">
                <div class="top-img-wrap">
                  <img :src="list.src" alt="">
                  <p>{{list.num | one}}</p>
                </div>
                <div class="content-rg">
                    <h3 class="content-title">{{list.title}}</h3>
                    <p v-for="title in list.listTitle">
                      <span>{{title.id}}</span>
                       &nbsp; {{title.titleOne}} &nbsp; 
                      <span>{{title.titleTwo}}</span>
                      <b class="arrow"></b>
                    </p>
                </div>
              </div>
            </router-link>
          </template>
      </div>
      <more></more>
  </div>
</template>
<script>
import Header from '../components/Header'
import more from '../components/more'
export default {
  data(){
    return{
      toList:[
        {id:1,src:'../../static/images/list-1.png',title:"安利XS·巅峰榜·流行指数",num:111121312,
        listTitle:[
          {titleOne:"PLANET",id:1,titleTwo:"- ラムジ (Lambsey)"},
          {titleOne:"全世界失眠(Live)",id:2,titleTwo:"- 张韶涵"},
          {titleOne:"我们之间",id:3,titleTwo:"- 冯提莫/孙子涵"},
          ]},
        {id:2,src:'../../static/images/list-2.png',title:"巅峰榜·热歌",num:232413124,
        listTitle:[
          {titleOne:"等你下课(with 杨瑞代)",id:1,titleTwo:"- 周杰伦"},
          {titleOne:"体面",id:2,titleTwo:"- 于文文"},
          {titleOne:"说散就散",id:3,titleTwo:"- 袁娅维"},
          ]},
        {id:3,src:'../../static/images/list-2.png',title:"巅峰榜·热歌",num:232413124,
        listTitle:[
          {titleOne:"等你下课(with 杨瑞代)",id:1,titleTwo:"- 周杰伦"},
          {titleOne:"体面",id:2,titleTwo:"- 于文文"},
          {titleOne:"说散就散",id:3,titleTwo:"- 袁娅维"},
          ]},
        {id:4,src:'../../static/images/list-2.png',title:"巅峰榜·热歌",num:232413124,
        listTitle:[
          {titleOne:"等你下课(with 杨瑞代)",id:1,titleTwo:"- 周杰伦"},
          {titleOne:"体面",id:2,titleTwo:"- 于文文"},
          {titleOne:"说散就散",id:3,titleTwo:"- 袁娅维"},
          ]},
        {id:5,src:'../../static/images/list-2.png',title:"巅峰榜·热歌",num:232413124,
        listTitle:[
          {titleOne:"等你下课(with 杨瑞代)",id:1,titleTwo:"- 周杰伦"},
          {titleOne:"体面",id:2,titleTwo:"- 于文文"},
          {titleOne:"说散就散",id:3,titleTwo:"- 袁娅维"},
          ]},
        {id:6,src:'../../static/images/list-2.png',title:"巅峰榜·热歌",num:232413124,
        listTitle:[
          {titleOne:"等你下课(with 杨瑞代)",id:1,titleTwo:"- 周杰伦"},
          {titleOne:"体面",id:2,titleTwo:"- 于文文"},
          {titleOne:"说散就散",id:3,titleTwo:"- 袁娅维"},
          ]},
      ]
    }
  },
  filters:{
    one:function(n){
      if(n){
        return (n/10000).toFixed(2)+"万"
      }
    }
  },
  components:{
    Header,more
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .rank-top{
    padding:90/75rem 20/75rem 20/75rem 20/75rem;
    .rank-content{
      width:100%;
      box-sizing: border-box;
      background: #fff;
      margin:20/75rem 0;
      height:200/75rem;
      overflow: hidden;
      position: relative;
      .top-img-wrap{
        width:200/75rem;
        height:100%;
        position: relative;
        margin-right:20/75rem;
        display: inline-block;
        p{
          position: absolute;
          bottom:5/75rem;
          left:25/75rem;
          color:#a8a8a3;
        }
        img{
          display: block;
          width:100%;
          height:100%;
        }
      }
      .content-rg{
        display: inline-block;
        padding-right:20/75rem;
        // width:64%;
        vertical-align: top;
        .content-title{
          color:#000;
          margin:10/75rem 0 20/75rem 0;
        }
        p{
          height:40/75rem;
          font-size: .35rem;
          line-height: 40/75rem;
          color:#000;
          span{
            color:#7F7F7F;
          }
        }
        .arrow{
          position: absolute;
          top:50%;
          right:65/75rem;
        }
        .arrow:after, .arrow:before {
          border: 10/75rem solid transparent;
          border-left: 10/75rem solid #fff;
          width: 0;
          height: 0;
          position: absolute;
          top: 0;
          right: -20/75rem;
          content: ' '
        }

        .arrow:before {
          border-left-color: #7f7f7f;
          right: -21/75rem;
        }
      }
    }
  }
</style>
