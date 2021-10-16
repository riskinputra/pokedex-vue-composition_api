<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'

export default {
  name: 'Tag',
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const classes = computed(() => {
      return {
        tag: true,
        [`tag-${props.color}`]: props.color !== ''
      }
    })

    return {
      classes
    }
  }

}
</script>

<style lang="scss">
@import './styles.scss';
</style>
