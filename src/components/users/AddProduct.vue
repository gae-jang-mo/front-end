<template>

    <md-dialog-title>
        <ProductSearch></ProductSearch>
    </md-dialog-title>

</template>

<script>
    import ProductSearch from "@/components/header/ProductSearch";

    export default {
        data: function () {
            return {}
        },
        name: "AddProduct",
        components: {ProductSearch}
    }
</script>

<style scoped>
    .add-product {
        z-index: 10;
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .add-product-inner {

    }
</style>