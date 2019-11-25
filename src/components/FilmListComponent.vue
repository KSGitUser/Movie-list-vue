<template>
  <v-container fluid mt-0 pt-0>
    <v-row v-if="!loading">
      <template v-for="(item, index) in filmList">
        <v-col :key="item.id" md=6 sm=12>
          <v-card class="film-list__film-card">
            <v-layout>
              <v-img :src="getFilmImageUrl(item)" :lazy-src="getFilmImageUrl(item)" max-width="185" class="ma-2 film-list__image" :alt="item.title"></v-img>
              <v-layout column mx-2>
                <v-layout class="film-list__film-title-wrapper">
                  <v-layout ma-3 class="film-list__film-title">
                    <v-progress-circular :rotate="270" :size="40" :width="5" :value="item.vote_average*10" color="teal" class="mr-2 film-list__progress-circular">
                      {{ item.vote_average }}
                    </v-progress-circular>
                    <div>
                      <v-flex left class="subtitle-1">
                        {{ item.title }}
                      </v-flex>
                      <v-flex left class="subtitle-2 font-weight-light">
                        {{ item.release_date }}
                      </v-flex>
                    </div>
                  </v-layout>
                </v-layout>
                <v-spacer></v-spacer>
                <v-flex ma-3 class="caption">
                  {{ item.overview }}
                </v-flex>

                <div column>
                  <v-divider></v-divider>
                  <div class="ma-3 film-list__info-button" @click="getMovieDetails(item.id)">
                    Подробнее...
                  </div>
                </div>
              </v-layout>
            </v-layout>
          </v-card>
        </v-col>
      </template>
      <div class="text-center film-list__pagination-container" v-if="showPagination">
        <v-pagination v-model="page" :length="totalPages" :total-visible="8"></v-pagination>
      </div>
    </v-row>
    <v-row v-else>
      <template v-for="n of 6">
        <v-col :key="n" md=6 sm=12>
          <v-skeleton-loader ref="skeleton" :boilerplate="boilerplate" :type="type" :tile="tile" class="mx-auto film-list__sceleton-loader"></v-skeleton-loader>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./FilmListComponent.ts">
</script>

<style scoped>
  .film-list__film-title-wrapper {
    align-items: center;
  }

  .film-list__film-card {
    max-height: 310px;
    height: 100%;
  }

  .film-list__image {
    max-height: 290px;
  }

  .film-list__progress-circular {
    min-width: 40px;
    align-self: center;
  }

  .film-list__pagination-container {
    min-width: 100%;
  }

  .film-list__info-button {
    cursor: pointer;
  }

  .film-list__sceleton-loader {
    min-width: 470px;
    min-height: 315px;
  }

</style>

<style>
</style>
