<template>
  <v-card width="300" class="ml-5" outlined color="transparent" elevation="0">

    <v-list color="transparent" >
      <v-list-item >
        <v-icon>mdi-home</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}" class="text-deocration-none mx-auto"  style="text-decoration: none; color: inherit;">
        Html
        </router-link>
      </v-list-item>
      
      <v-list-item>
        
        <v-icon>mdi-account-circle</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}" class="text-deocration-none mx-auto"  style="text-decoration: none; color: inherit;">
        Css
        </router-link>
     
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}" class="text-deocration-none mx-auto"  style="text-decoration: none; color: inherit;">
        Javascript
        </router-link>
    
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}" class="text-deocration-none mx-auto"  style="text-decoration: none; color: inherit;">
        Vue
        </router-link>
     
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}" class="text-deocration-none mx-auto"  style="text-decoration: none; color: inherit;">
        React
        </router-link>
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}" class="text-deocration-none mx-auto"  style="text-decoration: none; color: inherit;">
        Bootstrap
        </router-link>
      
      </v-list-item>
            <v-list-item>
        <v-icon>mdi-account-circle</v-icon>
<router-link :to="{ name: 'HtmlQuestions'}" class="text-deocration-none mx-auto"  style="text-decoration: none; color: inherit;">
        Scss
        </router-link>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
 
  }),
};
</script>