<template>
  <div width="500">
    <v-select
      v-model="selectedChapter"
      :items="chapters"
      item-text="chapterName"
      item-value="chapterId"
      dense
      label="Wybierz roździał"
    >
      <template v-slot:item="data">
        {{ data.item.chapterName }}
      </template>
    </v-select>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("htmlCourse", ["chapters"]),
  },
  data() {
    return {
      selectedChapter: null,
    };
  },
};
</script>
