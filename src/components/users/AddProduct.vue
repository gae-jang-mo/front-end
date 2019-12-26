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
                    <label>종류</label>
                    <md-select v-model="typeValue">
                        <md-option class="type-line" :value="name" v-for="(value, name) in typeLists"
                                   v-bind:key="name.id">{{value}}
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
                isInternal: "",
                typeLists: []
            }
        },
        name: "AddProduct",
        components: {ProductSearch},
        methods: {
            addProductId: function (product, isInternal) {
                console.log(product);
                this.isInternal = isInternal;
                this.selectedProduct = product;
                this.productIdValue = product.productId;
            },
            postProduct: function () {
                let suffix = "";
                let postData;
                if (this.isInternal) {
                    suffix = "/internal";
                    postData = this.getInternalData()
                } else {
                    suffix = "/external";
                    postData = this.getExternalData()
                }

                request.post("/users/products" + suffix, postData, () => {
                    this.$emit("saveSuccess")
                })
            },
            getProductTypes: function () {
                request.get("/products/types", null, (data) => {
                    this.typeLists = data;
                })

            }, getExternalData: function () {
                return {
                    "productRequestDto": {
                        "title": this.selectedProduct.productName,
                        "link": this.selectedProduct.buyUrl,
                        "image": this.selectedProduct.imageUrl,
                        "lowestPrice": this.selectedProduct.lowestPrice,
                        "highestPrice": this.selectedProduct.highestPrice,
                        "mallName": this.selectedProduct.mallName,
                        "productId": this.selectedProduct.productId,
                        "naverProductType": this.selectedProduct.naverProductType,
                    },
                    "userProductRequestDto": {
                        "comment": this.commentValue,
                        "productType": this.typeValue
                    }
                }
            }, getInternalData: function () {
                return {
                    "userProductRequestDto": {
                        "productType": this.typeValue,
                        "comment": this.commentValue
                    },
                    "productId": this.selectedProduct.id
                }
            }
        }, mounted() {
            this.getProductTypes();
        }
    }
</script>
<style scoped lang="scss">
    $text-color: rgb(120, 120, 120);
    $border-color: gray;
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


    .product-name {
        color: $text-color;
    }

    .md-field.md-theme-default.md-has-textarea:not(.md-autogrow):after {
        border-color: $border-color;
    }

    .md-field.md-theme-default:after {
        background-color: $theme-color;
    }

    .md-field.md-theme-default label {
        color: $text-color;
    }

    textarea {
        -webkit-text-fill-color: black !important;
        color: $text-color !important;
        font-weight: 500;
    }

    .type-line span {
        color: $text-color !important;
        background-color: $text-color !important;
    }

    .md-list-item-text {
        color: blue !important;
    }

</style>