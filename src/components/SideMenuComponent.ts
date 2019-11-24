import Vue from 'vue';
import { configApp } from '@/config/configApp';
import { Component, Watch } from 'vue-property-decorator'
import { IGenre } from '@/types/IGenre';


@Component({
  name: "side-menu"
})
export default class SideMenuComponent extends Vue {
  genresList: IGenre[] = [];
  innerGenreId: number = NaN;

  created() {
    this.load();
  }

  @Watch('innerGenreId')
  onInnerGenreIdChange(value: any): void {
    this.$store.commit('setGenreId', value);
  }
  async load() {
    let listUrl = new URL(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${configApp.apiKey3}&language=${configApp.language}`
    );
    const response = await fetch(
      listUrl.toString(),
    );
    const data = await response.json();
    this.genresList = data.genres;
    this.innerGenreId = data.genres[0].id;
    console.log("this.genresList =>", this.genresList)
  }
}