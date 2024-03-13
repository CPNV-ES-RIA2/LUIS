/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
import i18n from '@/i18n/index.js';

import TheHeader from '../TheHeader.vue';

describe('TheHeader', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(TheHeader, {
      global: {
        plugins: [i18n],
      },
    });
  });

  it('renders a title', () => {
    expect(wrapper.find('.navbar-brand').exists()).toBe(true);
  });

  it('renders a closed locale dropdown', () => {
    expect(wrapper.find('.dropdown').exists()).toBe(true);
    expect(wrapper.find('.dropdown-menu').classes()).not.toContain('show');
  });
});
