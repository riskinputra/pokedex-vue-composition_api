import { mount } from '@vue/test-utils'
import homeModule from '../views/Home/index.vue'

describe('Home module page: ', () => {
  const factory = () => {
    return mount(homeModule)
  }

  test('is vue instance', () => {
    // arrange
    const wrapper = factory()
    // assert
    const component = wrapper.findComponent(homeModule)
    expect(component.exists()).toBe(true)
  })

  test('have six button', () => {
    const wrapper = factory()
    const components = wrapper.findAll('button')
    expect(components.length).toBe(6)
  })

  test('trigger button pokemon redirect to /pokemon', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(homeModule, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    await wrapper.find('.btn.btn-pokemon').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/pokemon')
  })
  test('trigger button types redirect to /types', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(homeModule, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    await wrapper.find('.btn.btn-types').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/types')
  })
  test('trigger button abilities redirect to /abilities', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(homeModule, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    await wrapper.find('.btn.btn-abilities').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/abilities')
  })
  test('trigger button location redirect to /location', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(homeModule, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    await wrapper.find('.btn.btn-location').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/location')
  })
  test('trigger button items redirect to /items', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(homeModule, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    await wrapper.find('.btn.btn-items').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/items')
  })
  test('trigger button moves redirect to /moves', async () => {
    const mockRouter = {
      push: jest.fn()
    }
    const wrapper = mount(homeModule, {
      global: {
        mocks: {
          $router: mockRouter
        }
      }
    })

    await wrapper.find('.btn.btn-moves').trigger('click')

    expect(mockRouter.push).toHaveBeenCalledTimes(1)
    expect(mockRouter.push).toHaveBeenCalledWith('/moves')
  })
})
