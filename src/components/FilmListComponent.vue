<template>
  <v-container fluid mt-0 pt-0>
    <v-row v-if="!loading">
      <template v-for="(item, index) in filmList">
        <v-flex :key="item.id" wrap class="col-md-6 col-xs-12 col-sm-6  col-lg-6 col-xl-6 mx-auto">
          <v-card class="film-list__film-card">
            <v-layout class="card-image-description-wrapper column">
              <v-flex>
                <v-img :src="getFilmImageUrl(item)" :lazy-src="getFilmImageUrl(item)" :width="imageSize" min-width="80px" class="ma-2 film-list__image mx-auto" alt="нет изображения"></v-img>
              </v-flex>
              <v-flex>
                <v-layout column mx-2 class="film-list__bottom-text-wrapper">
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
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </template>
      <div class="text-center film-list__pagination-container" v-if="showPagination">
        <v-pagination v-model="page" :length="totalPages" :total-visible="8"></v-pagination>
      </div>
    </v-row>
    <v-layout v-else wrap>
      <v-skeleton-loader :key="n" class="col-md-5 col-xs-12 col-sm-12 mx-auto film-list__sceleton-loader" v-for="n of 6" ref="skeleton" :boilerplate="boilerplate" :type="type" :tile="tile"></v-skeleton-loader>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./FilmListComponent.ts">
</script>

<style scoped>
  .film-list__film-title-wrapper {
    align-items: center;
  }

  .film-list__film-card {
    min-height: 310px;
    height: 100%;
  }

  .film-list__image {
    max-height: 290px;
  }

  .card-image-description-wrapper {
    height: 100%;
  }

  .film-list__progress-circular {
    min-width: 40px;
    align-self: center;
  }

  .film-list__bottom-text-wrapper {
    height: 100%;
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
