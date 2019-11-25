import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { configApp } from '@/config/configApp';
import { IMovieList } from '@/types/IMovieList';

@Component({
  name: "film-list",
})
export default class FilmListComponent extends Vue {
  get page(): number {
    return this.$store.state.filmListPage;
  };
  set page(value: number) {
    this.$store.commit('setFilmListPage', value);
  }
  get totalResults(): number {
    return this.$store.state.totalFilmListResults;
  };

  get totalPages(): number {
    return this.$store.state.totalFilmListPages;
  };

  get loading(): boolean {
    return this.$store.state.isFilmListLoading;
  };
  set loading(value: boolean) {
    this.$store.commit('setIsFilmListLoading', value);
  }

  showPagination: boolean = false;

  boilerplate = false;
  tile = false;
  type = 'card-avatar';

  get filmList(): IMovieList[] {
    return this.$store.getters.getFilmList;
  };

  get genreId() {
    return this.$store.getters.getGenreId;
  };

  imageUrl = '';

  async created() {
    await this.getImageUrl();
    this.getFilmList();
  }

  mounted() {
    setTimeout(() => this.showPagination = true, 1000);
  }

  async getImageUrl(size: string = 'w185') {
    await this.$store.dispatch("fetchConfiguration");
    this.imageUrl = this.$store.getters.getImageBaseUrl + size;
  }

  @Watch('genreId')
  async onGenreIdChange(value: string) {
    this.page = 1;
    this.$store.commit('setGenreId', value);
    this.getFilmList();
  }

  getFilmImageUrl(item: IMovieList) {
    if (
      item.hasOwnProperty('poster_path')
      && item.poster_path
      && this.imageUrl
    ) {
      return this.imageUrl + item.poster_path;
    }
    return '';
  }

  @Watch('page')
  async onPageChange(value: number) {
    this.page = value;
    this.getFilmList();
  }

  async getFilmList() {
    await this.$store.dispatch('fetchFilmList');
    this.cutOverviewText();

  }

  cutOverviewText() {
    this.filmList.forEach(item => {
      if (item.overview.length > 200) {
        item.overview = item.overview.substring(0, 200) + "..."
      }
    })
  }

  getMovieDetails(id: number) {
    const payload = { id, append: ['videos', 'images'] }
    this.$store.dispatch('fetchMovieDetails', payload);
    this.$router.push(`/movie/${id}`)
  }
}