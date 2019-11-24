import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { configApp } from '@/config/configApp';
import { IMovieList } from '@/types/IMovieList';

@Component({
  name: "film-list",
})
export default class FilmListComponent extends Vue {
  page: number = 1;
  totalResults: number = 0;
  totalPages: number = 0;
  loading: boolean = false;

  filmList: Array<IMovieList> = [];

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

  @Watch('page')
  async onPageChange() {
    await this.getFilmList(this.genreId);
  }


  async getFilmList(value: any) {
    try {
      this.loading = true;
      let listUrl = new URL(
        `https://api.themoviedb.org/3/discover/movie?api_key=${configApp.apiKey3}&language=${configApp.language}&page=${this.page}&with_genres=${value}`
      );
      const response = await fetch(
        listUrl.toString(),
      );
      const data = await response.json();
      this.filmList = data.results;
      this.cutOverviewText();
      this.page = data.page;
      this.totalResults = data.total_results;
      this.totalPages = data.total_pages;
      this.loading = false;
    }
    catch (e) {
      console.error("Error on getting film list, ", e);
    }
  }

  cutOverviewText() {
    this.filmList.forEach(item => {
      if (item.overview.length > 200) {
        item.overview = item.overview.substring(0, 200) + "..."
      }
    })
  }

  async load(): Promise<void> {

  }
}