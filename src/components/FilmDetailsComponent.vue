<template>
  <div v-if="!loading">
    Подробная информация о фильме {{ $route.params.id }}
    <v-img :src="imageUrl + movieDetails.poster_path" width="185px"></v-img>
    <div> {{ movieDetails.title }}</div>
    <div v-if="getMovieUrl()">
      <iframe width="560" height="315" :src="getMovieUrl()" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script src="./FilmDetailsComponent.ts">
</script>

<style scoped>
</style>

<style>
</style>
