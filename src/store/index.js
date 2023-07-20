import Vue from 'vue'
import Vuex from 'vuex'
import {studentStore} from "@/store/studentStore";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        student: studentStore
    }
})