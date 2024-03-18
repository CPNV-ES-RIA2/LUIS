/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
import i18n from '@/i18n/index.js';

import TheLocaleDropdown from '../TheLocaleDropdown.vue';

describe('TheLocaleDropdown', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TheLocaleDropdown, {
      global: {
        plugins: [i18n],
      },
    });
  });

  it('renders a dropdown', () => {
    expect(wrapper.classes()).toContain('dropdown');
  });

  it('renders current locale', () => {
    expect(wrapper.find('.dropdown-toggle').text()).toBe('en');
  });

  describe('when activated', () => {
    beforeEach(async () => {
      await wrapper.find('.dropdown-toggle').trigger('click');
    });

    it('renders locales options', () => {
      expect(wrapper.find('.dropdown-menu').isVisible()).toBe(true);
    });

    describe('when option clicked', () => {
      beforeAll(async () => {
        // Trigger click on the second dropdown item (Français)
        await wrapper
          .find('.dropdown-menu li:nth-child(3) .dropdown-item')
          .trigger('click');
      });

      it('renders selected locale', () => {
        expect(wrapper.find('.dropdown-toggle').text()).toBe('fr');
      });

      it('updates active application locale', () => {
        expect(wrapper.vm.selectedLocale).toEqual('fr');
      });
    });
  });
});
