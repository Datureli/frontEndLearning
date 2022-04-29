<template>
  <v-pagination
    circle
    style="position: absolute; bottom: 18%; right:36%"
    v-model="page"
    :length="3"
    :page="page"
   @change="$emit('change', $event.target.page)"
  ></v-pagination>
</template>


<script>
export default {
  props: {
    page: {
      type: Number,
    },
  },
    model: {
    prop: 'page',
    event: 'change'
  },
}
</script>