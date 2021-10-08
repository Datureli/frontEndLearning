<template>
  <v-container-fluid>
    <v-card class="overflow-hidden">
      <v-app-bar
        color="#6A76AB"
        dark
        shrink-on-scroll
        height="80"
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>



        <v-spacer></v-spacer>
  
      </v-app-bar>
    
    </v-card>
  </v-container-fluid>
</template>

<script>
export default {
  data: () => ({
    collapseOnScroll: true,
  }),
};
</script>
