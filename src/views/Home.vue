<template>
    <div class="home">
        <Notice class="notice-con"></Notice>
        <Feed class="feed-con"></Feed>
        <RandomUser></RandomUser>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Notice from '@/components/Notice.vue'
    import Feed from "@/components/Feed";
    import RandomUser from "@/components/RandomUser";
    export default {
        name: 'home',
        components: {
            Feed,
            RandomUser,
            Notice
        }
    }
</script>
<style scoped lang="scss">
    .home {
        padding-top: 100px;
        max-width: $max-width;
        margin: 0 auto;
    }

    .feed-con{
        padding: 0 $margin-width;

    }
</style>
