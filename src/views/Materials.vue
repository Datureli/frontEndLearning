<template>
  <v-card height="540" class="d-flex" color="black">
    <v-card class="mx-auto mt-4" color="transparent">
      <v-col class="d-flex" cols="12" md="8" lg="6">
        <div v-for="card in cards" :key="card.name">
          <router-link :to="{ name: card.routerName }">
            <material-card
              class=""
              :style="{ marginTop: card.styles.marginTop }"
            >
              <Slot class="mx-auto text-h5">
                <v-img :src="card.image"></v-img>
                <p>{{ card.title }}</p></Slot
              >
            </material-card>
          </router-link>
        </div>
      </v-col>
    </v-card>
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
          image: require("../assets/images/aparat.jpg"),
          routerName: "Wideo",
          styles: {
            marginTop: "10px",
          },
        },
        {
          title: "Książki",
          image: require("../assets/images/book.jpg"),
          routerName: "Book",
          styles: {
            marginTop: "35px",
          },
        },
        {
          title: "Strony",
          image: require("../assets/images/book.jpg"),
          routerName: "Website",
          styles: {
            marginTop: "55px",
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
