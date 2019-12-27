<template>
    <div class="card">
        <div class="product-img">
            <img :src=" product.imageUrl"/>
            <font-awesome-icon v-on:click="doDelete" v-if="isMine" class="delete-button" icon="times"/>
        </div>

        <div class="product-text">
            <div class="product-top">
                <p class="type">{{product.productType}}</p>
                <p class="name">{{product.productName}}</p>
            </div>
            <p class="create">{{product.createdAt}}</p>
        </div>
    </div>
</template>

<script>
    import Request from "../../utils/request";

    const request = new Request("/api/v1/users/products");
    export default {
        name: "ProductCard",
        props: ["product", "isMine"],
        methods: {
            doDelete: function () {
                request.delete(`/${this.product.id}`, null,
                    (data) => {
                        console.log(data);
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        position: relative;
        background-color: white;
        overflow: hidden;
        color: $theme-color;
        height: 270px;
        border-radius: 5px;
        border: solid 1px rgb(230, 230, 230);

        p {
            font-size: 13px;
            color: $theme-color
        }

        .product-img {
            height: 160px;
            overflow: hidden;
            border-bottom: 1px rgb(230, 230, 230) solid;

            .delete-button {
                position: absolute;
                right: 10px;
                top: 10px;
                color: red;
                cursor: pointer;
                width: 15px;
                height: 15px;
                opacity: 0.5;

                &:hover {
                    opacity: 1;
                }
            }

            img {
                max-width: 100%;
                height: 100%;
                transition: all 0.3s ease-in-out;

                &:hover {
                    transform: scale(1.2);
                }
            }

        }
    }

    .product-text {
        padding: 10px;
        height: 110px;
        position: relative;

        .product-top {
            overflow: hidden;
            height: 60px;
            text-overflow: ellipsis;
        }

        .type {
            font-weight: 700;
            font-size: 12px;
            color: black;
        }

        .name {
            color: rgba(black, 1);
            font-weight: 300;
        }

        .create {
            position: absolute;
            bottom: 6px;
            font-size: 10px;
            color: rgba(black, 0.4)
        }
    }
</style>