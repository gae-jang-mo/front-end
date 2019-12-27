<template>
    <div class="users">
        <div v-if="!isMine" class="users-like">
            <Like :isLike.sync="isLike" v-bind:id="id" width="16px"></Like>
        </div>
        <div class="info-intro">
            <Information class="information-con"
                         v-bind:usernameDto="username"
                         v-bind:mottoDto="motto"
                         v-bind:imageUrlDto="imageUrl"
                         v-bind:mineDto="isMine"
                         @updateMotto="updateMotto"
                         @updateImage="updateImage">
            </Information>
            <Introduce class="introduce-con"
                       v-bind:introduceDto="introduce"
                       v-bind:ideDto="ide"
                       v-bind:osDto="os"
                       v-bind:mineDto="isMine"
                       @updateIntroduce="updateIntroduce"></Introduce>
        </div>

        <Product v-bind:isMine="isMine"></Product>
    </div>

</template>

<script>
    import Request from '@/utils/request.js';
    import Information from '@/components/users/Information'
    import Introduce from '@/components/users/Introduce'
    import Product from '@/components/users/Product'
    import Like from "@/components/Like";

    const request = new Request("/api/v1/users");
    export default {
        components: {
            Like,
            Information,
            Introduce,
            Product
        },
        name: 'users',
        data: function () {
            return {
                id: "",
                username: "",
                motto: "",
                introduce: "",
                imageUrl: "",
                os: "",
                ide: "",
                isLike:""
            }
        },
        computed: {
            isMine: function () {
                const loginUsername = this.$store.state.username;
                return this.username === loginUsername;
            }
        }, watch: {
            '$route'() {
                this.getUserData();
            }
        },
        mounted() {
            this.getUserData();
        },
        methods: {
            updateMotto: function (updatedMotto) {
                this.motto = updatedMotto;
            }, updateImage: function (url) {
                this.imageUrl = url;
            },
            updateIntroduce: function (updatedIntroduce) {
                this.introduce = updatedIntroduce
            }
            , getUserData: function () {
                request.get(`/${this.$route.params.username}`, null,
                    (data) => {
                        this.username = data.username;
                        this.motto = data.motto;
                        this.introduce = data.introduce;
                        this.imageUrl = data.imageUrl;
                        this.id = data.id;
                        this.isLike=data.isLiked;
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .info-intro {
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        align-items: stretch;

    }

    .users {
        padding-top: 120px;
        max-width: $max-width;
        margin: 0 auto;
        text-align: left;
        padding-bottom: 100px;

        .users-like {
            border-radius: 50%;
            position: absolute;
            left:288px;
            top:158px;
            padding:7px;
            z-index:9999;
        }
    }


    .introduce-con, .information-con {
        padding: 0 $margin-width;
        display: flex;
        flex: 1;
    }
</style>