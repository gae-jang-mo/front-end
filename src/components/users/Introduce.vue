<template>
    <div>
        <md-card class="introduce-card">
            <div v-on:click="closeByOuterClick" class="text-con">
                <p v-if="!introduceUpdateView">{{introduce}}</p>
                <div v-if="introduceUpdateView" class="update-form-con">
                <textarea v-model="introduceUpdateValue" v-if="introduceUpdateView" type="text" class="update-form"
                          placeholder="자기소개를 써주세요">
                </textarea>
                    <md-button v-on:click="doUpdateIntroduce" class="md-raised md-primary update-post">수정</md-button>
                </div>
                <div v-if="!introduceUpdateView" v-on:click="introduceUpdateView=true" class="update-btn-con">
                    <font-awesome-icon v-if="isMine" class="update-btn" icon="pen"/>
                </div>
            </div>
            <div class="etc-con">
                <div class="os-con etc-cell">
                    <p class="etc-header os-header">OS</p>
                    <p>{{os}}</p>
                </div>
                <div class="ide-con etc-cell">
                    <p class="etc-header ide-header">IDE</p>
                    <p>{{ide}}</p>
                </div>
            </div>
        </md-card>
    </div>
</template>

<script>
    import Request from "@/utils/request"

    const request = new Request("/api/v1/users");
    export default {
        name: "Introduce",
        data: function () {
            return {
                introduceUpdateView: false,
                introduceUpdateValue: ""
            }
        },
        props: ['introduceDto', 'ideDto', 'osDto', 'mineDto'],
        computed: {
            introduce: function () {
                if (this.introduceDto == null) {
                    return "자기소개를 입력해 주세요"
                }
                return this.introduceDto
            },
            ide: function () {
                return this.ideDto
            }
            , os: function () {
                return this.osDto
            }
            , isMine: function () {
                return this.mineDto
            },
        }, methods: {
            closeByOuterClick: function (e) {
                e.stopPropagation(); // this will stop propagation of this event to upper level
                if (this.introduceUpdateView) {
                    window.addEventListener('click', () => {
                        this.introduceUpdateView = false;
                    })
                } else {
                    window.removeEventListener('click', () => {
                        this.introduceUpdateView = false;
                    })
                }
            }, doUpdateIntroduce: function () {
                request.put("/introduce", {
                    "introduce": this.introduceUpdateValue
                }, (data => {
                    this.$emit("updateIntroduce", data.introduce);
                    this.introduceUpdateView = false;
                    this.introduceUpdateValue = "";
                }))
            }
        }
    }
</script>

<style scoped lang="scss">
    .introduce-card {
        padding: 25px;
        width: 100%;
        background-color: white;

        .text-con {
            position: relative;
            height: 50%;

            .update-btn-con {
                cursor: pointer;
                position: absolute;
                right: 0;
                top: 0;
            }

            .update-form {
                width: 100%;
                height: 80px;
                outline: none;
                font-size: 17px;
                padding: 0;
                border: none;

                &:hover {
                    outline: none;
                }


            }

            .update-post {
                min-width: 60px;
                height: 30px;
                position: absolute;
                top: 70px;
                left: 0;
                color: black;
                margin: 0;
            }

            .update-btn {
                color: black;
            }
        }

        p {
            font-size: 17px;
            color: black;
        }

        .etc-con {
            display: flex;
            justify-content: space-between;
        }

        .etc-cell {
            width: 48%;
        }

        .etc-header {

            font-size: $card-h2-font-size;
            padding-bottom: 4px;
            border-bottom: black 0.5px solid;
        }
    }
</style>