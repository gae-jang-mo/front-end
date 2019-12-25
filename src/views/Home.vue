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
    import Notice from '@/components/Notice.vue'
    import RandomUser from "@/components/RandomUser";
    import Feed from "@/components/Feed";

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
        padding: 0 $margin-width;
    }
</style>
