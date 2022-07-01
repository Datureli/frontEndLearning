import { shallowMount } from '@vue/test-utils'
import Login from '../components/login/Login'


describe('login button test', () => {
    it('renders message when component is created', () => {
      // render the component
      const wrapper = shallowMount(Login, {
        propsData: {
          title: 'Vue Project'
        }
      })
  
      // check the name of the component
      expect(wrapper.vm.$options.name).toMatch('Login')
  
      // check that the title is rendered
      expect(wrapper.text()).toMatch('Vue Project')
    })
  })