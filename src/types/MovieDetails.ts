import IMovieDetails, { IVideos, IImages, IProductionCompany, IProductionCountry, ISpokenLanguage } from './IMovieDetails';
import { IGenre } from './IGenre';
import { IBelongsToCollection } from './IBelongsToCollection';

export default class MovieDetails implements IMovieDetails {
  adult: boolean | null = null;
  backdrop_path: string | null = null;
  belongs_to_collection: IBelongsToCollection | null = null;
  budget: number | null = null;
  genres: IGenre[] | null = null;
  homepage: string | null = null;
  id: number | null = null;
  imdb_id: string | null = null;
  original_language: string | null = null;
  original_title: string | null = null;
  overview: string | null = null;
  popularity: number | null = null;
  poster_path: string | null = null;
  production_companies: IProductionCompany[] | null = null;
  production_countries: IProductionCountry[] | null = null;
  release_date: string | Date | null = null;
  revenue: number | null = null;
  runtime: number | null = null;
  spoken_languages: ISpokenLanguage[] | null = null;
  status: string | null = null;
  tagline: string | null = null;
  title: string | null = null;
  video: boolean | null = null;
  vote_average: number | null = null;
  vote_count: number | null = null;
  videos?: IVideos | null = null;
  images?: IImages | null = null;
}

