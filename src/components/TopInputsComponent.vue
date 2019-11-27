<template>
  <v-container fluid pb-0>
    <v-flex class="d-flex genre-input-wrapper col-md-6 col-xs-12 col-sm-6  col-lg-4 col-xl-4 mx-auto">
      <v-select v-model="innerGenreId" :items="genresList" item-text="name" item-value="id" label="Выберете жанр" outlined class="genre-input" :hide-details="true"></v-select>
    </v-flex>
  </v-container>
</template>

<script lang="ts" src="./TopInputsComponent.ts"></script>


<style scoped>
</style>

<style>
  .v-menu__content.theme--light.menuable__content__active {
    z-index: 4 !important;
  }

</style>
