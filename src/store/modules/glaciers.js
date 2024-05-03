
const state = {
  glacier: {},
  glaciers: []
}

const mutations = {
  UPDATE_GLACIERS: (state, glaciers) => {
    state.glaciers = glaciers
  },
  UPDATE_GLACIER: (state, glacier) => {
    state.glacier = glacier
  }
}

const actions = {
  updateGlaciers({ commit }, glaciers) {
    commit('UPDATE_GLACIERS', glaciers)
  },
  updateGlacier({ commit }, glacier) {
    commit('UPDATE_GLACIER', glacier)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
