<template>
    <div class="home">
        <div class="notice-feed-con">
            <Notice class="notice-con"></Notice>
            <RandomUser class="random-con"></RandomUser>

        </div>
        <Feed class="feed-con"></Feed>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Notice from '@/components/home/Notice.vue'
    import RandomUser from "@/components/home/RandomUser";
    import Feed from "@/components/home/Feed";

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
        padding-top: 150px;
        max-width: $max-width;
        margin: 0 auto;
    }

    .notice-feed-con {
        display: flex;
    }

    .notice-con {
        flex: 1;
    }

    .random-con {
        flex: 1;
    }

    .feed-con {
        width:65%;
        margin-top:30px;
        padding: 0 $margin-width;
    }
</style>
