<template>
    <div class="product-search">
        <font-awesome-icon class="search-icon" icon="search"/>
        <input type="search" class="search-input" v-model="searchValue">
        <div class="result-con">
            <div v-for="result in searchResults" v-bind:key="result.id">
                <img :src="result.imageUrl" alt="">
                <p>{{result.username}}</p>
            </div>
        </div>

    </div>
</template>

<script>
    import Request from "@/utils/request.js"

    const request = new Request("/api/v1/users");
    export default {
        name: "UserSearch",
        data: function () {
            return {
                searchValue: "",
                searchResults: [],
            }
        }, watch: {
            searchValue: function (value) {
                request.get("/search", {
                    "username": value
                }, (data) => {
                    this.searchResults = data;
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .product-search {
        display: flex;
        align-items: center;

        input {
            height: 30px;
            color: white;
            font-size: 13px;
            width: 220px;
            padding: 12px 10px 12px 36px;
            border: 1px rgba(150, 150, 150, 1) solid;
            border-radius: 3px;
            background: rgba(200, 200, 200, 0);

            &:focus {
                outline: 0;
                border-color: $theme-color;
            }
        }

        .search-icon {
            position: absolute;
            margin-left: 4px;
            width: 28px;
            opacity: 0.8;
            border-right: 1px solid rgba(white, 0.6);
        }

    }
</style>