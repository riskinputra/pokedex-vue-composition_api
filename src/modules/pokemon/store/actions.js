import axios from 'axios'

import * as types from './mutation-types'

// const actions = {
//   fetchPokemonList: async ({ commit }) => {
//     commit(types.GET_POKEMON_PRELOAD, true)
//     try {
//       const res = await API_URL.pokemon.getPokemon()
//       console.log({ res })
//     } catch (error) {
//       console.error('fetchPokemonList', error.response)
//     }
//   }
// }

const actions = {
  fetchPokemonList: async ({ commit }, { offset, page }) => {
    commit(types.GET_POKEMON_PRELOAD, true)
    try {
      const query = {
        offset,
        limit: 9
      }
      const endPointList = []
      for (let index = offset; index < query.limit * page; index++) {
        endPointList.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`)
          .then(response => response.data))
      }
      const data = await Promise.all(endPointList)

      commit(types.GET_POKEMON, { data, isLoading: false })
    } catch (error) {
      console.error('fetchPokemonList', error)
      throw (error)
    }
  }
}

export default actions
