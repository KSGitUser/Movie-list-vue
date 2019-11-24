<template>
  <v-container fluid pb-0>
    <v-col class="d-flex genre-input-wrapper" pb-0 cols="4" xl="12" lg="2">
      <v-select v-model="innerGenreId" :items="genresList" item-text="name" item-value="id" label="Выберете жанр" outlined class="genre-input" :hide-details="true"></v-select>
    </v-col>
    <!--  <v-list>
      <v-subheader>ЖАНР</v-subheader>
      <v-list-item-group v-model="innerGenreId"=".genre-input" color="primary" row>
        <v-list-item v-for="(item, index) in genresList" :key=item.id class="title">
          <v-list-item-content>
            <v-list-item-title v-text="item.name" @click="">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list> -->
  </v-container>
</template>

<script lang="ts" src="./SideMenuComponent.ts"></script>


<style scoped>
  .genre-input {}

</style>

<style>
  .v-menu__content.theme--light.menuable__content__active {
    z-index: 4 !important;
  }

</style>
