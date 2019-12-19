<template>
    <div class="information">
        <div class="img-con">
            <img v-bind:src="imageUrl" alt=""/>
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
                        <span class="motto-value">{{motto}}</span><span> 개발자</span>
                    </div>
                    <div v-on:click="updateMotto" v-if="isMine" class="motto-update-con">
                        <font-awesome-icon class="motto-update-button update-button" icon="pen"/>
                    </div>
                </div>
            </div>
            <p v-if="!mottoInputView" class="username">{{username}}</p>

        </div>
    </div>
</template>

<script>
    import Request from '@/utils/request'

    const request = new Request('/api/v1/users');
    export default {
        data: function () {
            return {
                mottoInputView: false,
                mottoInputValue: ""
            }
        },
        props: ['usernameDto', 'mottoDto', 'imageUrlDto', 'mineDto']
        , computed: {
            username: function () {
                return this.usernameDto
            },
            motto: function () {
                return this.mottoDto
            },
            imageUrl: function () {
                return this.imageUrlDto
            },
            isMine: function () {
                return this.mineDto
            }
        }, methods: {
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
        border-radius: 50%;
        overflow: hidden;
        width: 280px;
        height: 280px;
        border: solid 3px white;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .text-con {
        padding: {
            top: 95px;
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
        }

        .motto {
            font-size: 13px;
        }

        .motto-con {
            margin-bottom: 10px;
        }

        .username {
            font-size: 27px;
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
        }

        .ivu-input {
            height: 10px;
        }


    }

</style>