<template>
    <md-card class="user-con">
        <div class="img-con">
            <img :src="user.imageUrl" alt="">
        </div>
        <div class="text-con">
            <p> {{user.username}}</p>
        </div>
    </md-card>
</template>

<script>
    export default {
        props: ["user"],
        name: "UserCard"
    }
</script>

<style scoped lang="scss">
    .user-con {
        overflow: hidden;
    }

    .img-con {
        height: 180px;
        overflow: hidden;
        border-bottom: rgba(black,0.1) solid 1px;
        img {
            max-width: 100%;
            height: 100%;
            transition: all 0.3s ease-in-out;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
    .text-con{
        padding:8px;
        p{
            color:$theme-color;
        }
    }
</style>