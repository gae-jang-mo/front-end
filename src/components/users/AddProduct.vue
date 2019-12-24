<template>

    <md-dialog-title>
        <ProductSearch @getProductInfo="addProductId"></ProductSearch>
        <div class="comment">
            <md-input v-model="commentValue"></md-input>
        </div>
        <div class="type">
            <md-button class="md-raised md-primary" v-on:click="postProduct">저장</md-button>
        </div>
    </md-dialog-title>

</template>

<script>
    import ProductSearch from "@/components/header/ProductSearch";
    import Request from "@/utils/request"
    const request = new Request("/api/v1")
    export default {
        data: function () {
            return {
                selectedProduct:"",
                commentValue: "",
                productIdValue: "",
                typeValue: "KEY_BOARD"
            }
        },
        name: "AddProduct",
        components: {ProductSearch},
        methods: {
            addProductId:function(product){
                console.log(product)
                this.selectedProduct=product
                this.productIdValue = product.productId;
            },
            postProduct: function () {
                request.post("/users/products", {
                    "comment": this.commentValue,
                    "productId": this.productIdValue,
                    "productType": this.typeValue
                }, (data) => {
                    console.log(data)
                })
            }
        }
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