<template>
 <v-card
    class="mx-auto ml-15"
    max-width="300"
    max-height="400"
  >
   <slot />
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="00px"
    ></v-img>
  </v-card>
</template>


<script>
export default {
    data() {
        return {
            titleArray: ['misio','misio2','misio3']
        }
    },
}
</script>