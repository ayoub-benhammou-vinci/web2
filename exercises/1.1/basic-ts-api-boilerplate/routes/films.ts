import {Films} from "../types"
import { Router } from "express";

const router = Router();

function createFilm(film : Films): Films {
    if(film.duration < 0){
        throw new Error("La durée doit être un nombre positif");
    }

    if(film.budget !== undefined && film.budget < 0){
        throw new Error("Le budget doit être un nombre positif");
    }
    return film;
}
const fast_and_furious: Films = createFilm({
    id: 1,
    title : "Fast And Furious",
    director: "Ayoub",
    duration : 60,
    budget: 100
});

const cars: Films = createFilm({
    id: 2,
    title : "Cars",
    director: "Uzumaki",
    duration : 120,
    budget: 100,
    description: "A car who want to win"
});

const roblox: Films = createFilm({
    id: 3,
    title : "Roblox",
    director: "Miya",
    duration : 30,
});

router.get("/", (_req, res) => {
    const defaultFilms = [fast_and_furious,cars,roblox];
    return res.json(defaultFilms);
});

export default router;

