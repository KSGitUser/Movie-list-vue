import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { IMovieDetails, IResult } from '@/types/IMovieDetails';

@Component({})
export default class FilmDetailsComponent extends Vue {
  imageUrl: string = '';
  loading: boolean = true;

  get movieDetails(): IMovieDetails {
    return this.$store.getters.getMovieDetails;
  }

  set movieDetails(value) {
    this.$store.commit('setMovieDetails', value);
  }
  async created() {
    await this.getImageUrl();
    await this.$store.dispatch('fetchMovieDetails', { id: this.$route.params.id, append: ['videos', 'images'] });
    console.log(this.movieDetails);
    this.loading = false;
  }

  async getImageUrl(size: string = 'w185') {
    await this.$store.dispatch("fetchConfiguration");
    this.imageUrl = this.$store.getters.getImageBaseUrl + size;
  }

  getMovieUrl(): string | null {
    if (this.movieDetails.videos
      && this.movieDetails.videos.results[0].site === 'YouTube'
      && this.movieDetails.videos.results[0].key) {
      return `https://www.youtube.com/embed/${this.movieDetails.videos.results[0].key}?start=1`;
    }
    return null
  }


}



