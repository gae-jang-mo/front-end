<template>
    <div class="notice">
        <md-card class="notice-card card">
            <h1 class="title card-h1">Notice</h1>
            <div class="content">
                <div class="content-line" v-for="notice in notices" v-bind:key="notice.id">
                    <!--                    <span class="content-num">{{notice.id}}</span>-->
                    <p class="content-header">{{notice.header}}</p>
                    <p class="content-title">{{notice.contents}}</p>
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
        height: 240px;
        padding: {
            top: 17px;
            left: 20px;
            right: 20px;
        }

    }

    .content{
        height:100%;
        position:relative;
        top:-20px;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .content-line {
        display: flex;
        border-bottom:solid 1px rgba(black,0.1);
        &:nth-last-child(1){
            border-bottom:none
        }
        padding:{
            top:10px;
            bottom:10px;
        }
        flex-direction: column;


        p {
            color: black;
        }

        .content-header {
            font-size: 15px;
            font-weight: 700;
        }

        .content-title {
            font-size: 13px;
        }
    }
</style>