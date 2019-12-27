<template>
    <div class="products">
        <ProductCard v-bind:isMine="isMine" class="products-card" v-bind:product="product" v-for="product in products"
                     v-bind:key="product.id"></ProductCard>
    </div>
</template>

<script>
    import ProductCard from "./ProductCard";
    import Request from "../../utils/request";

    const request = new Request("/api/v1/users");
    export default {
        props:["isMine"],
        name: "UserProducts",
        components: {ProductCard},
        data: function () {
            return {
                products: []
            }
        },
        methods: {
            getProducts: function () {
                request.get(`/${this.$route.params.username}/products`, null,
                    (data) => {
                        this.products = data;
                    });
            }
        },
        mounted() {
            this.getProducts()
        }, watch: {
            '$route'() {
                this.getProducts();
            }
        }
    }
</script>

<style scoped lang="scss">
    .products {
        display: flex;
        flex-wrap: wrap;
        padding:$margin-width;
        margin-top:40px;
        justify-content: flex-start;
    }

    .products-card {
        max-width: $unit-width;
        margin-right:$margin-width;
        flex: 0 1 calc(50% - 1em);
    }
</style>