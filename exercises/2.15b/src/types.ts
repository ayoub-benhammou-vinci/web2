interface Movie {
    id: number,
    title : string, 
    director: string, 
    duration: number,
    imageUrl?: string, 
    description?: string, 
    budget?: number
}

type NewMovie = Omit<Movie, "id">;

interface MovieContext {
    movies : Movie[],
    onMovieAdded: (newMovie : NewMovie) => Promise<void>;
    onMovieDeleted: (id : number) => Promise<void>;
}

export type {Movie, MovieContext, NewMovie};