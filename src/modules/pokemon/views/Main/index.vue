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
            <div class="pokemon-list grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0" @scroll="onScroll">
              <div
                v-for="(pokemon) in pokemons.data"
                :key="pokemon.id"
                :style="{ backgroundColor: bgPokemonColor[pokemon.species.color.name] }"
                class="pokemon-list__item"
                @click="handleActivePokemon(pokemon)"
              >
                <div class="item-image">
                  <!-- <img :src="pokemon.sprites.versions['generation-v']['black-white'].animated['front_default']" :alt="pokemon.id"> -->
                  <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.id" class="scale-1">
                </div>
                <div class="item-info">
                  <div class="item-info__number">
                    #{{ $filters.addingZerroFormatNumber(pokemon.id) }}
                  </div>
                  <div class="item-info__name">
                    {{ pokemon.name }}
                  </div>
                  <div class="item-info__type">
                    <PokemonType
                      v-for="type in pokemon.types"
                      :key="type.type.name"
                      :type="type.type.name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Detail v-if="Object.keys(activePokemon).length" :pokemon="activePokemon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted, onUnmounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

import { bgPokemonColor } from '@/utils/colors'

import PokemonType from '@/components/PokemonType'
import Detail from './components/Detail'

export default {
  name: 'Pokemon',
  components: {
    Detail,
    PokemonType
  },
  setup () {
    const activePokemon = ref({})

    const handleActivePokemon = (pokemon) => {
      activePokemon.value = pokemon
    }

    const query = reactive({
      page: 1,
      offset: 0
    })
    const store = useStore()
    const pokemons = computed(() => store.state.pokemon.pokemons)
    const fetchPokemons = async (param) => await store.dispatch('pokemon/fetchPokemonList', param)

    watch(pokemons, (newVal) => {
      if (!Object.keys(activePokemon.value).length) {
        activePokemon.value = newVal.data[0]
      }
    })

    fetchPokemons(query)

    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (query.offset < 118) {
          query.page += 1
          query.offset += 15

          fetchPokemons(query)
        }
      }
    }

    // this will register the event when the component is mounted on the DOM
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    // We then unregister the listener when the component is removed from the DOM
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      pokemons,
      bgPokemonColor,
      handleActivePokemon,
      activePokemon
    }
    //
  }
}
</script>

<style lang="sass">
@import './styles.scss'
</style>
