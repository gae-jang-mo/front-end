<template>
    <div>
        <md-card class="introduce-card">
            <div class="text-con">
                <p>{{introduce}}</p>
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
    export default {
        name: "Introduce",
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
        }
    }
</script>

<style scoped lang="scss">
    .introduce-card {
        padding: 25px;
        width: 100%;
        background-color: white;

        .text-con {
            height: 50%;
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