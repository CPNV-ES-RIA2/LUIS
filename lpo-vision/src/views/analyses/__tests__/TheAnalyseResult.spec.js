/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeEach, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import TheAnalyseResult from '../TheAnalyseResult.vue'
import store from '../../../store/index.js'

describe('AnalyseResult', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheAnalyseResult, {
      global: {
        plugins: [store],
      },
    })
  })

  it('renders a title', () => {
    expect(wrapper.find('h2').text()).toBe('Analysis result')
  })

  describe('if there are labels', () => {
    beforeAll(() => {
      store.commit('setLabels', [
        { entity_name: 'Sports uniform', score: 97 },
        { entity_name: 'Sports jersey', score: 91 },
      ])
    })

    it('renders the labels', () => {
      expect(wrapper.find('.labels').exists()).toBe(true)
    })

    describe('a label', () => {
      it('renders label name', () => {
        expect(wrapper.find('.label-name').exists()).toBe(true)
      })

      it('renders label score', () => {
        expect(wrapper.find('.label-score').exists()).toBe(true)
      })
    })
  })

  describe('if there are no labels', () => {
    beforeAll(() => {
      store.commit('setLabels', [])
    })

    it("renders 'No labels'", () => {
      expect(wrapper.find('.no-labels').exists()).toBe(true)
    })
  })
})
