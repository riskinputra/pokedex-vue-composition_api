import * as types from './mutation-types'
import API_URL from '@/services'

const actions = {
  fetchPokemonList: async ({ commit }) => {
    commit(types.GET_POKEMON_PRELOAD, true)
    try {
      const res = await API_URL.pokemon.getPokemon()
      console.log({ res })
    } catch (error) {
      console.error('fetchPokemonList', error.response)
    }
  }
}

export default actions
