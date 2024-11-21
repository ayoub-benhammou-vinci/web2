interface Movie {
    id: number,
    title : string, 
    director: string, 
    duration: number,
    picture?: string, 
    description?: string, 
    budget?: number
}

interface MovieContext {
    movies : Movie[],
    addMovie: (newMovie : Movie) => void;
    moviesTitles : string[];
}

export type {Movie, MovieContext};