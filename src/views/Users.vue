<template>
    <div class = "users"></div>

</template>

<script>
    import Request from '@/utils/request.js';
    const request = new Request("/api/v1/users");
    export default {
        name: 'users',
        beforeMount() {
            request.get(`/${this.$route.params.username}`,null)
        }
    }
</script>

<style scoped lang="scss">
    .users{
        width:$max-width;
        margin:0 auto;
    }
</style>