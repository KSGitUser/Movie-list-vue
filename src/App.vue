<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" dark>
      <div class="d-flex align-center display-1">
        <router-link class="topbar__router-link" to="/">Каталог фильмов</router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link class="topbar__router-link" to="/">
        <v-icon>mdi-home</v-icon>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';
  import MainPageComponent from './components/MainPageComponent.vue';

  export default Vue.extend({
    name: 'App',

    components: {
      MainPageComponent,
    },

    data: () => ({
      //
    }),
  });

</script>

<style scoped>
  .topbar__router-link {
    text-decoration: none;
    color: white;
  }

</style>
