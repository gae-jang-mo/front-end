<template>
    <div class="product">
        <md-dialog :md-active.sync="showAddProduct" class="product-dialog">
            <AddProduct>
            </AddProduct>
        </md-dialog>
        <UserProducts></UserProducts>
        <md-button v-on:click="addProduct" class="md-raised md-primary">추가</md-button>
    </div>
</template>

<script>
    import AddProduct from "@/components/users/AddProduct";
    import UserProducts from "./UserProducts";

    export default {
        data: function () {
            return {
                showAddProduct: false,
            }
        },
        name: "Product",
        components: {UserProducts, AddProduct},
        methods:{
            addProduct:function(){
                this.showAddProduct = true;
            }
        }
    }
</script>

<style scoped lang="scss">
.product-dialog{
    height:500px;
    padding:30px;
    background-color: white !important;
}

</style>