<template>
  <v-container>
    <v-col class="d-flex" cols="4">
      <v-select v-model="innerGenreId" :items="genresList" item-text="name" item-value="id" label="Выберете жанр" outlined></v-select>
    </v-col>
    <!--  <v-list>
      <v-subheader>ЖАНР</v-subheader>
      <v-list-item-group v-model="innerGenreId" color="primary" row>
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
</style>

<style>
</style>
