<template>
    <div  class="card">
        <div class="product-img">
            <img :src=" product.imageUrl"/>
        </div>

        <div class="product-text">
            <p class="type">{{product.productType}}</p>
            <p class="name">{{product.productName}}</p>
            <p class="create">{{product.createdAt}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductCard",
        props: ["product"]
    }
</script>

<style scoped lang="scss">
    .card {
        background-color: white;
        overflow: hidden;
        color: $theme-color;
        height: 270px;
        border-radius: 5px;
        border:solid 1px rgb(230,230,230);

        p {
            font-size: 13px;
            color: $theme-color
        }

        .product-img {
            height: 160px;
            overflow: hidden;
            border-bottom: 1px rgb(230,230,230) solid;

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
        height:110px;
        position:relative;
        .type {
            font-weight: 700;
            font-size: 12px;
            color: black;
        }

        .name {
            color: rgba(black,1);
            font-weight:300;
        }

        .create{
            position:absolute;
            bottom:6px;
            font-size:10px;
            color:rgba(black,0.4)
        }
    }
</style>