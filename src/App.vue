<template>
    <div id="app">
        <TopBackGround></TopBackGround>
        <div class="nav-con">
            <Header></Header>
        </div>
        <router-view/>
    </div>
</template>
<script>
    import Header from "@/components/Header";
    import TopBackGround from "@/components/TopBackGround"

    export default {
        components: {
            Header,
            TopBackGround
        }
    }
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,500,700,900&display=swap&subset=korean');

    html, body {
        margin: 0;
        background-color: rgb(210, 210, 210);

    }

    #app {
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: rgb(210, 210, 210);
    }

    .nav {
        position: relative;
        z-index: 1;
    }

</style>
