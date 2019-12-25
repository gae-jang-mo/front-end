<template>
    <div class="notice">
        <md-card class="notice-card card">
            <h1 class="title card-h1">Notice</h1>
            <div class="content">
                <div class="content-line" v-for="notice in notices" v-bind:key="notice.id">
                    <!--                    <span class="content-num">{{notice.id}}</span>-->
                    <span class="content-header">{{notice.header}}</span>
                    <span class="content-title">{{notice.contents}}</span>
                </div>
            </div>
        </md-card>
    </div>
</template>

<script>
    import Request from "../../utils/request";

    const request = new Request("/api/v1/notice");
    export default {
        name: "Notice",
        data: function () {
            return {
                notices: []
            }
        },
        methods: {
            getNotices: function () {
                request.get("/", null,
                    (data) => {
                        this.notices = data;
                    })
            }
        }, beforeMount() {
            this.getNotices()
        }
    }
</script>

<style scoped lang="scss">
    .notice {
        padding: 0 $margin-width;

    }

    .notice-card {
        background-color: white;
        height: 270px;
        padding: {
            top: 17px;
            left: 20px;
            right: 20px;
        }

        h1 {
            padding-bottom: 7px;
        }
    }

    .content-line {
        display: flex;
        margin: 20px 0;

        span {
            color: black;
        }

        .content-header {
            font-size: 25px;
        }

        .content-title {
            font-size: 20px;
        }
    }
</style>