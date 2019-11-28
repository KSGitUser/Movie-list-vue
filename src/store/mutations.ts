import { IState } from './state';
import MovieDetails from '../types/MovieDetails';
import { IGenre } from '../types/IGenre';

export const mutations = {
  setConfiguration(state: IState, payload: any): void {
    state.configuration = Object.assign(state.configuration, payload);
  },

  setGenreId(state: IState, payload: number | null): void {
    state.genreId = payload;
  },

  setGenreList(state: IState, payload: IGenre[]): void {
    state.genres = [...payload];
  },

  setMovieDetails(state: IState, payload: number): void {
    const newObj = new MovieDetails()
    state.movieDetails = Object.assign(newObj, payload);
  },

  setIsFilmListLoading(state: IState, payload: boolean): void {
    state.isFilmListLoading = payload;
  },

  setFilmListPage(state: IState, payload: number): void {
    state.filmListPage = payload;
  },

  setFilmList(state: IState, payload: []): void {
    state.filmList = [...payload];
  },

  setTotalFilmListResult(state: IState, payload: number): void {
    state.totalFilmListResults = payload;
  },

  setTotalFilmListPages(state: IState, payload: number): void {
    state.totalFilmListPages = payload;
  },

}