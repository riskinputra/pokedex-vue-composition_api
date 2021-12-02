<template>
  <div
    class="pokemon-detail"
    :style="{ backgroundColor: bgPokemonColor[pokemon.species.color.name] }"
  >
    <div class="pokemon-detail__info-main">
      <div class="pokemon-detail__image">
        <img
          v-lazy="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.name"
          class="scale-1"
        />
      </div>
      <div class="pokemon-detail__number">
        #{{ $filters.addingZerroFormatNumber(pokemon.id) }}
      </div>
      <div class="pokemon-detail__name">{{ pokemon.name }}</div>
      <div class="pokemon-detail__species">{{ pokemon.species.genera }}</div>
      <div class="pokemon-detail__types">
        <PokemonType
          v-for="type in pokemon.types"
          :key="type.type.name"
          :type="type.type.name"
        />
      </div>
    </div>
    <!-- INFO BASE -->
    <div class="pokemon-detail__info-base">
      <div class="pokemon-detail__desc">
        <div class="pokemon-detail__label">POKEDEX ENTRY</div>
        <div class="desc-info">
          {{ pokemon.species.flavor_text_entries }}
        </div>
      </div>

      <ul class="pokemon-detail__tabs">
        <li
          v-for="tab in tabMenus"
          :key="tab.key"
          class="tabs-item"
          :class="activeTab === tab.key ? 'active' : null"
          @click="triggerActiveTab(tab.key)"
        >
          {{ tab.label }}
        </li>
      </ul>

      <keep-alive>
        <component :is="activeComponent" :pokemon="pokemon" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import { bgPokemonColor } from '@/utils/colors'

import DetailStats from './components/DetailStats'
import DetailEvolutions from './components/DetailEvolutions'
import DetailMoves from './components/DetailMoves'

export default {
  name: 'PokemonDetail',
  props: {
    pokemon: {
      type: Object,
      default: () => null
    }
  },
  components: {
    DetailStats,
    DetailEvolutions,
    DetailMoves
  },
  setup (props) {
    const activeTab = ref('stats')
    const activeComponent = ref('DetailStats')

    const triggerActiveTab = (value) => {
      activeTab.value = value

      switch (value) {
        case 'evolutions':
          activeComponent.value = 'DetailEvolutions'
          break
        case 'moves':
          activeComponent.value = 'DetailMoves'
          break
        default:
          activeComponent.value = 'DetailStats'
          break
      }
    }

    const tabMenus = ref([
      {
        key: 'stats',
        label: 'stats'
      },
      {
        key: 'evolutions',
        label: 'evolutions'
      },
      {
        key: 'moves',
        label: 'moves'
      }
    ])

    return {
      bgPokemonColor,
      activeTab,
      activeComponent,
      triggerActiveTab,
      tabMenus
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>
