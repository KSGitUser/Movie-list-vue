import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { configApp } from '@/config/configApp';

@Component({
  name: "film-list",
})
export default class FilmListComponent extends Vue {
  page: number = 1;
  totalResults: number = 0;

  filmList: {}[] = [];


  get genreId() {
    return this.$store.getters.getGenreId;
  };

  imageUrl = '';

  async created() {
    await this.getFilmList(this.genreId);
    this.imageUrl = this.$store.getters.getImageBaseUrl + '/w185';
  }

  imageSrc(item: any) {

  }

  @Watch('genreId')
  async onGenreIdChange(value: any) {
    await this.getFilmList(value);
  }


  async getFilmList(value: any) {
    try {
      let listUrl = new URL(
        `https://api.themoviedb.org/3/discover/movie?api_key=${configApp.apiKey3}&language=${configApp.language}&page=${this.page}&with_genres=${value}`
      );
      const response = await fetch(
        listUrl.toString(),
      );
      const data = await response.json();
      this.filmList = data.results;
      this.page = data.page;
      this.totalResults = data.totalResults;
    }
    catch (e) {
      console.error("Error on getting film list, ", e);
    }
  }

  async load(): Promise<void> {

  }
}