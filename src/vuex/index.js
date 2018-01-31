import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    curTab: 0
}
const mutations={
    changeTab (state, n) {
        state.curTab = n;
    }
}

export default new Vuex.Store({
    state,mutations
})