<template>
  <v-container fluid>
    <v-row>
      <template v-for="(item, index) in filmList">
        <v-col :key="item.id" md=6 sm=12>
          <v-card>
            <v-layout>
              <v-flex ma-2>
                <v-img :src="imageUrl + item.poster_path" max-width="185"></v-img>
              </v-flex>
              <v-layout row mx-2>
                <v-flex ma-3>
                  {{ item.title }}
                </v-flex>
                <v-flex ma-3 class="caption">
                  {{ item.overview }}
                </v-flex>
              </v-layout>
            </v-layout>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./FilmListComponent.ts">
</script>

<style scoped>
</style>

<style>
</style>
