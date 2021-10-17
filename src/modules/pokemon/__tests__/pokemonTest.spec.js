import { mount } from '@vue/test-utils'
import pokemonModule from '../views/Main/index.vue'

describe('Pokemon module page: ', () => {
  const factory = () => {
    return mount(pokemonModule)
  }

  test('is vue instance', () => {
    // arrange
    const wrapper = factory()
    // assert
    const component = wrapper.findComponent(pokemonModule)
    expect(component.exists()).toBe(true)
  })

  // test('has card list', () => {
  //   const wrapper = factory()
  //   const components = wrapper.find('.pokemon-list')
  //   expect(components.exists()).toBe(true)
  // })
})
