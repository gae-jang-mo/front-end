import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'

import  'vue-material/dist/theme/default-dark.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPen,faSearch,faHeart,faTimes} from '@fortawesome/free-solid-svg-icons'

import {faHeart as faLineHeart} from '@fortawesome/free-regular-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faPen);
library.add(faSearch);
library.add(faHeart);
library.add(faLineHeart);
library.add(faTimes);

Vue.use(VueMaterial);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
