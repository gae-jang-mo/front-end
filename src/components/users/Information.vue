<template>
    <div class = "information">
        <div class="img-con">
            <img v-bind:src="imageUrl" alt=""/>\
        </div>
        <div><p>{{username}}</p>
        <p>{{motto}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['usernameDto', 'mottoDto', 'imageUrlDto']
        , computed: {
            username: function () {
                return this.usernameDto
            },
            motto: function () {
                return this.mottoDto
            },
            imageUrl: function () {
                return this.imageUrlDto
            }
        },
        name: "Information"
    }
</script>

<style scoped lang="scss">
    .information{
        margin-top:20px;
        display:flex;
    }
    .img-con {
        border-radius: 50%;
        overflow: hidden;
        width: 280px;
        height: 280px;

        img {
            width: 100%;
            height: 100%;
        }
    }

</style>