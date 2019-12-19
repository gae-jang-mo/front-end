<template>
    <div>
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
    .notice-card {
        background-color:white;
        width: $unit-width*3+$margin-width*2;
        height: 300px;
    }
</style>