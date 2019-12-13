<template>
    <div>
        <Card class="notice-card card">
            <p slot="title">Notice</p>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "Notice"
    }
</script>

<style scoped lang="scss">
    .notice-card {
        width: $unit-width*3+$margin-width*2;
        height: 300px;
    }
</style>