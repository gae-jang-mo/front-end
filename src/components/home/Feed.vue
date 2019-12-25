<template>
    <div>
        <p>최신 피드!</p>
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
                request.get("",null,
                    (data) => {
                        console.log(data)
                    })
            }
        }, beforeMount() {
            this.getFeeds();
        }


    }
</script>

<style scoped lang="scss">
    p {
        text-align: left;
        color: $theme-color;
        font-size: 25px;
        font-weight: bold;
    }
</style>