import { createApp, provide, h, onBeforeMount } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloClients } from '@vue/apollo-composable'

import Http from '@/services/http'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles
import './styles/styles.scss'
import './styles/tailwind.css'

// Modules
import homeModule from './modules/home'
import pokemonModule from './modules/pokemon'

import { registerModules } from './register-modules'

registerModules({
  home: homeModule,
  pokemon: pokemonModule
})

const defaultClient = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
})

createApp({
  setup () {
    onBeforeMount(() => Http.init())
    provide(ApolloClients, {
      default: defaultClient
    })
  },
  render () {
    return h(App)
  }
}).use(store).use(router).mount('#app')
