<template>
    <div class="users">
        <div class="info-intro">
            <Information class="information-outer"
                         v-bind:usernameDto="username"
                         v-bind:mottoDto="motto"
                         v-bind:imageUrlDto="imageUrl"
                         v-bind:mineDto="isMine"
                         @updateMotto="updateMotto">
            </Information>
            <Introduce class="introduce-outer"
                       v-bind:introduceDto="introduce"
                       v-bind:ideDto="ide"
                       v-bind:osDto="os"
                       v-bind:mineDto="isMine"></Introduce>

        </div>

        <Product></Product>
    </div>

</template>

<script>
    import Request from '@/utils/request.js';
    import Information from '@/components/users/Information'
    import Introduce from '@/components/users/Introduce'
    import Product from '@/components/users/Product'

    const request = new Request("/api/v1/users");
    export default {
        components: {
            Information,
            Introduce,
            Product
        },
        name: 'users',
        data: function () {
            return {
                username: "",
                motto: "",
                introduce: "",
                imageUrl: "",
                os: "",
                ide: ""
            }
        },
        computed: {
            isMine: function () {
                const loginUsername = this.$store.state.username;
                return this.username === loginUsername;
            }
        },
        beforeMount() {
            request.get(`/${this.$route.params.username}`, null,
                (data) => {
                    this.username = data.username;
                    this.motto = data.motto;
                    this.introduce = data.introduce;
                    this.imageUrl = data.imageUrl;
                })
        },
        methods: {
            updateMotto: function (updatedMotto) {
                this.motto = updatedMotto;
            }
        }
    }
</script>

<style scoped lang="scss">
    .info-intro {
        padding-top: 70px;
        display: flex;
        justify-content: space-between;
    }

    .users {
        width: $max-width;
        margin: 0 auto;
        text-align: left;
    }

    .introduce-outer {
        width: $unit-width*3+$margin-width*2
    }
</style>