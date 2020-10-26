import Vue from 'vue'
import Vuex from 'vuex'
import logIn from '../modules/logIn.js'
Vue.use(Vuex);
const state = {
    //1
    author: ''
}
const actions = {}
const mutations = {
    setAuthor(state, value){
        state.author = value;
    }
}
const store = new Vuex.Store({
    modules: {
        //2
        logIn,
    },
    actions,
    state,
    mutations,
})
export default store;
