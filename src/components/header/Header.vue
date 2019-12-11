<template>
    <div class="nav">
        <div class="nav-inner">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
                <div class="logo-name">
                    <p>개장모</p>
                    <p>Developer Equipment Community</p>
                </div>
            </div>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <ProductSearch></ProductSearch>
            <p><Login></Login></p>
        </div>
    </div>
</template>

<script>
    // import Request from '@/utils/request.js'
    import Login from '@/components/login/Login'
    import ProductSearch from '@/components/header/ProductSearch'
    // const request = new Request(`/api/v1/`);

    export default {
        name: "Header",
        components:{
            Login,
            ProductSearch
        },
        beforeMount() {
        }
    }
</script>

<style scoped lang="scss">
    .nav {
        display: flex;
        width: 100%;
        height: 50px;
    }

    .nav-inner {
        width: $max-width;
        display: flex;
        margin: 0 auto;

        .logo {
            height: 100%;
            display: flex;
            vertical-align: middle;
            align-items: center;

            img {
                height: 80%;
            }

            .logo-name {
                margin: {
                    left: 20px;
                }
                flex-direction: column;
                display: flex;
                text-align: left;

                p {
                    color: black;
                }
            }
        }

    }
</style>