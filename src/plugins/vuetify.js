import Vue from "vue";
import Vuetify, { VCard, VToolbar } from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  components: {
    VCard,
    VToolbar,
  },
  directives: {
    Ripple,
  },
  theme: {
    themes: {
      variant1: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.indigo.lighten5, // Not automatically applied
      },
      variant2: {
        primary: colors.blue.lighten3, 
        background: colors.indigo.base, // If not using lighten/darken, use base to return hex
      }
    }
  }
});

const opts = {};

export default new Vuetify(opts);
