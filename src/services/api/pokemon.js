import methods from '../methods'

const getPokemon = (params = '') => {
  return methods.GET_API(`pokemon?${params}`)
}
const getPokemonDetail = (id) => methods.GET_API(`pokemon/${id}`)

export default {
  getPokemon,
  getPokemonDetail
}
