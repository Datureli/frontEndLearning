import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import Home from '../../views/Home.vue';

describe('Home', () => {
  it('renders the Home component', () => {
    const wrapper = shallowMount(Home);
    const image = wrapper.find('v-img');

    expect(wrapper.exists()).toBe(true);

    expect(image.exists()).toBe(true);

    // Sprawdź, czy obrazek ma poprawne źródło (src)
    expect(image.attributes('src')).toEqual('../assets/lightbulb.jpg');

    // Sprawdź, czy obrazek ma poprawny maksymalny rozmiar (max-width)
    expect(image.attributes('max-width')).toEqual('500');

    // Sprawdź, czy obrazek ma poprawny klasę (class)
    expect(image.classes()).toContain('mx-auto');
  });
});
