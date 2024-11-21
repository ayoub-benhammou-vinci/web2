interface Movie {
    title : string, 
    director: string, 
    duration: number,
    picture?: string, 
    description?: string, 
    budget?: number
}

interface MovieAddContext {
    movies : Movie[],
    addMovie: (newMovie : Movie) => void;
}

export type {Movie, MovieAddContext};