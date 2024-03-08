const { describe, it } = require('vitest')

describe('AnalyseForm', () => {
  it('renders a title', () => {})
  describe('file input', () => {
    it('renders an input of type file', () => {})
    it('accepts image type only', () => {})
    it('accepts only single file', () => {})
  })
  describe('minimum confidence input', () => {
    it('renders an input of type number', () => {})
    it('has default value of 90', () => {})
    it('accepts minimum value of 1', () => {})
    it('accepts maximum value of 100', () => {})
  })
  describe('maximum labels input', () => {
    it('renders an input of type number for maximum labels', () => {})
    it('has default value of 5', () => {})
    it('accepts minimum value of 1', () => {})
    it('accepts maximum value of 50', () => {})
  })
})
