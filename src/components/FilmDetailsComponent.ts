import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import IMovieDetails from './../types/MovieDetails';

@Component({
  filters: {
    formatCurrency(value: string | number): string {
      return value.toString().replace(/(?<=\d)(?=(\d{3})+(?!\d))/gm, ' ');
    }
  }
})
export default class FilmDetailsComponent extends Vue {
  imageUrl = '';
  loading = true;
  videoHeight = 0;
  videoWidth = 0;
  screenWidth = 0;
  screenHeight = 0;

  get movieDetails(): IMovieDetails {
    return this.$store.getters.getMovieDetails;
  }

  set movieDetails(value: IMovieDetails) {
    this.$store.commit('setMovieDetails', value);
  }

  async created(): Promise<void> {
    await this.load();
    this.getImageUrl();
    this.prepareVideoPlayer();
    this.loading = false;
  }

  beforeDestroy(): void {
    window.removeEventListener("resize", this.getMoviePlayerSize, true);
  }

  async load(): Promise<void> {
    await this.$store.dispatch("fetchConfiguration");
    await this.$store.dispatch('fetchMovieDetails', { id: this.$route.params.id, append: ['videos', 'images', 'actors'] });
  }

  prepareVideoPlayer(): void {
    this.getMoviePlayerSize();
    window.addEventListener("resize", this.getMoviePlayerSize, true);
  }

  getImageUrl(size = 'w185'): void {
    this.imageUrl = this.$store.getters.getImageBaseUrl + size;
  }

  getMovieUrl(): string | null {
    if (this.movieDetails.videos
      && this.movieDetails.videos.results.length > 0
      && this.movieDetails.videos.results[0].site === 'YouTube'
      && this.movieDetails.videos.results[0].key) {
      return `https://www.youtube.com/embed/${this.movieDetails.videos.results[0].key}?start=1`;
    }
    return null
  }

  getMoviePlayerSize(): void {
    this.screenWidth = document.documentElement.clientWidth;
    this.screenHeight = document.documentElement.clientHeight;
    if (this.movieDetails.videos
      && this.movieDetails.videos.results.length > 0
      && this.movieDetails.videos.results[0].size
      && this.screenWidth > this.movieDetails.videos.results[0].size) {
      this.videoWidth = this.movieDetails.videos.results[0].size;
      this.videoHeight = this.videoWidth * 0.5625;
    } else {
      this.videoWidth = this.screenWidth * 0.9;
      this.videoHeight = this.videoWidth * 0.5625;
    }
  }
}



