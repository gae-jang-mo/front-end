<template>
    <p><a :href="uri">로그인</a></p>
</template>

<script>
    import {OAUTH2_GITHUB_URI} from '@/constants'

    export default {
        name: "Login",
        data: function () {
            return {
                uri: OAUTH2_GITHUB_URI
            }
        }
    }
</script>

<style scoped lang="scss">
    a {
        font-weight: 500;
        font-size: 15px;
        color: white;
    }

    a:hover {
        color: blue;
    }
</style>