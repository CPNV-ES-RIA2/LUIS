/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { defineStore } from 'pinia'

import TheLocaleDropdown from '../TheLocaleDropdown.vue'

const pinia = createPinia()

// Mocking Pinia store
const store = defineStore({
  id: 'locales',
  state: () => ({
    locales: ['en', 'fr', 'de', 'pt'],
    activeLocale: 'en',
  }),
  getters: {
    activeLocale: (state) => state.activeLocale,
    locales: (state) => state.locales,
  },
})

describe('TheLocaleDropdown', () => {
  const wrapper = mount(TheLocaleDropdown)

  it('renders a dropdown', () => {
    expect(wrapper.classes()).toContain('dropdown')
  })

  it('renders current locale', () => {
    expect(wrapper.find('.current-locale').text()).toBe(store.activeLocale)
  })

  it('renders arrow down icon', () => {
    expect(wrapper.find('.arrow-down').exists()).toBe(true)
  })

  describe('when activated', () => {
    beforeEach(async () => {
      await wrapper.vm.activateDropdown()
    })

    it('renders arrow up icon', () => {
      expect(wrapper.find('.arrow-up').exists()).toBe(true)
    })

    it('renders locales options', () => {
      expect(wrapper.findAll('.locale-option').length).toBe(
        store.locales.length,
      )
    })

    describe('when hovering an option', () => {
      beforeEach(async () => {
        await wrapper.vm.hoverOption()
      })

      it('hovered option has a darker background', () => {
        expect(wrapper.find('.hovered').exists()).toBe(true)
      })

      describe('when option clicked', () => {
        beforeEach(async () => {
          await wrapper.vm.clickOption('fr')
        })

        it('renders selected locale', () => {
          expect(wrapper.find('.selected-locale').text()).toBe('fr')
        })

        it('updates active application locale', () => {
          expect(store.activeLocale).toBe('fr')
        })
      })
    })
  })
})
