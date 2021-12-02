<template>
  <nav class="side-nav">
    <router-link to="/" class="intro-x flex items-center pl-5 pt-4" >
      <img
        alt="pokemon icon"
        class="w-full"
        src="@/assets/logo.svg"
      />
    </router-link>
    <div class="side-nav__devider my-6" />
    <ul>
      <li v-for="menu in menus" :key="menu.key">
        <router-link :to="menu.path" class="side-menu" :class="$route.name === menu.key ? 'side-menu--active' : null">
          <div class="side-menu__icon">
            <i :class="menu.icon" />
          </div>
          <div class="side-menu__title">
            {{ menu.label }}
          </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { reactive } from 'vue-demi'
export default {
  name: 'TheSidebar',
  setup () {
    const menus = reactive([
      {
        key: 'pokemon',
        label: 'Pokemon',
        path: '/',
        icon: 'fa-solid fa-frog'
      },
      {
        key: 'types',
        label: 'Types',
        path: '/types',
        icon: 'fa-solid fa-boxes-stacked'
      },
      {
        key: 'abilities',
        label: 'Abilities',
        path: '/abilities',
        icon: 'fa-solid fa-diagram-project'
      },
      {
        key: 'locations',
        label: 'Locations',
        path: '/locations',
        icon: 'fa-solid fa-location-dot'
      },
      {
        key: 'items',
        label: 'Items',
        path: '/items',
        icon: 'fa-solid fa-gears'
      },
      {
        key: 'moves',
        label: 'Moves',
        path: '/moves',
        icon: 'fa-solid fa-audible'
      }
    ])

    return {
      menus
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
