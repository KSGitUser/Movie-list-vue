<template>
  <v-container class="hello">
    <v-layout fluid column full-width>
      <top-inputs fluid></top-inputs>
      <film-list :genre-id.sync="genreId" mt-0></film-list>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';
  import {
    configApp
  } from '@/config/configApp';
  import TopInputsComponent from '@/components/TopInputsComponent.vue';
  import FilmListComponent from '@/components/FilmListComponent.vue';

  @Component({
    components: {
      "top-inputs": TopInputsComponent,
      "film-list": FilmListComponent,
    }
  })
  export default class MainPageComponent extends Vue {

    genresList = [];

    async created() {
      this.$store.dispatch('fetchConfiguration');
    }
    genreId = this.$store.getters.getGenreId;
  }

</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
