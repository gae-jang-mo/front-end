<template>
    <div class="container">
        <img src="@/assets/logo.png" alt="" id="logo">
        <p v-on:click = "login">login</p>
        <p>{{isLogin}}</p>
    </div>
</template>

<script>
    import Request from '@/utils/request.js'
    const request = new Request;
    export default {
        name: "Header",
        data(){
          return{
              isLogin:false
          }
        },
        beforeMount(){
            console.log(request.get(`/api/login/state`));
        },
        methods: {
            login: () => {
                request.get(`/api/login`)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>