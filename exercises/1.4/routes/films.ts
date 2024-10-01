import { Films } from "../types";
import { Router } from "express";
import { NewFilms } from "../types";

const router = Router();

function createFilm(film : Films): Films {
    if(film.duration < 0){
        throw new Error("Wrong minimum duration");
    }

    if(film.budget !== undefined && film.budget < 0){
        throw new Error("Wrong minimum budget");
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

const defaultFilms = [fast_and_furious,cars,roblox];

router.get("/", (req, res) => {
    //Cela veut dire qu'il n'y a pas de filtre dans l'URL
    if(req.query["minimum-duration"]){
        //On passe du String ('4') -> Number (4)
        const min_duration = Number(req.query["minimum-duration"]);
        const filtredFilms = defaultFilms.filter((film) => {
            return film.duration >= min_duration;
        });
        return res.json(filtredFilms);
    }
    return res.json(defaultFilms);
});

//2e API
router.get("/:id", (req, res) => {
    
    const id = Number(req.params.id);
    const film = defaultFilms?.find((filmBase) => filmBase.id == id);
    if(film){
        return res.json(film);
    }

    return res.json("ID doesn't exist");
    
});


router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||

        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||

        !body.title.trim() ||
        !body.director.trim() ||

        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0))
    ) {
        return res.sendStatus(400);
    }

    const { title, director, duration, budget, description, imageUrl } = body as NewFilms;

    if(body?.duration <= 0){
        return res.json("Wrong minimum duration");
    }

    const nextId = defaultFilms.length + 1;

    const newFilm: Films = {
        id: nextId,
        title,
        director,
        duration,
        budget,
        description,
        imageUrl
    };

    console.log("Etat de budget : " + budget);
    console.log("Etat de description : " + description);
    console.log("Etat de imageUrl : " + imageUrl);

    defaultFilms.push(newFilm);
    return res.json(newFilm);
});

export default router;

