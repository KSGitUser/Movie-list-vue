import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { IMovieList } from '../types/IMovieList';

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

  showPagination = false;

  boilerplate = false;
  tile = false;
  type = 'card-avatar';

  get filmList(): IMovieList[] {
    return this.$store.getters.getFilmList;
  };

  get genreId(): number | null {
    return this.$store.getters.getGenreId;
  };

  imageUrl = '';

  async created(): Promise<void> {
    await this.getImageUrl();
    this.getFilmList();
  }

  mounted(): void {
    setTimeout(() => this.showPagination = true, 1000);
  }

  async getImageUrl(size = 'w185'): Promise<void> {
    await this.$store.dispatch("fetchConfiguration");
    this.imageUrl = this.$store.getters.getImageBaseUrl + size;
  }

  @Watch('genreId')
  onGenreIdChange(value: string): void {
    this.page = 1;
    this.$store.commit('setGenreId', value);
    this.getFilmList();
  }

  getFilmImageUrl(item: IMovieList): string {
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
  onPageChange(value: number): void {
    this.page = value;
    this.getFilmList();
  }

  async getFilmList(): Promise<void> {
    await this.$store.dispatch('fetchFilmList');
    this.cutOverviewText();
  }

  cutOverviewText(): void {
    this.filmList.forEach(item => {
      if (item.overview.length > 180) {
        item.overview = item.overview.substring(0, 180) + "..."
      }
    })
  }

  get imageSize(): string {
    const innerWidth = window.innerWidth;
    const imgSize = 185
    return imgSize < innerWidth / 3 ? imgSize + 'px' : innerWidth / 3 + 'px';
  }

  getMovieDetails(id: number): void {
    const payload = { id, append: ['videos', 'images'] }
    this.$store.dispatch('fetchMovieDetails', payload);
    this.$router.push(`/movie/${id}`)
  }
}