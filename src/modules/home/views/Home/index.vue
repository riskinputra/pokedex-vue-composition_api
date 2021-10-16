<template>
  <div class="home">
    <div class="grid md:grid-cols-2 gap-4 sm:grid-cols-1 xs:grid-cols-1">
      <div class="home-section__left sm:hidden xs:hidden">
        <div class="left-content">
          <img src="@/assets/pokemon-logo.png" alt="pokemon-logo" />
        </div>
      </div>
      <div class="home-section__right">
        <div class="right-logo">
          <img src="@/assets/logo.svg" />
        </div>
        <div class="grid md:grid-cols-2 gap-6 right-content">
          <button
            v-for="btn in listButton"
            :key="btn.key"
            class="btn"
            :class="`btn-${btn.key}`"
            @click="$router.push(`/${btn.key}`)"
          >
            <span class="btn-label">
              {{ btn.label }}
            </span>
            <div class="btn-line" />
            <div class="btn-img" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup () {
    const listButton = ref([
      {
        key: 'pokemon',
        label: 'Pokemon'
      },
      {
        key: 'types',
        label: 'Types'
      },
      {
        key: 'abilities',
        label: 'Abilities'
      },
      {
        key: 'location',
        label: 'Location'
      },
      {
        key: 'items',
        label: 'Items'
      },
      {
        key: 'moves',
        label: 'Moves'
      }
    ])

    return {
      listButton: listButton.value
    }
  }
}
</script>

<style lang="sass">
@import './styles.scss'
</style>
