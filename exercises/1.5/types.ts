interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface Films {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

type NewFilms = Omit<Films, "id">;

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Films, NewFilms};
