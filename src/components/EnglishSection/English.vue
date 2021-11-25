<template>
<div>
{{info}}
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
      .get("http://wordreference.com/enpl/")
      .then((response) => (this.info = response.data));
  },
};
</script>