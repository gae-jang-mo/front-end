<template>
    <div class="feed">
        <p class="feed-header">Feed</p>
        <div class="feed-inner">
            <div v-on:click="routeUserPage(feed.user.username)" class="feed-line" v-for="feed in feeds"
                 v-bind:key="feed.id">
                <div class="feed-product">
                    <img class="img" :src="feed.product.imageUrl" alt="">
                    <div class="text">
                        <p class="name">{{feed.product.name}}</p>
                        <div class="bot-line">
                            <p class="type">{{feed.product.type}} </p>
                            <p class="create">{{feed.createdAt}}</p>

                        </div>
                    </div>
                </div>
                <div class="feed-user">
                    <img class="img" :src="feed.user.imageUrl" alt="">
                    <div class="text">
                        <p class="motto">{{feed.user.motto}}</p>
                        <p class="name">{{feed.user.username}}</p>
                    </div>
                </div>
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
            }, routeUserPage: function (username) {
                this.$router.push({path: `/users/${username}`})
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
        margin-bottom: 20px;
    }

    .feed-inner {
    }

    .feed-line {
        background-color: white;
        height: 80px;
        border-radius: 5px;
        margin-bottom: 17px;
        color: black;
        display: flex;
        padding: 10px;
        align-items: center;
        transition: box-shadow .5s,background-color .5s;

        &:hover {
            background-color: rgb(240,240,240);
            box-shadow: 0 0 5px rgba(33, 33, 33, .1);
        }

        .feed-product {
            display: flex;
            flex: 3;

            .img {
                margin-left: 5px;
                margin-right: 20px;
                height: 50px;
            }

            .text {
                margin-top: 5px;
                text-align: left;

                .name {
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 2px;

                }

                .bot-line {
                    display: flex;
                    width: 400px;
                }

                .type {
                    font-size: 12px;
                    opacity: 0.7;
                    font-weight: 500;
                    width: 110px;

                }

                .create {
                    font-size: 12px;
                    opacity: 0.5;
                }
            }
        }

        .feed-user {
            display: flex;
            flex: 1;
            text-align: left;

            .img {
                border: solid 1px gray;
                border-radius: 50%;
                height: 40px;
                margin-right: 10px;
            }

            .text {
                position: relative;

                .name {
                    font-size: 14px;
                }

                .motto {
                    font-size: 11px;
                }
            }
        }
    }
</style>