<template>
    <div class="product-search">
        <div v-if="!selectedProduct" class="search-input">
            <font-awesome-icon class="search-icon" icon="search"/>
            <input v-on:keyup.enter="searchExternal" v-model="searchValue" placeholder="장비명">
        </div>
        <div v-if="!selectedProduct" class="search-view">
            <div v-on:click="addUserProduct(result)" class="search-view-line" v-for="result in getSearchResult"
                 v-bind:key="result.id">
                <img class="product-img" :src="result.imageUrl">
                <p class="product-name">{{result.productName}}</p>
                <a v-on:click.stop.self :href="result.buyUrl" target="_blank" class="product-link"><p>링크</p></a>
            </div>
            <div v-on:click="searchExternal" v-if="externalResult.length==0 && searchValue.length>0"
                 class="search-external">
                <p>찾는 제품이 없으면 눌러주세요</p>
            </div>
        </div>
        <div class="search-view result-view" v-if="selectedProduct">
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
                selectedProductId: "",
                selectedProduct: "",
                isInternal: true
            }
        }, watch: {
            searchValue: function (value) {
                request.get("/products/internal", {
                    productName: value
                }, (data) => {
                    this.internalResult = data;
                    this.isInternal = true;
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
                    this.isInternal = false;
                });
            },
            addUserProduct: function (product) {
                this.$emit('getProductInfo', product, this.isInternal);
                this.selectedProduct = product;
            }
        }
    }
</script>

<style scoped lang="scss">
    $text-color: black;
    .search-input {
        display: flex;
        align-items: center;

        input {
            height: 30px;
            color: black;
            font-size: 13px;
            width: 100%;
            padding: 12px 10px 12px 36px;
            border: 1px rgba(150, 150, 150, 1) solid;
            border-radius: 3px;
            background: rgba(200, 200, 200, 0);

            &:focus {
                outline: 0;
                border-color: $theme-color;
            }
        }

        .search-icon {
            position: absolute;
            margin-left: 4px;
            width: 28px;
            color: black;
            opacity: 0.8;
            border-right: 1px solid rgba(black, 0.6);
        }
    }

    .search-view {
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
        width: 500px;
        border-radius: 3px;
        max-height: 400px;
        overflow-y: scroll;

        .product-name {
            overflow: hidden;
            white-space: nowrap;
            width: 70%;
            text-overflow: ellipsis;
            cursor:pointer;
        }

    }

    .search-view p {
        color: black;

    }

    .search-view-line {
        position: relative;
        display: flex;
        border-bottom: 1px rgba(30, 30, 30, 0.2) solid;
        align-items: center;
        background-color: white;

        .product-link {
            position: absolute;
            right: 30px;
            p{
                font-weight: 500;
                color: $theme-color;
                &:hover{
                    color:white;
                }
            }
        }
    }

    .search-view-line:hover {
        background-color: rgb(200, 200, 200);
    }


    .product-img {
        width: 30px;
        height: 30px;
        margin: 10px;
        cursor:pointer;
    }

    .search-external {
        text-align: center;
        background-color: rgba(240, 240, 240, 1);
        padding: {
            top: 10px;
            bottom: 10px;
        }

        p {
            color: black;
            font-size: 15px;
        }

    }

    .result-view {
        display: flex;
        align-items: center;
    }
</style>