<template>
    <div class="product">
        <md-dialog :md-active.sync="showAddProduct" class="product-dialog">

            <AddProduct>
            </AddProduct>
        </md-dialog>

        <md-button v-on:click="addProduct" class="md-raised md-primary">추가</md-button>
    </div>
</template>

<script>
    import AddProduct from "@/components/users/AddProduct";

    export default {
        data: function () {
            return {
                showAddProduct: false,
            }
        },
        name: "Product",
        components: {AddProduct},
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
    background-color: gray !important;
}

</style>