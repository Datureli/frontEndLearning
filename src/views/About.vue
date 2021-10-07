<template>
  <v-container class="d-flex d-sm-grid" height="880" outlined color="transparent">
    <first-column />
    <middle-column />
    <right-column />
  </v-container>
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