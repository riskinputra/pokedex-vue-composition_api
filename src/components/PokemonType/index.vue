<template>
  <img class="pokemon-type" :src="imageSource" :alt="type" />
</template>

<script>
import bug from '@/assets/types/bug.png'
import dark from '@/assets/types/dark.png'
import dragon from '@/assets/types/dragon.png'
import electric from '@/assets/types/electric.png'
import fairy from '@/assets/types/fairy.png'
import fighting from '@/assets/types/fighting.png'
import fire from '@/assets/types/fire.png'
import flying from '@/assets/types/flying.png'
import ghost from '@/assets/types/ghost.png'
import grass from '@/assets/types/grass.png'
import ground from '@/assets/types/ground.png'
import ice from '@/assets/types/ice.png'
import normal from '@/assets/types/normal.png'
import poison from '@/assets/types/poison.png'
import psychic from '@/assets/types/psychic.png'
import rock from '@/assets/types/rock.png'
import steel from '@/assets/types/steel.png'
import water from '@/assets/types/water.png'

export default {
  name: 'PokemonType',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    let imageSource = ''
    switch (true) {
      case props.type === 'bug':
        imageSource = bug
        break
      case props.type === 'dark':
        imageSource = dark
        break
      case props.type === 'dragon':
        imageSource = dragon
        break
      case props.type === 'electric':
        imageSource = electric
        break
      case props.type === 'fairy':
        imageSource = fairy
        break
      case props.type === 'fighting':
        imageSource = fighting
        break
      case props.type === 'fire':
        imageSource = fire
        break
      case props.type === 'flying':
        imageSource = flying
        break
      case props.type === 'ghost':
        imageSource = ghost
        break
      case props.type === 'grass':
        imageSource = grass
        break
      case props.type === 'ground':
        imageSource = ground
        break
      case props.type === 'ice':
        imageSource = ice
        break
      case props.type === 'normal':
        imageSource = normal
        break
      case props.type === 'poison':
        imageSource = poison
        break
      case props.type === 'psychic':
        imageSource = psychic
        break
      case props.type === 'rock':
        imageSource = rock
        break
      case props.type === 'steel':
        imageSource = steel
        break
      default:
        imageSource = water
        break
    }

    return {
      imageSource
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
