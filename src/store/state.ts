import { IMovieList } from '@/types/IMovieList';

export const state: IState = {
  genres: [],
  configuration: { images: {}, "change_keys": [] },
  genreId: '28',
  filmDetails: {},
  isFilmListLoading: false,
  filmListPage: 1,
  filmList: [],
  totalFilmListResults: 0,
  totalFilmListPages: 0,
}

export interface IState {
  genres: [],
  configuration: { images: {}, "change_keys": [] },
  genreId: string,
  filmDetails: {},
  isFilmListLoading: boolean,
  filmListPage: number,
  filmList: IMovieList[],
  totalFilmListResults: number,
  totalFilmListPages: number,
}


