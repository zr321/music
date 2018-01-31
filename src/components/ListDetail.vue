<template>
  <div class="ListDetail">
      传了一个参数过来：{{id}}
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:this.$route.params.id
    }
  }
}
</script>
