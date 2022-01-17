<template>
  <div>
    <div v-for="(text, index) in info.text" :key="index">
      <h1>{{ text }}</h1> 
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      axios: require("axios").default,
      options: {
        method: "GET",
        url: "https://just-translated.p.rapidapi.com/",
        params: { lang: "pl", text: "Hello, how are you?"  },
        headers: {
          "x-rapidapi-host": "just-translated.p.rapidapi.com",
          "x-rapidapi-key":
            "b00e13d5femsheb0d90eb2b7ca36p1be822jsn4b5de8e839b4",
        },
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
