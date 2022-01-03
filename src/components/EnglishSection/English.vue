<template>
<div>
{{word}}
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((response) => (this.info = response.data));
  },
};
</script>