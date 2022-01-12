export default {
  namespaced: true,

  state: {
    items: [],
    loginRules: [(value) => !!value || "login is required"],
    passwordRules: [(value) => !!value || "password is required"],
    username: null,
    password: null,
    dialog: false,
  },

  getters: {
    availableProducts(state, getters) {
      return state.items.filter((product) => product.inventory > 0);
    },

  },

  mutations: {
    setProducts(state, products) {
      // update products
      state.items = products;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    },
  },

  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        // make the call
        // call setProducts mutation
        shop.getProducts((products) => {
          commit("setProducts", products);
          resolve();
        });
      });
    },
  },
};
