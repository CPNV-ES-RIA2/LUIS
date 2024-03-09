/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheAnalyseForm from '../TheAnalyseForm.vue'

describe('AnalyseResult', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheAnalyseForm)
  })

  it('renders a title', () => {
    expect(wrapper.find('h2').text()).toBe('Analyse result')
  })

  describe('if there are labels', () => {
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
    it("renders 'No labels'", () => {
      expect(wrapper.find('.no-labels').exists()).toBe(true)
    })
  })
})
