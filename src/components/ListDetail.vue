<template>
  <div>
    <div class="ListDetail">
        <img :src="bigImg" alt="" class="bigImgs">
        <div class="album-mask" :style="{color: transferColor}"></div>
        <div class="album-info">
          <div class="album-title">
            <h1 class="nowrap">安利XS·巅峰榜·流行指数</h1>
            <p class="nowrap">2018-02-01&nbsp;更新</p>
          </div>
          <div class="album-play"></div>
        </div>
    </div>
    <ul class="list" :style="{backgroundColor: transferColor}">
          <template >
            <router-link :to="{name:'songMusic',params:{song:this.perId}}">
            <li  class="song-list" v-for="u in ulList" :key="u.id">
              <h3 class="song-list-no">{{u.id}}</h3> 
              <a href="#" class="song-list-cont">
                <div>
                  <p class="song-name nowrap">{{u.titleOne}}</p> 
                  <p class="song-info nowrap"><!---->{{u.titleTwo}}
                    <span class="icon icon-point"></span>
                    {{u.titleThree}}
                    <span class="icon icon-point"></span>
                    {{u.title}}
                  </p>
                </div>
              </a>
            </li>
            </router-link>
          </template>
		</ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      perId:this.$route.params.id,
      bigImg:["./static/images/wuyuetian.png"],
      ulList:[
        {id:1,titleOne:"凉凉 (Live)",titleTwo:"杨幂",titleThree:"歌手第二季 ",title:"第4期"},
        {id:2,titleOne:"什么歌",titleTwo:"五月天 ",titleThree:"什么歌",title:"《捉妖记2》电影主题曲"},
        {id:3,titleOne:"白羊",titleTwo:"徐秉龙 ",titleThree:"沈以诚",title:"白羊"},
        {id:4,titleOne:"Besame Despacito (Live)",titleTwo:"张韶涵 ",titleThree:"歌手第二季",title:"第4期"},
        {id:5,titleOne:"没离开过",titleTwo:"张韶涵 ",titleThree:"没离开过",title:"《南极之恋》电影全球推广曲"},
        {id:6,titleOne:"布拉格广场 (Play World Tour Live)",titleTwo:"蔡依林 ",titleThree:"蔡依林",title:"Play世界巡回演唱会"}
      ]
    }
  },
  computed:{
    transferColor: function() {
				var t = this.color, computedColor;
				function n(t) {
					return t > 16 ? t.toString(16) : "0" + t.toString(16);
				}
				if (t) {
					var o = (16711680 & t) >> 16, a = (65280 & t) >> 8, i = 255 & t;
					var s = n(o) + n(a) + n(i);
					computedColor = '#' + s;
				} else {
					computedColor = '#0c6594';
				}
				return computedColor;
			}
  },
  methods:{
    // songMusic:function(){
    //   this.$router.push({
    //     name:'songMusic'
    //   })
    // }
  }
}
</script>
<style lang="less">
.ListDetail{
  position: relative;
  .bigImgs{
    display: block;
    width:100%;
  }
  
}
  .album-mask {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding-top: 60%;
			height: 0;
      z-index: 2;
      color:rgb(12, 101, 148);
			background-image: -webkit-linear-gradient(top,transparent,currentColor 80%);
  }
.album-info {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 3;
			display: -webkit-box;
			display: flex;
			-webkit-box-align: center;
		  -webkit-align-items: center;
      align-items: center;
      box-sizing: border-box;
			margin:0 35/75rem 45/75rem 35/75rem;
      color: #fff;
      
      .album-play{
        margin-left: 20/75rem;
        width: 80/75rem;
        height: 80/75rem;
        background: url(data:image/png;base64,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) no-repeat;
        background-size: cover;
      }
			.album-title {
				-webkit-box-flex: 1;
				-webklit-flex: 1;
				flex: 1;
				width: 0;
				line-height: .8rem;
				h1 {
					font-weight: normal;
					font-size: 48/75rem;
				}
				p {
					font-size: 28/75rem;
				}
			} 
}
.list {
    box-sizing: border-box;
		padding: 0 30/75rem;
    margin: 0;
    .song-name{
      font-size: 36/75rem;
      margin-bottom: 15/75rem;
    }
    .song-info{
      font-size: 28/75rem;
      padding-bottom: 10/75rem;
      color:hsla(0,0%,100%,.6);
      border-bottom:.5px solid #26759F;
      span{
        margin-left: 15/75rem;
      }
    }
    .song-list{
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      font-size: 32/75rem;
      height: 140/75rem;
      color: #fff;
      position: relative;
    }
    .song-list .song-list-no{
      -ms-flex: none;
      flex: none;
      width: 25/75rem;
      margin-right: 20/75rem;
      margin-top: -55/75rem;
      text-align: center;
      font-weight: 400;
      box-sizing: border-box;
      font-size: 32/75rem;
    }
  }
  .song-list .song-list-cont{
    -ms-flex: 1;
    flex: 1;
    width: 0;
    color: #fff;
    display: block;
  }
</style>
