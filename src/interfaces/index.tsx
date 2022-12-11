export declare namespace T {

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
  
}
