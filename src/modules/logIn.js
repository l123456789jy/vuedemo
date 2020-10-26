// 2
const state = {
    session_id: ''
}
const getters = {}
const actions = {}
const mutations = {
    setSessionId(state, value) {
        state.session_id = value;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
