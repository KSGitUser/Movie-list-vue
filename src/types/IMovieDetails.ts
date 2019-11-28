import { IGenre } from './IGenre';
import { IBelongsToCollection } from './IBelongsToCollection';

export default interface IMovieDetails {
  adult: boolean | null;
  backdrop_path: string | null;
  belongs_to_collection: IBelongsToCollection | null;
  budget: number | null;
  genres: IGenre[] | null;
  homepage: string | null;
  id: number | null;
  imdb_id: string | null;
  original_language: string | null;
  original_title: string | null;
  overview: string | null;
  popularity: number | null;
  poster_path: string | null;
  production_companies: IProductionCompany[] | null;
  production_countries: IProductionCountry[] | null;
  release_date: string | Date | null;
  revenue: number | null;
  runtime: number | null;
  spoken_languages: ISpokenLanguage[] | null;
  status: string | null;
  tagline: string | null;
  title: string | null;
  video: boolean | null;
  vote_average: number | null;
  vote_count: number | null;
  videos?: IVideos | null;
  images?: IImages | null;
}

export interface IImages {
  backdrops: any[];
  posters: any[];
}

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface IVideos {
  results: IResult[];
}

export interface IResult {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
