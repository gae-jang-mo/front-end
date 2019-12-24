<template>

    <div>
        <ProductSearch v-if="!selectedProduct" @getProductInfo="addProductId"></ProductSearch>

        <div class="result-view" v-if="selectedProduct">
            <img class="product-img search-view-line" :src="selectedProduct.imageUrl">
            <div class="text-con">
                <p class="product-name">{{selectedProduct.productName}}</p>
            </div>
        </div>

        <div v-if="selectedProduct">
            <div class="comment">
                <md-field>
                    <label>Comment</label>
                    <md-textarea v-model="commentValue"></md-textarea>
                </md-field>
            </div>
            <div class="type">
                <md-field>
                    <label>Movie</label>
                    <md-select v-model="typeValue">
                        <md-option class="type-line" value="typeList.key" v-for="typeList in typeLists"
                                   v-bind:key="typeList.id">{{typeList}}
                        </md-option>
                    </md-select>
                </md-field>
            </div>

            <md-button class="md-raised md-primary" v-on:click="postProduct">저장</md-button>

        </div>
    </div>

</template>

<script>
    import ProductSearch from "@/components/header/ProductSearch";
    import Request from "@/utils/request"

    const request = new Request("/api/v1");
    export default {
        data: function () {
            return {
                selectedProduct: "",
                commentValue: "",
                productIdValue: "",
                typeValue: "",
                typeLists: []
            }
        },
        name: "AddProduct",
        components: {ProductSearch},
        methods: {
            addProductId: function (product) {
                console.log(product);
                this.selectedProduct = product;
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
            },
            getProductTypes: function () {
                request.get("/products/types", null, (data) => {
                    this.typeLists = data;
                })

            }
        }, mounted() {
            this.getProductTypes();
        }
    }
</script>

<style scoped lang="scss">

    .result-view {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        img {
            height: 150px;
            width: 150px;
            border-radius: 2px;

        }

        .text-con {
            align-self: flex-start;
            margin-left: 20px;
            width: 400px;
        }
    }

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

    .type-line span {
        color: black !important;
        background-color: black !important;

        :root {
            --md-theme-default-background: black;
            --md-theme-default-primary-on-background: blue;
        }

    }

    .md-list-item-text {
        color: blue !important;
    }


</style>