<template>
    <div class="information">
        <input enctype="multipart/form-data" accept="image/*" id="file-input" v-on:change="updateImage" type="file"
               hidden>
        <div class="img-con">
            <img class="img-view" v-bind:src="imageUrlDto" alt=""/>
            <div v-on:click="chooseImage" v-if="mineDto" class="img-over">
                <p>프로필 사진 변경</p>
            </div>
        </div>
        <div class="text-con">
            <div class="motto-con">
                <div class="motto-info">
                    <div v-if="mottoInputView">
                        <md-field class="motto-input md-theme-demo-dark">
                            <label>어떤</label>
                            <md-input v-on:keyup.enter="requestMotto" maxlength="10"
                                      v-model="mottoInputValue"></md-input>
                            <span class="md-suffix">개발자</span>
                        </md-field>
                        <span v-if="!mottoInputView"> 개발자</span>
                    </div>
                    <div v-if="!mottoInputView">
                        <span class="motto-value">{{mottoDto}}</span><span> 개발자</span>
                    </div>
                    <div v-on:click="updateMotto" v-if="mineDto" class="motto-update-con">
                        <font-awesome-icon class="motto-update-button update-button" icon="pen"/>
                    </div>
                </div>
            </div>
            <p v-if="!mottoInputView" class="username">
                <a v-bind:href="'https://github.com/'+usernameDto">{{usernameDto}}</a>
            </p>
        </div>
    </div>
</template>

<script>
    import Request from '@/utils/request'

    const request = new Request('/api/v1/users');
    export default {
        components: {},
        props: ['usernameDto', 'mottoDto', 'imageUrlDto', 'mineDto'],
        data: function () {
            return {
                imageData: "",
                mottoInputView: false,
                mottoInputValue: "",
            }
        }
        , methods: {
            updateMotto: function () {
                if (this.mottoInputView === false) {
                    this.mottoInputView = true
                } else {
                    this.requestMotto();
                }
            }, requestMotto: function () {
                request.put("/motto", {
                        "value": this.mottoInputValue
                    },
                    (data, status) => {
                        if (status == 200) {
                            this.mottoInputValue = "";
                            this.mottoInputView = false;
                            console.log(data.value);
                            this.$emit('updateMotto', data.value)
                        }
                    })
            }, chooseImage: function () {
                document.getElementById("file-input").click()
            }, updateImage: function (event) {
                let formData = new FormData();
                const image = event.target.files[0];
                formData.append("file", image);
                request.post("/image", formData,
                    (data) => {
                        this.$emit('updateImage', data.fileFeature.url);
                    });
            }
        },
        name: "Information"
    }
</script>

<style scoped lang="scss">
    .information {
        display: flex;
    }

    .img-con {
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        width: 280px;
        height: 280px;
        border: solid 3px white;

        img {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .img-over {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            top: 0;
            opacity: 0;
            transition: opacity 0.5s;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                font-weight: 300;
                font-size: 20px;
            }
        }

        .img-over:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }


    .text-con {
        padding: {

            top: 45px;
            left: 18px;
        }

        p, span {
            color: white;
            font-weight: 400;
            margin: 0;
        }

        .motto-info {
            display: flex;

            input {
                border-radius: 2px;
                margin-right: 3px;
                padding: 8px;
            }

            .motto-value {
                font-weight: 600;
                margin-right: 3px;
                border-bottom: solid 0.5px white;
            }

            .md-suffix {
                min-width: 50px;
                text-align: left;
                right: 30px;
                position: relative;
            }
        }

        .motto {
            font-size: 13px;
        }

        .motto-con {
            margin-bottom: 10px;
        }

        .username {
            font-size: 27px;
            max-width: 250px;
            height: 30px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            a {
                color: white;
            }
        }

        .motto-update-con {
            display: inline;

            .motto-update-button {
                position: relative;
                color: white;
                margin-left: 5px;
                top: -4px;
            }
        }


        .motto-input {
            display: flex;
            height: 10px;
            margin: 0;
            width: 250px;
        }

        .ivu-input {
            height: 10px;
        }
    }

</style>