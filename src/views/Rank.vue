<template>
  <div class="rank">
      <Header></Header>
      <!-- <scroller  ref="myscroller"> -->
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
        <div class="rank-top">
          <template v-for="list in toList">
            <div @click="linkTo(list)">
              <div class="rank-content">
                <div class="top-img-wrap">
                  <img :src="list.src" alt="">
                  <p>{{list.num | one}}</p>
                </div>
                <div class="content-rg">
                    <h3 class="content-title">{{list.title}}</h3>
                    <p v-for="title in list.listTitle" :key="title.id">
                      <span>{{title.id}}</span>
                       &nbsp; {{title.titleOne}} &nbsp; 
                      <span>{{title.titleTwo}}</span>
                      <b class="arrow"></b>
                    </p>
                </div>
              </div>
            </div>
          </template>
        </div>
        <more></more> 
      </scroller>
     
  
  </div>
</template>
<script>
import Header from '../components/Header'
import more from '../components/more'
export default {
  data(){
    return{
      noData :'',
      toList:[
        {id:1,src:'./static/images/list-1.png',title:"安利XS·巅峰榜·流行指数",num:111121312,
        listTitle:[
          {titleOne:"PLANET",id:1,titleTwo:"- ラムジ (Lambsey)"},
          {titleOne:"全世界失眠(Live)",id:2,titleTwo:"- 张韶涵"},
          {titleOne:"我们之间",id:3,titleTwo:"- 冯提莫/孙子涵"},
          ]},
        {id:2,src:'./static/images/list-2.png',title:"安利XS·巅峰榜·流行指数",num:111121312,
        listTitle:[
          {titleOne:"PLANET",id:1,titleTwo:"- ラムジ (Lambsey)"},
          {titleOne:"全世界失眠(Live)",id:2,titleTwo:"- 张韶涵"},
          {titleOne:"我们之间",id:3,titleTwo:"- 冯提莫/孙子涵"},
          ]},
        {id:3,src:'./static/images/list-1.png',title:"安利XS·巅峰榜·流行指数",num:111121312,
        listTitle:[
          {titleOne:"PLANET",id:1,titleTwo:"- ラムジ (Lambsey)"},
          {titleOne:"全世界失眠(Live)",id:2,titleTwo:"- 张韶涵"},
          {titleOne:"我们之间",id:3,titleTwo:"- 冯提莫/孙子涵"},
          ]},
        {id:4,src:'./static/images/list-2.png',title:"安利XS·巅峰榜·流行指数",num:111121312,
        listTitle:[
          {titleOne:"PLANET",id:1,titleTwo:"- ラムジ (Lambsey)"},
          {titleOne:"全世界失眠(Live)",id:2,titleTwo:"- 张韶涵"},
          {titleOne:"我们之间",id:3,titleTwo:"- 冯提莫/孙子涵"},
          ]},
        {id:5,src:'./static/images/list-1.png',title:"安利XS·巅峰榜·流行指数",num:111121312,
        listTitle:[
          {titleOne:"PLANET",id:1,titleTwo:"- ラムジ (Lambsey)"},
          {titleOne:"全世界失眠(Live)",id:2,titleTwo:"- 张韶涵"},
          {titleOne:"我们之间",id:3,titleTwo:"- 冯提莫/孙子涵"},
          ]},
        {id:6,src:'./static/images/list-1.png',title:"安利XS·巅峰榜·流行指数",num:111121312,
        listTitle:[
          {titleOne:"PLANET",id:1,titleTwo:"- ラムジ (Lambsey)"},
          {titleOne:"全世界失眠(Live)",id:2,titleTwo:"- 张韶涵"},
          {titleOne:"我们之间",id:3,titleTwo:"- 冯提莫/孙子涵"},
          ]}
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
  methods:{
    linkTo:function(list){
      this.$router.push({
        name:'ListDetail',
        params:{id:list.id}
      })
    },
    infinite(done) {//往后刷新增加内容
      if(this.noData) {
        setTimeout(()=>{
          this.$refs.myscroller.finishInfinite(2);
        })
        return;
      }
      let self = this;//this指向问题
      let start = this.toList.length;
      setTimeout(() => {
        for(let i = start + 1; i < start + 3; i++) {
        let m= {id:i,src:'./static/images/list-6.png',
            title:"安利XS·巅峰榜·流行指数",num:111121312,
            listTitle:[
              {titleOne:"PLANET",id:i,titleTwo:"- ラムジ (Lambsey)"},
              {titleOne:"全世界失眠(Live)",id:i+1,titleTwo:"- 张韶涵"},
              {titleOne:"我们之间",id:i+2,titleTwo:"- 冯提莫/孙子涵"},
            ]}
          self.toList.push(m)
        }
        if(start > 8) {
          self.noData = "没有更多数据"
        }
        self.$refs.myscroller.resize();
          done()
      }, 1500)
    },
    refresh (done) {//往前刷新增加内容
        setTimeout(() => {
          var start = this.toList.length - 1
          for (var i = start; i > start - 3; i--) {
            let l= {id:i,src:'./static/images/list-8.png',
            title:"安利XS·巅峰榜·流行指数",num:111121312,
            listTitle:[
              {titleOne:"PLANET",id:i,titleTwo:"- ラムジ (Lambsey)"},
              {titleOne:"全世界失眠(Live)",id:i+1,titleTwo:"- 张韶涵"},
              {titleOne:"我们之间",id:i+2,titleTwo:"- 冯提莫/孙子涵"},
            ]}
            this.toList.splice(0, 0, l)
          }
          done()
        }, 1500)
    }

  },
  components:{
    Header,more
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .rank-top{
    padding:0 20/75rem 0 20/75rem;
    margin-top: 110/75rem;
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
          right:40/75rem;
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
          border-left-color: #000;
          right: -21/75rem;
        }
      }
    }
  }
</style>
