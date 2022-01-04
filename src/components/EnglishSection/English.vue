<template>
<div>
{<div v-for="(word,index) in info" :key="word">
{{word.info}}
</div>}
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
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/<word>")
      .then((response) => (this.info = response.data));
  },
};
</script>