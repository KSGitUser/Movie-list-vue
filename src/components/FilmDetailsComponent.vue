<template>
  <v-container v-if="!loading">
    <v-row>
      <v-col cols="auto mx-auto">
        <v-img :src="imageUrl + movieDetails.poster_path" width="185px" class="film-details__poster"></v-img>
      </v-col>
      <v-col class="col-sm-12 col-xs-12 col-12">
        <div class="film-details__title display-1" mb="3" v-if="movieDetails.title">
          {{ movieDetails.title }}
        </div>
        <div class="film-details__title display-1" mb="3" v-else>
          Нет информации о фильме
        </div>
        <div v-if="movieDetails.release_date" class="font-italic font-weight-medium">
          {{ movieDetails.release_date }}
        </div>
        <div v-if="movieDetails.budget" class="font-weight-light caption">
          Бюджет: ${{ movieDetails.budget | formatCurrency }}
        </div>
        <div v-if="movieDetails.revenue" class="font-weight-light caption">
          Сборы: ${{ movieDetails.revenue | formatCurrency }}
        </div>
        <div class="mt-4">
          {{ movieDetails.overview }}
        </div>
      </v-col>
    </v-row>
    <div v-if="this.movieDetails.videos.results.length > 0">
      <v-row v-if="getMovieUrl() && !loading">
        <v-col>
          <div>
            <iframe class="film-details__iframe mx-auto" :width="videoWidth" :height="videoHeight" :src="getMovieUrl()" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </v-col>
      </v-row>
      <v-skeleton-loader v-else class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
    </div>
  </v-container>
</template>

<script src="./FilmDetailsComponent.ts">
</script>

<style scoped>
  .film-details__iframe {
    /*  width: 100%; */
    display: block;
  }

</style>

<style>
</style>
