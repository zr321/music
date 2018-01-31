<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'lib-flexible'
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="less" rel="stylesheet/less">
html,body{
  width:100%;
  color: #000;
  background: #F4F4F4;
}
*{
  margin:0;padding:0;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
#app{
  width:100%;
}

</style>
