<template>
  <v-container-fluid class="d-flex">
    <first-column />
    <middle-column />
  </v-container-fluid>
</template>


<script>
import firstColumn from '../components/RecruimentQuestions/FirstColumn.vue'
import MiddleColumn from '../components/RecruimentQuestions/MiddleColumn.vue'
export default {
  components: {
    firstColumn,
    MiddleColumn
  }
}
</script>