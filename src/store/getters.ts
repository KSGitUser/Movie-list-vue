import { IState } from './state';
import { IMovieList } from '../types/IMovieList';
import IMovieDetails from './../types/MovieDetails';


export const getters = {
  getImageBaseUrl(state: IState): string {
    return state.configuration.images.base_url;
  },

  getGenreId(state: IState): number | null {
    return state.genreId;
  },

  getFilmList(state: IState): IMovieList[] {
    return state.filmList;
  },

  getMovieDetails(state: IState): IMovieDetails {
    return state.movieDetails;
  }
}