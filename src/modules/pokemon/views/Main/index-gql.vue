<template>
  <div class="pokemon">
    <div class="container mx-auto">
      <div class="pokemon-content">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="md:col-span-2">
            <!-- Searchbar -->
            <div class="pokemon-search">
              <!-- Search Here -->
            </div>

            <!-- Filter -->
            <div class="pokemon-filter">
              <!-- filter here -->
            </div>

            <!-- Pokemon List -->
            <div class="pokemon-list grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6">
              <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon-list__item">
                <div class="item-image">
                  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/395.gif" alt="1">
                </div>
                <div class="item-info">
                  <div class="item-info__number">
                    N<sup>0</sup>0001
                  </div>
                  <div class="item-info__name">
                    Grottle
                  </div>
                  <div class="item-info__type">
                    <Tag>Grass</Tag>
                    <Tag>Grass</Tag>
                    <Tag>Grass</Tag>
                    <Tag>Grass</Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Detail />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'

import getPokemons from '@/graphql/getPokemons.query.gql'

import Tag from '@/components/Tag'
import Detail from './components/Detail'

export default {
  name: 'Pokemon',
  components: {
    Tag,
    Detail
  },
  setup () {
    const msg = ref('hello')
    const { result } = useQuery(getPokemons)
    const pokemons = useResult(result, null, data => data.pokemons)

    console.log({ result, pokemons })

    return {
      msg,
      pokemons
    }
  }
}
</script>

<style lang="sass">
@import './styles.scss'
</style>
