<template>
    <div class="home">
        <Notice class="notice-con"></Notice>
        <Feed class="feed-con"></Feed>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Notice from '@/components/Notice.vue'
    import Feed from "@/components/Feed";

    export default {
        name: 'home',
        components: {
            Feed,
            Notice,
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
