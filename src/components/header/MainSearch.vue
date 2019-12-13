<template>
    <div class="product-search">
        <input v-model="searchValue" placeholder="사람명">

    </div>
</template>

<script>
    import Request from "@/utils/request.js"

    const request = new Request("/api/v1");
    export default {
        name: "MainSearch",
        data: function () {
            return {
                searchValue: ""
            }
        }, watch: {
            searchValue: function (value) {
                request.post("/search", {
                    productName: value
                });
            }
        }
    }
</script>

<style scoped>

</style>