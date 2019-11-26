import { IMovieList } from '@/types/IMovieList';
import { IMovieDetails } from '@/types/IMovieDetails';
import { IGenre } from '@/types/IGenre';
import MovieDetails from '@/types/MovieDetails';

export const state: IState = {
  genres: [],
  configuration: { images: {}, "change_keys": [] },
  genreId: null,
  movieDetails: new MovieDetails(),
  isFilmListLoading: false,
  filmListPage: 1,
  filmList: [],
  totalFilmListResults: 0,
  totalFilmListPages: 0,
}

export interface IState {
  genres: IGenre[],
  configuration: { images: {}, "change_keys": [] },
  genreId: number | null,
  movieDetails: IMovieDetails,
  isFilmListLoading: boolean,
  filmListPage: number,
  filmList: IMovieList[],
  totalFilmListResults: number,
  totalFilmListPages: number,
}


