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
      const endpointTypes = []
      for (let index = offset; index < query.limit * page; index++) {
        endpointPokemons.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}/`)
          .then(response => response.data))
        endpointSpecies.push(axios.get(`https://pokeapi.co/api/v2/pokemon-species/${index + 1}/`)
          .then(response => {
            const speciesData = response.data
            speciesData.genera = speciesData.genera.find(el => el.language.name === 'en').genus
            speciesData.flavor_text_entries = speciesData.flavor_text_entries.find(el => el.language.name === 'en').flavor_text
            return speciesData
          }))
      }

      for (let index = 0; index < 18; index++) {
        endpointTypes.push(axios.get(`https://pokeapi.co/api/v2/type/${index + 1}/`)
          .then(response => {
            const typesData = response.data
            const newData = {}
            newData.names = typesData.names.find(el => el.language.name === 'en').name.toLowerCase()
            newData.damage_relations = typesData.damage_relations.double_damage_from.map(type => type.name)
            return newData
          }))
      }
      const data = await Promise.all(endpointPokemons)
      const species = await Promise.all(endpointSpecies)
      const pokemonTypes = await Promise.all(endpointTypes)
      data.forEach((item, index) => {
        item.stats = item.stats.map((stat) => {
          const { name } = stat.stat
          switch (true) {
            case name === 'attack':
              stat.key = 'atk'
              break
            case name === 'defense':
              stat.key = 'def'
              break
            case name === 'special-attack':
              stat.key = 'spa'
              break
            case name === 'special-defense':
              stat.key = 'spo'
              break
            case name === 'speed':
              stat.key = 'spd'
              break
            default:
              stat.key = name
              break
          }
          return stat
        })
        item.totalStat = item.stats.map((item) => item.base_stat).reduce((a, b) => a + b)
        item.species = species[index]
        item.types = item.types.map(type => {
          type.weakness = pokemonTypes.find(el => el.names === type.type.name).damage_relations
          return type
        })
      })

      commit(types.GET_POKEMON, { data: [...currentData, ...data], isLoading: false })
    } catch (error) {
      console.error('fetchPokemonList', error)
      throw (error)
    }
  }
}

export default actions
