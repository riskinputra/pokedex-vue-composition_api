<template>
  <div class="flex">
    <TheSidebar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import TheSidebar from '../TheSidebar'
export default {
  components: {
    TheSidebar
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
