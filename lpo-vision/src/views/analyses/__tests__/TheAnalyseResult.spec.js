/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import TheAnalyseResult from '../TheAnalyseResult.vue';
import i18n from '@/i18n/index.js';

describe('AnalyseResult', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TheAnalyseResult, {
      global: {
        plugins: [i18n],
      },
      props: {
        labels: [
          { entity_name: 'Sports', score: 97 },
          { entity_name: 'Sports Jersey', score: 90 },
          { entity_name: 'Football Player', score: 85 },
        ],
      },
    });
  });

  it('renders a title', () => {
    expect(wrapper.find('h2').text()).toBe('Analysis result');
  });

  describe('if there are labels', () => {
    it('renders the labels', () => {
      expect(wrapper.find('.labels').exists()).toBe(true);
    });

    describe('a label', () => {
      it('renders label name', () => {
        expect(wrapper.find('.label-name').exists()).toBe(true);
      });

      it('renders label score', () => {
        expect(wrapper.find('.label-score').exists()).toBe(true);
      });
    });
  });

  describe('if there are no labels', () => {
    it("renders 'No labels'", () => {
      wrapper = mount(TheAnalyseResult, {
        global: {
          plugins: [i18n],
        },
        props: {
          labels: [],
        },
      });
      expect(wrapper.find('.no-labels').exists()).toBe(true);
      expect(wrapper.find('.label-name').exists()).toBe(false);
    });
  });
});
