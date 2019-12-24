<template>
    <div class="con">
        <md-card md-with-hover class="notice-card card">
            <p slot="title">Notice</p>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "Notice"
    }
</script>

<style scoped lang="scss">
    .con {
        padding: 0 $margin-width;
    }

    .notice-card {
        background-color: white;
        height: 300px;
        width:auto;
    }
</style>