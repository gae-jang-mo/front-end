<template>
    <div class="product-search" @click="toggleDropdown">
        <font-awesome-icon class="search-icon" icon="search"/>
        <input type="search" class="search-input" v-model="searchValue" >
        <div class="result-con">
            <div v-on:click="routeUserPage(result.username)" class="result-line"
                 v-for="result in searchResults" v-bind:key="result.id">
                <div class="">
                    <img :src="result.imageUrl" alt="">
                </div>
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
                if (value == "") {
                    this.searchResults = "";
                } else {
                    request.get("/search", {
                        "username": value
                    }, (data) => {
                        this.searchResults = data;
                    });
                }
            }
        }, methods: {
            routeUserPage: function (value) {
                this.$router.push({path: `/users/${value}`})
                this.searchResults="";
            }, toggleDropdown (e) {
                e.stopPropagation() // this will stop propagation of this event to upper level
                if (this.searchResults) {
                    window.addEventListener('click', () => {
                        this.searchResults = "";
                    })
                } else {
                    window.removeEventListener('click', () => {
                        this.searchResults = "";
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $width: 220px;

    .product-search {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 100;

        input {
            height: 30px;
            color: white;
            font-size: 13px;
            width: $width;
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

    .result-con {
        position: absolute;
        top: 43px;
        background-color: white;
        overflow: hidden;

        width: $width;
        z-index: 999;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .result-line {
        cursor: pointer;
        display: flex;
        padding: {
            left: 10px;
            top: 10px;
            bottom: 10px;
        }

        &:hover {
            background-color: rgb(220, 220, 220);
        }

        border-bottom: 1px solid rgba(black, 0.1);

        img {
            width: 20px;
            margin-right: 10px;
            object-fit: contain;
        }

        p {
            color: black;
        }
    }
</style>