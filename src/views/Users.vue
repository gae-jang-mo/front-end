<template>
    <div class="users">
        <div class = "info-intro">
            <Information class="information-outer"
                         v-bind:usernameDto="username"
                         v-bind:mottoDto="motto"
                         v-bind:imageUrlDto="imageUrl">
            </Information>
            <Introduce class="introduce-outer" v-bind:introduceDto="introduce"></Introduce>
        </div>
    </div>

</template>

<script>
    import Request from '@/utils/request.js';
    import Information from '@/components/users/Information'
    import Introduce from '@/components/users/Introduce'

    const request = new Request("/api/v1/users");
    export default {
        components: {
            Information,
            Introduce
        },
        name: 'users',
        data: function () {
            return {
                username: "",
                motto: "",
                introduce: "",
                imageUrl: "",
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

        }
    }
</script>

<style scoped lang="scss">
    .info-intro{
        display:flex;
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