<template>
    <a :href="uri">login</a>
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

<style scoped>

</style>