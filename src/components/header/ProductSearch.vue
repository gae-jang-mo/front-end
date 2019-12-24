<template>
    <div class="product-search">
        <div v-if="!selectedProduct" class="search-input">
            <input v-on:keyup.enter="searchExternal" v-model="searchValue" placeholder="장비명">
        </div>
        <div v-if="!selectedProduct" class="search-view">
            <div v-on:click="addUserProduct(result)" class="search-view-line" v-for="result in getSearchResult" v-bind:key="result.id">
                <img class="product-img" :src="result.imageUrl">
                <p class="product-name">{{result.productName}}</p>
            </div>
            <div v-on:click="searchExternal" v-if="externalResult.length==0 && searchValue.length>0" class="search-external">
                <p>외부 검색</p>
            </div>
        </div>

        <div  class="search-view result-view" v-if="selectedProduct">
            <img class="product-img search-view-line" :src="selectedProduct.imageUrl">
            <p class="product-name">{{selectedProduct.productName}}</p>
        </div>
    </div>
</template>

<script>
    import Request from "@/utils/request.js"

    const request = new Request("/api/v1");
    export default {
        name: "ProductSearch",
        data: function () {
            return {
                searchValue: "",
                internalResult: "",
                externalResult: "",
                selectedProductId:"",
                selectedProduct:""
            }
        }, watch: {
            searchValue: function (value) {
                request.get("/products/internal", {
                    productName: value
                }, (data) => {
                    this.internalResult = data;
                });
            }
        }, computed: {
            getSearchResult: function () {
                if (this.externalResult.length === 0) {
                    return this.internalResult
                }
                return this.externalResult;
            }
        }, methods: {
            searchExternal: function () {
                request.get("/products/external", {
                    productName: this.searchValue,
                }, (data) => {
                    this.externalResult = data;
                });
            },
            addUserProduct:function(product){
                this.$emit('getProductInfo',product);
                this.selectedProduct = product;

            }
        }
    }
</script>

<style scoped lang="scss">
    .search-view {
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
        width: 500px;
        border-radius: 3px;
    }

    .search-view p {
        color: black;
    }

    .search-view-line {
        display: flex;
        border-bottom: 1px rgba(30, 30, 30, 0.2) solid;
        align-items: center;
        background-color: white;
    }
    .search-view-line:hover{
        background-color:var(--lns-themeLight-color-primary);
    }

    .product-name {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        padding-right:30px;
    }

    .product-img {
        width: 30px;
        height: 30px;
        margin: 10px;
    }

    .search-external {
        text-align: center;
        background-color:rgba(240,240,240,1);
        padding: {
            top: 10px;
            bottom: 10px;
        }

        p {

            color: black;
            font-size: 15px;
        }

    }
    .result-view{
        display:flex;
        align-items: center;
    }
</style>