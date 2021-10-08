import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import homeModule from './modules/home'

import { registerModules } from './register-modules'

registerModules({
  home: homeModule
})

createApp(App).use(store).use(router).mount('#app')
