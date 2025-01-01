interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

type NewMovie = Omit<Movie, "id">;

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (newMovie: NewMovie) => Promise<void>;
  onMovieDeleted: (id: number) => Promise<void>;
  registerUser: (newUser: User) => Promise<void>;
  loginUser : (user: User) => Promise<void>;
}

interface User {
  username: string;
  password: string;
}

interface AuthenticatedUser {
  username: string;
  token: string;
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

export type {
  Movie,
  MovieContext,
  NewMovie,
  User,
  AuthenticatedUser,
  MaybeAuthenticatedUser,
};
