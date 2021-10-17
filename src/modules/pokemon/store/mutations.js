import * as types from './mutation-types'

const mutations = {
  [types.GET_POKEMON] (state, payload) {
    state.pokemons = payload
  },
  [types.GET_POKEMON_PRELOAD] (state, payload) {
    state.pokemons.isLoading = payload
  },
  [types.GET_POKEMON_DETAIL] (state, payload) {
    state.pokemonsDetail = payload
  },
  [types.GET_POKEMON_DETAIL_PRELOAD] (state, payload) {
    state.pokemonsDetail.isLoading = payload
  }
}

export default mutations
