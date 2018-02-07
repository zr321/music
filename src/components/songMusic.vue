<template>
    <div class="hello" :style="'height:'+height+';width:100%'">
      <img :src="Liang" alt="">
      <div class="c">
          <div class="tc font30 mb15">{{g}}</div>
      </div>
      <audio id="player" :src="file" autoplay controls>
      您的浏览器不支持 audio 标签。
      </audio>
  </div>
</template>
<script>
export default {
  data(){
      return{
        g:'',
        gd:{
            up:null,
            down:null
        },
        p:null,
        file: './static/images/ll.mp4',
        Liang:"./static/images/ditie.png",
        lrc: `[00:00.00]
        [00:01.78]杨宗纬&张碧晨 - 凉凉
        [00:02.88]电视剧《三生三世十里桃花》片尾曲
        [00:04.04]作词：刘畅
        [00:05.30]作曲：谭旋
        [00:06.46]编曲：韦国赟
        [00:48.24]女：入夜渐微凉
        [00:51.47]繁花落地成霜
        [00:53.04]你在远方眺望
        [00:55.37]耗尽所有暮光
        [00:58.42]不思量自难相忘
        [01:09.55]男：夭夭桃花凉
        [01:11.53]前世你怎舍下
        [01:14.22]这一海心茫茫
        [01:17.11]还故作不痛不痒不牵强
        [01:24.47]都是假象
        [01:30.74]女：凉凉夜色为你思念成河
        [01:36.13]化作春泥呵护着我
        [01:41.45]男：浅浅岁月拂满爱人袖
        [01:46.00]片片芳菲入水流
        [01:52.35]女：凉凉天意潋滟一身花色
        [01:57.40]落入凡尘伤情着我
        [02:02.76]男：生劫易渡情劫难了
        [02:06.22]折旧的心还有几分前生的恨
        [02:13.63]还有几分
        [02:17.58]合：前生的恨
        [02:43.08]女：也曾鬓微霜
        [02:44.90]也曾因你回光
        [02:47.45]悠悠岁月漫长
        [02:50.17]怎能浪费时光
        [02:52.98]去流浪
        [02:54.27]男：去流浪
        [02:57.47]女：去换成长
        [03:04.24]男：灼灼桃花凉
        [03:06.24]今生愈渐滚烫
        [03:08.73]一朵已放心上
        [03:11.39]足够三生三世背影成双
        [03:16.51]女：背影成双
        [03:18.87]男：在水一方
        [03:25.34]女：凉凉夜色为你思念成河
        [03:30.84]化作春泥呵护着我
        [03:36.12]男：浅浅岁月拂满爱人袖
        [03:40.53]片片芳菲入水流
        [03:47.14]女：凉凉天意潋滟一身花色
        [03:52.13]落入凡尘伤情着我
        [03:57.43]男：生劫易渡情劫难了
        [04:01.36]折旧的心还有几分前生的恨
        [04:16.20]女：凉凉三生三世恍然如梦
        [04:21.36]须臾的年风干泪痕
        [04:26.66]男：若是回忆不能再相认
        [04:31.16]就让情分落九尘
        [04:37.58]女：凉凉十里何时还会春盛
        [04:42.79]又见树下一盏风存
        [04:48.11]男：落花有意流水无情
        [04:51.72]别让恩怨爱恨凉透那花的纯
        [05:01.69]合：吾生愿牵尘
        [05:14.78]
        [05:16.25]我爱歌词网 www.5ilrc.com
        [05:17.49]歌词编辑：黎起铮
        [05:18.77]QQ：20891372
        [05:20.14]`,
        lrcObj:null,
        height:'auto'
      }
  },
 mounted(){
    this.p = document.querySelector("#player")
    let _this = this;
    this.lrcObj = this.jx();
    console.log(this.lrcObj);
    this.p.addEventListener("timeupdate",function(){
      let obj = _this.lrcObj[Math.floor(this.currentTime)];
      if(obj!=undefined){
        _this.g = obj;
      }
    });
    this.height =window.innerHeight+'px'
    window.onresize  = ()=>{
      _this.height =window.innerHeight+'px'
    }
  },
  methods:{
    jx(){
      var lyrics = this.lrc.split("\n");
      var lrcObj = {};
      for(var i=0;i<lyrics.length;i++){
          var lyric = decodeURIComponent(lyrics[i]);
          var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
          var timeRegExpArr = lyric.match(timeReg);
          if(!timeRegExpArr)continue;
          var clause = lyric.replace(timeReg,'');
          for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
              var t = timeRegExpArr[k];
              var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                  sec = Number(String(t.match(/\:\d*/i)).slice(1));
              var time = min * 60 + sec;
              lrcObj[time] = clause;
          }
      }
      return lrcObj;
    }
  }
}
</script>
<style lang="less">
.hello{
    img{
        width:100%;
        height:100%;
        display: block;
    }
}
#player{
    position:fixed;
    bottom:0;
    width:100%;
    display: block;
    z-index: 2;
}
.c{
  position:fixed;
  top:100/75rem;
  left: 0;
  bottom:0;
  right: 0;
  margin:auto;
  color: #FF00FF ;
  z-index: 1;
}
.tc{
  text-align: center;
  margin:0 auto;
}
.mb15{
  margin-bottom: 20/75rem;
}
.font40{
  font-size: 1rem;
}
.font30{
  font-size: 40/75rem;
}
</style>
