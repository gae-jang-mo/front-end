<template>
    <div class="ran-user">
        <UserCard class="user-card"></UserCard>
        <UserCard class="user-card"></UserCard>
        <UserCard class="user-card"></UserCard>
    </div>
</template>

<script>
    import UserCard from "./UserCard";
    import Request from "../utils/request";
    const request = new Request("");
    export default {
        name: "RandomUser",
        components: {UserCard},
        methods: {
            getRandomUsers: function () {
                request.get("")
            }
        }
    }
</script>

<style scoped lang="scss">
    .ran-user {
        display: flex;
        width: $unit-width-3;
        height: 270px;
    }

    .user-card {
        margin-right: $margin-width;
        width: $unit-width;
        height: 100%;

        &:nth-last-child(1) {
            margin-right: 0;
        }
    }


</style>