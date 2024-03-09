/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheAnalyseForm from '../TheAnalyseForm.vue'

describe('TheAnalyseForm', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TheAnalyseForm)
  })

  it('renders a title', () => {
    expect(wrapper.find('h2').text()).toBe('Analyse a picture')
  })

  describe('file input', () => {
    let inputImage
    beforeEach(() => {
      inputImage = wrapper.find('#inputImage')
    })

    it('renders an input of type file', () => {
      expect(inputImage.exists()).toBe(true)
      expect(inputImage.attributes('type')).toBe('file')
    })

    it('accepts image type only', () => {
      expect(inputImage.attributes('accept')).toBe('image/*')
    })

    it('accepts only single file', () => {
      expect(inputImage.attributes('multiple')).toBe(undefined)
    })
  })

  describe('minimum confidence input', () => {
    let inputMinConfidence
    beforeEach(() => {
      inputMinConfidence = wrapper.find('#inputMinConfidence')
    })

    it('renders an input of type number', () => {
      expect(inputMinConfidence.exists()).toBe(true)
      expect(inputMinConfidence.attributes('type')).toBe('number')
    })

    it('has default value of 90', () => {
      expect(inputMinConfidence.element.value).toBe('90')
    })

    it('accepts minimum value of 1', () => {
      expect(inputMinConfidence.attributes('min')).toBe('1')
    })

    it('accepts maximum value of 100', () => {
      expect(inputMinConfidence.attributes('max')).toBe('100')
    })
  })

  describe('maximum labels input', () => {
    let inputMaxLabels
    beforeEach(() => {
      inputMaxLabels = wrapper.find('#inputMaxLabels')
    })

    it('renders an input of type number for maximum labels', () => {
      expect(inputMaxLabels.exists()).toBe(true)
      expect(inputMaxLabels.attributes('type')).toBe('number')
    })

    it('has default value of 5', () => {
      expect(inputMaxLabels.element.value).toBe('5')
    })

    it('accepts minimum value of 1', () => {
      expect(inputMaxLabels.attributes('min')).toBe('1')
    })

    it('accepts maximum value of 50', () => {
      expect(inputMaxLabels.attributes('max')).toBe('50')
    })
  })
})
