import { createStore } from 'vuex'
import { mount } from '@vue/test-utils'
import homeModule from '../views/Home/index.vue'

const store = createStore({
  state () {
    return {
      home: {
        msg: 'Hello'
      }
    }
  }
})

describe('Home module page: ', () => {
  const factory = () => {
    return mount(homeModule, {
      global: {
        plugins: [store]
      }
    })
  }
  test('is vue instance', async () => {
    // arrange
    const wrapper = factory()
    // assert
    const component = await wrapper.findComponent(homeModule)
    expect(component.exists()).toBe(true)
  })
})
