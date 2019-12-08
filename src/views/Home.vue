<template>
  <div id = " abc" class="home">
    <p id="head">ABC</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped lang = "scss">
  #head{
    color: $bgColor;
  }
</style>
