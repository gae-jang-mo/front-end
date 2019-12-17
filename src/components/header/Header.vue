<template>
    <div class="nav">
        <div class="nav-inner">
            <router-link to="/" class="logo">
                <img src="@/assets/logo.png" alt="">
                <div class="logo-name">
                    <p>개장모</p>
                    <p>Developer Equipment Community</p>
                </div>
            </router-link>
            <ProductSearch/>
            <Login v-if="!this.$store.state.isLogin"/>
            <Profile v-if="this.$store.state.isLogin"></Profile>
        </div>
    </div>
</template>

<script>
    import Login from '@/components/login/Login'
    import ProductSearch from '@/components/header/ProductSearch'
    import Profile from '@/components/header/Profile'
    export default {
        name: "Header",
        components: {
            Login,
            ProductSearch,
            Profile
        },
        beforeMount() {
            this.$store.dispatch("checkLogin");
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
        justify-content: space-between;
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