import Vue from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/router/router";
import axios from "@/plugins/axios";
import store from "@/store";
import VFocus from "@/directives/VFocus";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false


Vue.use(axios)
Vue.directive('focus', VFocus)

components.forEach(component => Vue.component(component.name, component))

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
