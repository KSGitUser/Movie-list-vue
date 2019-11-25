import { IState } from './state';
import { IMovieList } from '@/types/IMovieList';
import { IMovieDetails } from '@/types/IMovieDetails';

export const getters = {
  getImageBaseUrl(state: any): string {
    return state.configuration.images.base_url;
  },

  getGenreId(state: any): number {
    return state.genreId;
  },

  getFilmList(state: IState): IMovieList[] {
    return state.filmList;
  },

  getMovieDetails(state: IState): IMovieDetails {
    return state.movieDetails;
  }
}