import { IState } from './state';
import MovieDetails from '@/types/MovieDetails';

export const mutations = {
  setConfiguration(state: IState, payload: any) {
    state.configuration = Object.assign(state.configuration, payload);
  },

  setGenreId(state: IState, payload: string) {
    state.genreId = payload;
  },

  setMovieDetails(state: IState, payload: number) {
    let newObj = new MovieDetails()
    state.movieDetails = Object.assign(newObj, payload);
  },

  setIsFilmListLoading(state: IState, payload: boolean) {
    state.isFilmListLoading = payload;
  },

  setFilmListPage(state: IState, payload: number) {
    state.filmListPage = payload;
  },

  setFilmList(state: IState, payload: []) {
    state.filmList = [...payload];
  },

  setTotalFilmListResult(state: IState, payload: number) {
    state.totalFilmListResults = payload;
  },

  setTotalFilmListPages(state: IState, payload: number) {
    state.totalFilmListPages = payload;
  },

}