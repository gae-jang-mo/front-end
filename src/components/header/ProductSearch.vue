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
                request.post("/products", {
                    productName: value,
                    external: false
                });
            }
        }, methods: {
            searchExternal: function () {
                request.post("/products", {
                    productName: this.searchValue,
                    external: true
                });
            }
        }
    }
</script>

<style scoped>

</style>