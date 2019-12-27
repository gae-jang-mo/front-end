<template>
    <div class="like">
        <font-awesome-icon v-on:click="doLike" v-if="isLike" class="heart like-icon" icon="heart"/>
        <font-awesome-icon v-if="!isLike" class="heart like-icon" :icon="appIcon"/>
    </div>
</template>

<script>
    import {faHeart} from '@fortawesome/free-regular-svg-icons'
    export default {
        props:["isLike"],
        name: "Like",computed: {
            appIcon () {
                return faHeart
            }
        }
    }
</script>

<style scoped>
    .like{
        color: #ff3047;
        width:30px;
        height:30px;
    }
    .like-icon{
        width:100%;
        height:100%;
    }
</style>