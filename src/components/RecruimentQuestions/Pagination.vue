<template>
  <v-pagination
    circle
    style="position: absolute; bottom: 18%; right:36%"
    :length="3"
    v-model="page"
    @change="$emit('update:page', $event.target.value)"
  ></v-pagination>
</template>

<script>
export default {
  props: {
    page: Number,
  },
  computed: {
    page: {
      get() {
        return this.page;
      },
      set(value) {
        this.$emit("update:page", value);
      },  
    },
  },
};
</script>
