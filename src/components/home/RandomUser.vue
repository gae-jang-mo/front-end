<template>
    <div class="ran-user">
        <UserCard v-bind:user="users[0]" class="user-card"></UserCard>
        <UserCard v-bind:user="users[1]" class="user-card"></UserCard>
        <UserCard v-bind:user="users[2]" class="user-card"></UserCard>
    </div>
</template>

<script>
    import UserCard from "./UserCard";
    import Request from "../../utils/request";

    const request = new Request("/api/v1/users");
    export default {
        name: "RandomUser",
        components: {UserCard},
        date: function () {
            return {
                users: []
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
    .ran-user {
        display: flex;
        height: 270px;
    }

    .user-card {
        margin-right: $margin-width;
        flex: 1;

        &:nth-last-child(1) {
            margin-right: 0;
        }
    }


</style>