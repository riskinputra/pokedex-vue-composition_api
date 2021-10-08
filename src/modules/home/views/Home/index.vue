<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore()

    const msg = computed(() => store.state.home.msg)

    return {
      // access a state in computed function
      msg
    }
  }
}
</script>
