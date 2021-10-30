<template>
  <div
    class="pokemon-detail"
    :style="{ backgroundColor: bgPokemonColor[pokemon.species.color.name] }"
  >
    <div class="pokemon-detail__info-main">
      <div class="pokemon-detail__image">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          :alt="pokemon.id"
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

      <div class="pokemon-detail__abilities">
        <div class="pokemon-detail__label">ABILITIES</div>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(ability, index) in pokemon.abilities"
            :key="index"
            class="pokemon-detail__focus"
            :class="ability.is_hidden ? 'hidden-skill' : null"
          >
            {{ ability.ability.name }}
            <img v-if="ability.is_hidden" src="@/assets/hide-icon.svg" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 pokemon-detail__abilities-next">
        <div>
          <div class="pokemon-detail__label">HEIGHT</div>
          <div class="pokemon-detail__focus">{{ pokemon.height }}m</div>
        </div>
        <div>
          <div class="pokemon-detail__label">WEIGHT</div>
          <div class="pokemon-detail__focus">{{ pokemon.weight }}Kg</div>
        </div>
        <div>
          <div class="pokemon-detail__label">WEAKNESSES</div>
          <div class="pokemon-detail__focus">
            <template v-for="(type, index) in pokemon.types" :key="type.type.name">
              <template v-if="index < 1">
                <template v-for="(weakness, idx) in type.weakness" :key="idx">
                  <PokemonType
                    :type="weakness"
                  />

                </template>
              </template>
            </template>
          </div>
        </div>
        <div>
          <div class="pokemon-detail__label">BASE EXP</div>
          <div class="pokemon-detail__focus">{{ pokemon.base_experience }}</div>
        </div>
      </div>

      <div class="pokemon-detail__stats">
        <div class="pokemon-detail__label">STATS</div>
        <div class="grid grid-cols-7 gap-2">
          <div v-for="stat in pokemon.stats" :key="stat.key" class="stats-item" :class="stat.key">
            <div class="item-label">{{ stat.key }}</div>
            <div class="item-value">{{ stat.base_stat }}</div>
          </div>
          <div class="stats-item tot">
            <div class="item-label">TOT</div>
            <div class="item-value">{{ pokemon.totalStat }}</div>
          </div>
        </div>
      </div>

      <div class="pokemon-detail__evolution">
        <!--  -->
      </div>
      <div class="pokemon-detail__navigation">
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import PokemonType from '@/components/PokemonType'
import { bgPokemonColor } from '@/utils/colors'

export default {
  name: 'PokemonDetail',
  props: {
    pokemon: {
      type: Object,
      default: () => null
    }
  },
  components: {
    PokemonType
  },
  setup (props) {
    const activeTab = ref('stats')

    const triggerActiveTab = (value) => {
      activeTab.value = value
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
      triggerActiveTab,
      tabMenus
    }
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>
