<template>
    <div class="like" :style="{width: widths, height:widths}">
        <font-awesome-icon v-on:click="doDislike" v-if="isLike" class="heart like-icon" icon="heart"/>
        <font-awesome-icon v-on:click="doLike" v-if="!isLike" class="heart like-icon" :icon="lineHeart"/>
    </div>
</template>

<script>
    import {faHeart} from '@fortawesome/free-regular-svg-icons'
    import Request from '@/utils/request'

    const request = new Request("/api/v1/likes");
    export default {
        props: ["isLike", "id", "width"],
        name: "Like",
        computed: {
            lineHeart() {
                return faHeart
            }, widths() {
                return this.width
            }
        }, methods: {
            doLike: function () {
                request.post(`/${this.id}`, null,
                    () => {
                        this.$emit('update:isLike', true)
                    })
            },
            doDislike: function () {
                request.delete(`/${this.id}`, null,
                    () => {
                        this.$emit('update:isLike', false)
                    })
            }
        }
    }
</script>

<style scoped>
    .like {
        color: #ff3047;
        width: 30px;
        height: 30px;
    }

    .like-icon {
        width: 100%;
        height: 100%;
    }
</style>