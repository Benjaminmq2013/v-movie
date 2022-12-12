export declare namespace T {

  // Popular Movies-List Types
  interface Results {
    page: number;
    results?: Movies[] | null;
    total_pages: number;
    total_results: number;
  }

  interface Movies {
    adult: boolean;
    backdrop_path: string;
    genre_ids?: number[] | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }



  // Movie Details Types

  interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: null;
    budget: number;
    genres?: (MovieGenres)[] | null;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: null;
    production_companies?: (ProductionCompanies)[] | null;
    production_countries?: (ProductionCountries)[] | null;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages?: (SpokenLanguages)[] | null;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  interface MovieGenres {
    id: number;
    name: string;
  }
  interface ProductionCompanies {
    id: number;
    logo_path?: string | null;
    name: string;
    origin_country: string;
  }
  interface ProductionCountries {
    iso_3166_1: string;
    name: string;
  }
  interface SpokenLanguages {
    iso_639_1: string;
    name: string;
  }
  

  /* cast */

  interface MovieCredits {
    id: number;
    cast?: (MovieCast)[] | null;
    crew?: (MovieCrew)[] | null;
  }
  interface MovieCast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }
  interface MovieCrew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string | null;
    credit_id: string;
    department: string;
    job: string;
  }


  // Recommendations
  export interface RecommendationsData {
    page: number;
    results: (Recommendations)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface Recommendations {
    adult: boolean;
    backdrop_path?: string | null;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path?: string | null;
    media_type: string;
    genre_ids?: (number | null)[] | null;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  

  
}
