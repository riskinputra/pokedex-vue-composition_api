<template>
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
        <div class="item-label md">{{ stat.key }}</div>
        <div class="item-value">{{ stat.base_stat }}</div>
      </div>
      <div class="stats-item tot">
        <div class="item-label md">TOT</div>
        <div class="item-value">{{ pokemon.totalStat }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonType from '@/components/PokemonType'

export default {
  name: 'DetailStats',
  props: {
    pokemon: {
      type: Object,
      default: () => null
    }
  },
  components: {
    PokemonType
  }
}
</script>

<style>

</style>
