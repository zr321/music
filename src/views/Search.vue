<template>
  <div class="search">
      <Header></Header>
      <div class="search-wrap">
        <form>
          <span class="search-logo"></span>
          <input type="text" placeholder="搜索歌曲、歌单、专辑" 
          @blur="inputQuXiao" v-model.trim="keyword" 
          @focus="inputFocus" :style="{width:inputWidth}">
          <span v-if="focusFlag" @click="close" class="search-cha">×</span>
          <div class="search-btn" v-if="focusFlag">搜索</div>
        </form>
      </div>
      <div class="search-hot" v-if="searchFlag">
        <div class="searchBox" v-if="focusFlag == false">
          <h3 class="search-hot-title">热门搜索</h3>
          <div class="search-div">
            <span v-for="(g,i) in hotSearch"  @click="emitKeyword"
            :class="{highlight:i==0}" class="search-span">{{g.title}}</span>
          </div>
        </div>
      </div>
      <div v-else="searchFlag">
          <div class="exit">
              <ul>
                <li v-for="h in histotyFlag">{{h}}</li>
                <p class="exit-p" @click="clearFlag">清空历史记录</p>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
import Header from '../components/Header'
export default {
  data(){
    return{
      focusFlag: false, // 输入框获取标志位，默认false
      histotyFlag:[],
      searchFlag:true,
      keyword: '', // 用户输入的搜索词
      inputWidth:"100%",
      hotSearch:[
        {id:1,title:"梦想的声音第二季"},
        {id:2,title:"说散就散"},
        {id:3,title:"空空如也"},
        {id:4,title:"等你下课"},
        {id:5,title:"我们不一样"},
        {id:6,title:"PLANET"},
        {id:7,title:"像我这样的人"},
        {id:8,title:"故事与她"},
        {id:9,title:"普通DISCO"},
        {id:10,title:"TFBOYS"},
        {id:11,title:"JUST LIKE THIS"},
        {id:12,title:"专属情歌"},
        {id:13,title:"少林英雄"},
        {id:14,title:"PSYCHO"},
        {id:15,title:"神秘巨星"}
      ]
    }
  },
  methods:{
    inputFocus:function(){
      this.focusFlag=true;
      this.inputWidth="85%";
      this.searchFlag=false;
    },
    inputQuXiao:function(){
      this.focusFlag=false;
      this.inputWidth="100%";
      this.keyword="";
      this.searchFlag=true
    },
    emitKeyword: function (event) {
      this.keyword = event.target.innerText;
      localStorage.setItem("histroy",this.keyword);
      this.histotyFlag.unshift(localStorage.getItem("histroy"));
      this.inputFocus();
    },
    clearFlag:function(){
      localStorage.removeItem('histroy');
      this.histotyFlag=[];
      this.keyword="";
    },
    close:function(){
      this.inputQuXiao();
    }
  },
  components:{
    Header
  }
}
</script>
<style lang="less">
  .search-wrap{
    margin-top: 90/75rem;
    form{
      width:100%;
      padding:20/75rem 20/75rem;
      box-sizing: border-box;
      position: relative;
      .search-btn{
        display: inline-block;
        padding:0 15/75rem;
        font-size: 28/75rem;
        line-height: 40/75rem;
        color:#555;
      }
      .search-logo{
        position: absolute;
        width:40/75rem;
        height:40/75rem;
        top:33%;
        text-align: center;
        left:35/75rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJlSURBVFhH7ZfRShRRHMb3Jkqzm7wJSrqIIDBxX6C0a62H6C7oqq4ixYreQMmMHkXbjLQeIYgyQuqiyIuotKDt923fyLCszv/MzF5EDnzs2T3/7zffOXNm5myjcXDUOAOtVquJ7qOn6AP6ZamtQ33NGk/ZG8VJJtEaagf1XJ7agwEdRI9zIT7RnkdT6Iz7VaO2flPf51z9I9oDtQQDNIxeGv6Nz9voaBFcNa79bu8LsYp8+/Z75FmYN3w/nwqUB204lFiDqYzd+txlek37RFkQ3pNIjDZaKsXBeMkATfloKUjOBGMMifUbXUzmYVp3oFvJ5j0M8GbNXEtiYtJzRtOru6lwAUfhsIZQdveNR30NTPccaD5sChbCXTD7btDSUCAdmqGpsClYCHPa7CdBSyeQXgEKNBI2BQthnjX7Y9DSCfTTpkNhU7AQ7jGzd4KWvgc67EDbKYH6eclOO9BmSqBsUU+HTcFCwJcdaCVo6Vyy7LZfCJuChbAfONCdoKUTKHsw6iE2FDYWFIqFthxoLImLSZsr3fqzScZ9isUyczWZiXEC6UWoF2LaaHqcDcY4+mHmheRAMmBe8oje8nmqFOQvZwS9N2uxLEcgbUuzDdpGmZnyzLxzGG3yqm1lARxH2VZEUz6DChc6NXoia83I087pRukZyozAjqCHvv6Cf0GL6Ao655MrgNr6TX1bDqF1qO/Xcv7qobymJoA+6xpxfvTd7VVqdxcw7au1h3IwbUfn0DJ6hb6ibbSJVtzX8w9B30JVWQf/QqibVQZYm7drpg5C7TmzuZnSI6JZ2yWoAnKo61UY/5f3Dy7dC4CdAEhQAAAAAElFTkSuQmCC) no-repeat;
        background-size: cover;
      }
      .search-cha{
        position: absolute;
        width:40/75rem;
        height:40/75rem;
        left: 75%;
        top:33%;
        background: #B1B1B1;
        border-radius: 50%;
        color:#fff;
        font-size: 40/75rem;
        text-align: center;
        line-height: 40/75rem; 
      }
      input{
        outline: none;
        border: none;
        height:75/75rem;
        line-height: 1rem;
        font-size: 26/75rem;
        padding-left:70/75rem;
        box-sizing: border-box;
      }
    }
  }
  .search-hot{
    background: #fff;
    .searchBox{
      padding:30/75rem;
    }
    .search-hot-title{
      color:#666;
      margin-bottom:15/75rem;
    }
    .search-span{
      display: inline-block;
      padding:10/75rem 15/75rem;
      margin:0 30/75rem 25/75rem 0;
      font-size: 28/75rem;
      border:1px solid #666;
      border-radius: .7rem;
    }
    .highlight{
      border:1px solid #FC4524;
      color:#FC4524;
    }
  }
  .exit{
    ul{
      box-sizing: border-box;
      width:100%;
      li{
        padding-left:60/75rem;
        height:120/75rem;
        line-height: 120/75rem;
        background: #fff;
        font-size: 32/75rem;
        border-bottom:1px solid #EBEBEB;
      }
      .exit-p{
        color:#47C88A;
        text-align: center;
        height:100/75rem;
        line-height: 100/75rem;
        background: #fff;
        font-size: 32/75rem;
      }
    }
  }
</style>
