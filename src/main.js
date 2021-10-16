import { createApp } from 'vue'
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

createApp(App).use(store).use(router).mount('#app')
