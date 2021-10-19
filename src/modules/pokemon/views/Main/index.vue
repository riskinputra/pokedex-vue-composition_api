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
              <div class="pokemon-list__item" v-for="(pokemon) in pokemons.data" :key="pokemon.id" >
                <div class="item-image">
                  <img :src="pokemon.sprites.versions['generation-v']['black-white'].animated['front_default']" :alt="pokemon.id">
                </div>
                <div class="item-info">
                  <div class="item-info__number">
                    N<sup>0</sup>{{ pokemon.id }}
                  </div>
                  <div class="item-info__name">
                    {{ pokemon.name }}
                  </div>
                  <div class="item-info__type">
                    <Tag v-for="type in pokemon.types" :key="type.type.name" >{{ type.type.name }}</Tag>
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
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

import Tag from '@/components/Tag'
import Detail from './components/Detail'

export default {
  name: 'Pokemon',
  components: {
    Tag,
    Detail
  },
  setup () {
    const query = reactive({
      page: 1,
      offset: 0
    })
    const store = useStore()
    const pokemons = computed(() => store.state.pokemon.pokemons)
    const fetchPokemons = async () => await store.dispatch('pokemon/fetchPokemonList', query)
    fetchPokemons()

    return {
      pokemons
    }
    //
  }
}
</script>

<style lang="sass">
@import './styles.scss'
</style>
