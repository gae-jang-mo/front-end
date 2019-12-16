<template>
    <div class="product-search">
        <input v-model="searchValue" placeholder="장비명">
        <button v-on:click="searchExternal">새거뽑기</button>
    </div>
</template>

<script>
    import Request from "@/utils/request.js"

    const request = new Request("/api/v1");
    export default {
        name: "ProductSearch",
        data: function () {
            return {
                searchValue: ""
            }
        }, watch: {
            searchValue: function (value) {
                request.get("/products/internal", null, {
                    productName: value
                });
            }
        }, methods: {
            searchExternal: function () {
                request.get("/products/external", null, {
                    productName: this.searchValue,
                });
            }
        }
    }
</script>

<style scoped>

</style>