import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles
import './styles/tailwind.css'

// Modules
import homeModule from './modules/home'

import { registerModules } from './register-modules'

registerModules({
  home: homeModule
})

createApp(App).use(store).use(router).mount('#app')
