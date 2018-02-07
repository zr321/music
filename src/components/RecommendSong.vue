<template>
  <div class="song">
      当前轮播图的歌曲:传过来的第{{title}}张图片！
  </div>
</template>
<script>
export default {
  data(){
      return{
          title:this.$route.params.title
      }
  }
}
</script>
