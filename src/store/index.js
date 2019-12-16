import Vue from 'vue'
import Vuex from 'vuex'
import Request from '@/utils/request'

Vue.use(Vuex);
const request = new Request("/api/v1");
export default new Vuex.Store({
    state: {
        isLogin: false,
        name: "",
        imageUrl: "",
        motto: ""
    },
    mutations: {
        doLogin: function (state) {
            state.isLogin = true
        },
        setProfile: function (state, profile) {
            state.name = profile["username"];
            state.motto = profile["motto"];
            state.imageUrl = profile["imageUrl"];

        }
    },
    actions: {
        checkLogin: function (context) {
            request.get("/login/state",
                null,
                (data) => {
                    if (data) {
                        context.commit("doLogin");
                    }
                })
                .then(request.get("/users/logined",
                    null,
                    (data) => {
                        context.commit("setProfile", data)
                    }))
        }
    },
    modules: {}
})
