<template>
    <div class="home">
        <Notice></Notice>
        <RandomUser></RandomUser>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Notice from '@/components/Notice.vue'
    import RandomUser from "../components/RandomUser";

    export default {
        name: 'home',
        components: {
            RandomUser,
            Notice
        }
    }
</script>
<style scoped lang="scss">
    .home{
        display: flex;
        padding-top:120px;
        width:$max-width;
        margin:0 auto;
        justify-content: space-between;
    }
</style>
