<template>
  <v-container-fluid class="d-flex d-sm-grid">
    <first-column />
    <middle-column />
    <right-column />
  </v-container-fluid>
</template>


<script>
import firstColumn from '../components/RecruimentQuestions/FirstColumn.vue'
import MiddleColumn from '../components/RecruimentQuestions/MiddleColumn.vue'
import RightColumn from '../components/RecruimentQuestions/RightColumn.vue'
export default {
  components: {
    firstColumn,
    MiddleColumn,
    RightColumn
  }
}
</script>