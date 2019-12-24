<template>
    <router-link :to="{path:'/users/'+getUsername}" class="profile">
        <div class="circle-pic-con">
            <img v-bind:src="this.$store.state.imageUrl">
        </div>
        <div class="text-con">
            <p>{{getUsername}}</p>
            <p>{{getMotto}}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "Profile"
       , computed: {
            getUsername() {
                return this.$store.state.username
            }, getMotto() {
                return this.$store.state.motto
            }
        }
    }
</script>

<style scoped lang="scss">
    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none !important;

    }


    .circle-pic-con {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: solid 1px gray;
        overflow: hidden;
        margin-right: 10px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .text-con {
        width: 100px;
        text-align: left;
        color:white;
        &:hover{
            color: $theme-color;
        }
    }
</style>