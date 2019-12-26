<template>
    <div class="feed">
        <p class="feed-header">Feed</p>
        <div class="feed-inner">
            <div class="feed-line" v-for="feed in feeds" v-bind:key="feed.id">
                {{feed.product.name}}
            </div>
        </div>
    </div>
</template>

<script>
    import Request from "../../utils/request";

    const request = new Request("/api/v1/users/products/latest");
    export default {
        name: "Feed",
        data: function () {
            return {
                feeds: []
            }
        }, methods: {
            getFeeds: function () {
                request.get("", null,
                    (data) => {
                        this.feeds = data;
                    })
            }
        }, beforeMount() {
            this.getFeeds();
        }


    }
</script>

<style scoped lang="scss">
    .feed-header {
        text-align: left;
        color: $sub-color;
        font-size: 30px;
        font-weight: bold;
        margin-bottom:20px;
    }
    .feed-inner{
    }
    .feed-line{
        background-color: white;
        height:70px;
        border-radius:5px;
        margin-bottom:20px;
        color:black;
    }
</style>