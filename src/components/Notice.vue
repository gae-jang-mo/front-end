<template>
    <div class="notice">
        <md-card md-with-hover class="notice-card card">
            <h1 class="title card-h1">Notice</h1>

        </md-card>
    </div>
</template>

<script>
    import Request from "../utils/request";

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
        },beforeMount() {
            this.getNotices()
        }
    }
</script>

<style scoped lang="scss">
    .notice{
        width: $unit-width-2
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
            border-bottom: 1px solid rgba($theme-color, .5);;
        }
    }
</style>