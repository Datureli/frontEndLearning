<template>
  <v-card height="540" class="d-flex" color="black">
    <v-spacer></v-spacer>
    <v-card class="d-flex mt-4" color="transparent">
      <div v-for="card in cards" :key="card.name">
        <router-link :to="{ name: card.routerName }">
          <material-card class="" :margin-top="card.marginTop">
            <Slot class="mx-auto text-h5">
              <v-img :src="card.image"></v-img>
              <p>{{ card.title }}</p></Slot
            >
          </material-card>
        </router-link>
      </div>
    </v-card>

    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import MaterialCard from "../components/materials/MaterialCard.vue";
import Slot from "../components/materials/Slot.vue";
export default {
  data() {
    return {
      cards: [
        {
          title: "Video",
          image: require("../assets/book.jpg"),
          routerName: "Wideo",
          styles: {
            marginTop: "5px",
          },
        },
        {
          title: "Książki",
          image: require("../assets/book.jpg"),
          routerName: "Book",
          styles: {
            marginTop: "5px",
          },
        },
        {
          title: "Strony",
          image: require("../assets/book.jpg"),
          routerName: "Website",
          styles: {
            marginTop: "5px",
          },
        },
      ],
    };
  },

  components: {
    MaterialCard,
    Slot,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
