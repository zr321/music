<template>
  <div class="recommend">
      <Header></Header>
      <!-- 图片轮播 -->
      <div class="main">
          <swiper :options="swiperOption" class="mySwiper" rel="mySwiper">
            <swiper-slide data-swiper-autoplay="2000" 
             v-for="(slide,i) in sliderData" :key="slide.alt">
              <div @click="imgClick(i)">
                <a :href="i==0?cli1:i==1?cli2:i==2?cli3:i==3?cli4:cli5">
                <img :src="slide.src" :alt="slide.alt">
                </a>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
      </div>
      <!-- 电台 -->
      <div class="radio-wrap">
        <h3 class="sub-title">电台</h3>
        <dl v-for="item in radioImages" :key="item.alt" class="radio-hot">
          <dt>
            <img :src="item.src" :alt="item.alt">
          </dt>
          <dd class="item-bg"></dd>
          <dd class="item-title">{{item.title}}</dd>
        </dl>
      </div>
      <!-- 底部热门歌单 -->
      <div class="hot">
          <h3 class="hot-title">热门歌单</h3>
      </div>
      <!-- 底部客户端 -->
      <div class="client">
        <more></more>
        <p class="client-pc">查看电脑版本网页</p>
        <img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo_footer.png?max_age=19830212&d=20151105145423" alt="">
        <p class="client-bt-title">Copyright © 1998 - 2017 Tencent. All Rights Reserved.</p>
      </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import more from '../components/more'
export default {
  data(){
     return {
       radioImages:[
         {src:'./static/images/hot.png',alt:1,title:"热歌"},
         {src:'./static/images/sign.png',alt:2,title:"一人一首招牌歌"}
       ],
      cli1:'http://y.qq.com/m/act/sfhd/125.html?ADTAG=banner',
      cli2:'https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=545967',
      cli3:'https://y.qq.com/w/album.html?albummid=004dxCIB3ZssZK',
      cli4:'https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=572977',
      cli5:'https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=575250',
      swiperOption: {  
          pagination: {el: '.swiper-pagination',clickabel:true},
          loop: true,
          autoplay:true,
          autoplay: {disableOnInteraction: false}
          // speed: 400,
          // grabCursor: true,
          // setWrapperSize: true,
          // autoHeight: true,          
          // scrollbar: '.swiper-scrollbar',
          // mousewheelControl: true,
          // observeParents: true,
          // paginationClickable:true,
          // spaceBetween:10,
          // loopedSlides:10,
          // autoplayDisableOnInteraction : false
    },
        sliderData: [
          {src:"./static/images/1.png",alt:1,href:"www.baidu.com"},
          {src:"./static/images/2.png",alt:2,href:"www.baidu.com"},
          {src:"./static/images/3.png",alt:3,href:"www.baidu.com"},
          {src:"./static/images/4.png",alt:4,href:"www.baidu.com"},
          {src:"./static/images/5.png",alt:5,href:"www.baidu.com"}
        ]
     }
  },
  computed: {  
     
  },  
  mounted () {  
     
  },  
  methods:{
    // imgClick:function(i){
    //   this.$router.push({
    //     name:"RecommendSong",
    //     params:{title:i}
    //   })
    // }
  },
  components:{
    Header,
    swiper,
    swiperSlide,
    more
  }
}
</script>
<style rel="stylesheet/less" lang="less">
  .main{
    padding-top:90/75rem;
    box-sizing: border-box;
    .swiper-pagination {
			bottom:5/75rem;
    }
    .swiper-pagination-bullet-active{
      background-color: #fff;
    }
		.swiper-wrapper {
			img {
				width: 100%;
				display: block;
			}
    }
  }
  .radio-wrap{
    width:100%;
    box-sizing: border-box;
    padding:30/75rem 0 0 20/75rem;
    .sub-title{
      margin-bottom: 20/75rem;
      font-size: 32/75rem;
      font-weight: 400;
    }
    .radio-hot{
      box-sizing: border-box;
       width:50%;
       padding-right:20/75rem;
       display:inline-block;
       overflow: hidden;
       position: relative;
      img{
        width:100%;
        display: block;
      }
      .item-bg{
        position: absolute;
        width:48/75rem;
        height:48/75rem;
        bottom:100/75rem;
        right:50/75rem;
        background: url(data:image/png;base64,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) no-repeat;
        background-size: cover;
      }
      .item-title{
        display: block;
        height:60/75rem;
        background: #fff;
        padding:10/75rem 15/75rem;
        font-size: 30/75rem;
      }
    }
  }
  .hot{
    width:100%;
    padding:30/75rem 0 0 20/75rem;
    box-sizing: border-box;
    .hot-title{
      font-weight: 400;
      font-size: 32/75rem;
      margin-bottom: 20/75rem;
    }
  }
  .client{
    width:100%;
    text-align: center;
    .client-pc{
      width:100%;
      height:80/75rem;
      text-align: center;
      line-height: 80/75rem;
      font-size: 28/75rem;
      color:#000;
    }
    img{
      width:160/75rem;
      margin-top: 20/75rem;
    }
    .client-bt-title{
      font-size: 24/75rem;
      color:#626262;
      margin-top: 40/75rem;
      margin-bottom: 20/75rem;
    }
  }
</style>
