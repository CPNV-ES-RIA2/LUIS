/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import store from '../../../store/index.js'

import TheHeader from '../TheHeader.vue'

describe('TheHeader', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(TheHeader, {
      global: {
        plugins: [store],
      },
    })
  })

  it('renders a title', () => {
    expect(wrapper.find('.navbar-brand').exists()).toBe(true)
  })

  it('renders a closed locale dropdown', () => {
    expect(wrapper.find('.dropdown').exists()).toBe(true)
    expect(wrapper.find('.dropdown-menu').classes()).not.toContain('show')
  })
})
