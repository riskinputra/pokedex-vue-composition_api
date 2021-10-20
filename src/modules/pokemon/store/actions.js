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
  fetchPokemonList: async ({ state, commit }, { offset, page }) => {
    commit(types.GET_POKEMON_PRELOAD, true)
    try {
      const currentData = state.pokemons.data
      const query = {
        offset,
        limit: 15
      }
      const endpointPokemons = []
      const endpointSpecies = []
      for (let index = offset; index < query.limit * page; index++) {
        endpointPokemons.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`)
          .then(response => response.data))
        endpointSpecies.push(axios.get(`https://pokeapi.co/api/v2/pokemon-species/${index + 1}/`)
          .then(response => response.data))
      }
      const data = await Promise.all(endpointPokemons)
      const species = await Promise.all(endpointSpecies)
      data.forEach((item, index) => {
        item.species = species[index]
      })

      commit(types.GET_POKEMON, { data: [...currentData, ...data], isLoading: false })
    } catch (error) {
      console.error('fetchPokemonList', error)
      throw (error)
    }
  }
}

export default actions
