<template>
    <div id="app">
        <TopBackGround></TopBackGround>
        <div class="nav-con">
            <Header></Header>
        </div>
        <router-view class="router-view"></router-view>
    </div>
</template>
<script>
    import Header from "@/components/header/Header";
    import TopBackGround from "@/components/TopBackGround"

    export default {
        components: {
            Header,
            TopBackGround,
        }, beforeMount() {
        }
    }
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean');

    html, body {
        margin: 0;
        background-color: rgb(240, 242, 245) !important;
    }

    #app {
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: rgb(240, 242, 245);;
    }

    .nav-con {
        position: absolute;
        z-index: 100;
        width: 100%;
    }

    .router-view {
        position: relative;
    }

</style>
