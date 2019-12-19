<template>
    <md-card md-with-hover class="introduce-card">
        <p>{{introduceDto}}</p>
    </md-card>
</template>

<script>
    export default {
        name: "Introduce",
        props: ['introduceDto', 'mineDto'],
        computed: {
            introduce: function () {
                return this.introduceDto
            }, isMine: function () {
                return this.mineDto
            }
        }
    }
</script>

<style scoped lang="scss">
    .introduce-card {
        padding: 20px;
        width: 100%;
        background-color: white;
        display: flex;
        align-items: center;
        p{
            font-size:20px;
        }
    }
</style>