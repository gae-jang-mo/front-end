<template>
    <div>
        <img v-bind:src="this.$store.state.imageUrl">
        <p>{{this.$store.state.name}}</p>
        <p>{{this.$store.state.motto}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>