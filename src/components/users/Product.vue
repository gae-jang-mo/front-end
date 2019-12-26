<template>
    <div class="product">
        <md-dialog  :md-active.sync="showAddProduct" class="product-dialog">
            <AddProduct @saveSuccess="saveSuccess">
            </AddProduct>
        </md-dialog>
        <UserProducts ref="productView"></UserProducts>
        <md-button v-if="isMine==true" v-on:click="addProduct" class="md-fab md-primary add-button">
            <md-icon class="md-size-1x">add</md-icon>
        </md-button>
    </div>
</template>

<script>
    import AddProduct from "@/components/users/AddProduct";
    import UserProducts from "./UserProducts";

    export default {
        props:["isMine"],
        data: function () {
            return {
                showAddProduct: false,
            }
        },
        name: "Product",
        components: {UserProducts, AddProduct},
        methods: {
            addProduct: function () {
                this.showAddProduct = true;
            },
            saveSuccess:function(){
                this.showAddProduct =false;
                this.$refs.productView.getProducts()
            }
        }
    }
</script>

<style scoped lang="scss">
    .product{
        text-align: center;
    }

    .product-dialog {
        height: 500px;
        padding: 30px;
        background-color: white !important;
    }

    .add-button {
        margin-top:30px;
        width: 70px;
        height: 70px;
    }
</style>