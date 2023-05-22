import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import Home from '../../views/Home.vue';

describe('Home', () => {
  it('renders the Home component', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.exists()).toBe(true);
  });
});
