<template>
    <div class="ran-user-con">
        <p class="header">랜덤 사용자 찾기</p>

        <md-button v-on:click="getRandomUsers" class="refresh md-icon-button md-dense md-raised md-primary">
            <md-icon>cached</md-icon>
        </md-button>
        <div class="ran-user">
            <UserCard v-bind:user="users[0]" class="user-card"></UserCard>
            <UserCard v-bind:user="users[1]" class="user-card"></UserCard>
            <UserCard v-bind:user="users[2]" class="user-card"></UserCard>
        </div>
    </div>

</template>

<script>
    import UserCard from "./UserCard";
    import Request from "../../utils/request";

    const request = new Request("/api/v1/users");
    export default {
        name: "RandomUser",
        components: {UserCard},
        data: function () {
            return {
                users: ["","",""]
            }
        },
        methods: {
            getRandomUsers: function () {
                request.get("/random", null,
                    (data) => {
                        this.users = data;
                    })
            }
        },
        beforeMount() {
            this.getRandomUsers();
        }
    }
</script>

<style scoped lang="scss">
    $header-size:28px;
    .ran-user-con{
        padding-right: $margin-width;
        text-align: left;
        position:relative;
        height: 240px;
        .header{
            margin-top:-$header-size;
            height: $header-size;
            font-size:15px;
            font-weight: 700;
            color:$theme-color;
        }
        .refresh{
            position:absolute;
            right:0;
            border-radius: 50%;
            height:50px;
            width:50px;
            top:-20px;
            z-index: 10;
        }
    }
    .ran-user {
        display: flex;

        height: calc(100% );
    }

    .user-card {
        margin-right: $margin-width;
        flex: 1;
        min-width:160px;
        &:nth-last-child(1) {
            margin-right: 0;
        }
    }


</style>