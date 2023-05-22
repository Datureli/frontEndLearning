import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from '@jest/globals';
import RecruitmentQuestion from '../../components/RecruimentQuestions/RecruitmentQuestion.vue';

describe('RecruitmentQuestion', () => {
    it('renders the RecruitmentQuestion component', () => {
      const $route = {
        path: '/about/htmlquestions', // Ustal ścieżkę, która jest potrzebna w twoim teście
        matched: [{ meta: { state: 'exampleState' } }],
        meta: { state: 'exampleState' }
      };
  
      const wrapper = shallowMount(RecruitmentQuestion, {
        mocks: {
          $route
        }
      });
  
      expect(wrapper.exists()).toBe(true);
    });
  });