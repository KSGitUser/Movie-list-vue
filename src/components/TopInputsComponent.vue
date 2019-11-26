<template>
  <v-container fluid pb-0>
    <v-col class="d-flex genre-input-wrapper" pb-0 cols="4" xl="12" lg="2">
      <v-select v-model="innerGenreId" :items="genresList" item-text="name" item-value="id" label="Выберете жанр" outlined class="genre-input" :hide-details="true"></v-select>
    </v-col>
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
