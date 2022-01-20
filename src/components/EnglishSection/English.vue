<template>
  <div>
  <ItWordsCollection />
  </div>
</template>

<script>
import axios from "axios";
import ItWordsCollection from './ItWordsCollection.vue'
export default {
  name: "Home",
  components: {
    ItWordsCollection
  },
  data() {
    return {
      axios: require("axios").default,
      options: {
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "accept-encoding": "application/gzip",
          "x-rapidapi-host": "google-translate1.p.rapidapi.com",
          "x-rapidapi-key":
            "b00e13d5femsheb0d90eb2b7ca36p1be822jsn4b5de8e839b4",
        },
        data: { q: "Hello, world!", target: "es", source: "en" },
      },
      info: null,
    };
  },
  mounted() {
    axios
      .request(this.options)
      .then((response) => (this.info = response.data))
      .catch(function(error) {
        console.error(error);
      });
  },
};
</script>
