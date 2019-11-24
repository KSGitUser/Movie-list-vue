<template>
  <v-container fluid mt-0 pt-0>
    <v-row v-if="!loading">
      <template v-for="(item, index) in filmList">
        <v-col :key="item.id" md=6 sm=12>
          <v-card class="film-list__film-card">
            <v-layout>
              <v-img :src="imageUrl + item.poster_path" :lazy-src="imageUrl + item.poster_path" max-width="185" class="ma-2 film-list__image" :alt="item.title"></v-img>
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
                  <div class="ma-3">
                    Подробнее...
                  </div>
                </div>
              </v-layout>
            </v-layout>
          </v-card>
        </v-col>
      </template>
      <div class="text-center film-list__pagination-container">
        <v-pagination v-model="page" :length="totalPages" :total-visible="8"></v-pagination>
      </div>
    </v-row>
    <v-skeleton-loader ref="skeleton" :boilerplate="boilerplate" :type="type" :tile="tile" class="mx-auto" v-else></v-skeleton-loader>
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

</style>

<style>
</style>
