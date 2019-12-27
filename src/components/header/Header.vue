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
            <UserSearch class="search"></UserSearch>
            <div class="status">
                <Login v-if="!this.$store.state.isLogin"/>
                <Profile v-if="this.$store.state.isLogin"></Profile>
            </div>
        </div>
    </div>
</template>

<script>
    import Login from '@/components/login/Login'
    import Profile from '@/components/header/Profile'
    import UserSearch from "@/components/header/UserSearch";

    export default {
        name: "Header",
        components: {
            UserSearch,
            Login,
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
        height: 58px;
    }

    .nav-inner {
        padding:0 $margin-width;
        width: $max-width;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;

        .logo {
            height: 100%;
            display: flex;
            vertical-align: middle;
            align-items: center;
            text-decoration: none;
            flex:1;
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
                color: white;

                &:hover {
                    color: $theme-color;
                }
            }
        }
        .search{
            flex:1;
        }

    }

    .status {
        display: flex;
        align-items: center;
    }
</style>