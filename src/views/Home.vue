<template>
    <div class="home">
        <Notice></Notice>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Notice from '@/components/Notice.vue'

    export default {
        name: 'home',
        components: {
            Notice
        }
    }
</script>
<style scoped lang="scss">
    .home{
        padding-top:100px;
        width:$max-width;
        margin:0 auto;
    }
</style>
