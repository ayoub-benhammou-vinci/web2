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

type Level = "easy" | "medium" | "hard";

interface Text {
  id: string, 
  content: string, 
  level: Level
}

type NewFilms = Omit<Films, "id">;

type NewPizza = Omit<Pizza, "id">;

type NewText = Omit<Text, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Films, NewFilms, Text, Level, NewText};
