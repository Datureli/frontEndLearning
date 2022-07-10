import { shallowMount } from "@vue/test-utils";
import Login from "@/components/login/Login";

describe("login button test", () => {
  it("renders message when component is created", () => {
    // render the component
    const wrapper = shallowMount(Login, {
      propsData: {
        username: "",
        password: "",
        elementVisible: true,
        dialog: false,
        showPassword: false,
        loggedIn: false,
      },
    });
    expect(wrapper.vm.$options.name).toMatch("Login");


  });
});
