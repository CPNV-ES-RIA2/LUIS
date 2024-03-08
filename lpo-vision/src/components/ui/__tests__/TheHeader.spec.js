/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TheHeader from '../TheHeader.vue'

describe('TheHeader', () => {
  it('renders a title', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.find('h1').exists()).toBeTruthy()
  })
  it('renders a closed locale dropdown', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.find('li').exists()).toBeTruthy()
  })
})
