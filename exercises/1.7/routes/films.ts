
import { Router } from "express";
import path from "node:path";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");
import { NewFilms } from "../types";
import { Films } from "../types";

const router = Router();

const defaultFilms : Films[] =[
    {
        id: 1,
        title : "Fast And Furious",
        director: "Ayoub",
        duration : 60,
        budget: 100
    },

    {
        id: 2,
        title : "Cars",
        director: "Uzumaki",
        duration : 120,
        budget: 100,
        description: "A car who want to win"
    }, 

    {
        id: 3,
        title : "Roblox",
        director: "Miya",
        duration : 30,
    }

];

router.get("/", (req, res) => {

    const films = parse(jsonDbPath, defaultFilms);

    //Cela veut dire qu'il n'y a pas de filtre dans l'URL
    if(req.query["minimum-duration"]){
        const min_duration = Number(req.query["minimum-duration"]);
        if(typeof min_duration != "number" || min_duration <= 0){
            res.sendStatus(400);
        }
        //On passe du String ('4') -> Number (4)
        const filtredFilms = films.filter((film) => {
            return film.duration >= min_duration;
        });
        return res.json(filtredFilms);
    }
    return res.json(films);
});

//2e API
router.get("/:id", (req, res) => {

    const films = parse(jsonDbPath, defaultFilms);
    const id = Number(req.params.id);
    const film = films?.find((filmBase) => filmBase.id == id);
    if(film){
        return res.json(film);
    }

    return res.sendStatus(404);
    
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
    const films = parse(jsonDbPath, defaultFilms);

    if(body?.duration <= 0){
        return res.json("Wrong minimum duration");
    }

    for (const film of films) {
        if(film.title == body.title && film.director == body.director){
            res.sendStatus(400);
        }
    }

    const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

    
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

    films.push(newFilm);
    //Transform Object to JSON
    serialize(jsonDbPath, films);
    return res.json(newFilm);
});


router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id == id);
    //Si il ne trouve pas l'objet, il renverra -1 -> Status 404 (Erreur de paramètre)
    if(index == -1){
        res.sendStatus(404);
    }
    //1er paramètre : L'indice ou se trouve l'objet à effacer, 2e paramètre : Le nombre de fois qu'il faut le supprimer
    const deleteFilm = films.splice(index, 1);
    serialize(jsonDbPath, films);
    res.json(deleteFilm[0]);
});

router.patch("/:id", (req, res) => {
    //Récupérer l'id et le parse => '2' -> 2
    const id = Number(req.params.id);
    const films = parse(jsonDbPath, defaultFilms);

    //Trouver le bon id correspondant grâce à la fonction find
    const film = films.find((film) => film.id === id);

    //Si le film est undefined => On ne l'a pas trouvé dans notre tableau => Pas de mise à jour !
    //Erreur 404 : Problème liés aux paramètres (id) => Le programme s'arrête et renvoie le 404
    if(!film){
        return res.sendStatus(409);
    }

    //Vérification des attributs pour éviter le type any en TS
    const body: unknown = req.body;

    if(
        !body ||
        typeof body !== "object" ||
        ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
        ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
        ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
        ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
    ) {
        return res.sendStatus(400);
    }

    //Nouveau : Partial pour rendre tous les attributs facultatifs
    //A chaque fois qu'on met "title" in body, ... on est obligé de le déclarer dans notre nouvelle instance
    const {title, director, duration, budget, description, imageUrl }: Partial<NewFilms> = body;
    
    //On fera du cas par cas => Si l'utilisateur décide de changer de title, alors...
    //On modifie l'objet courant (Celui qu'on a trouvé au début grâce à la fonction find)
    if(title) film.title = title;
    if(director) film.director = director;
    if(duration) film.duration = duration;
    if(budget) film.budget = budget;
    if(description) film.description = description;
    if(imageUrl) film.imageUrl = imageUrl;

    //Après avoir fait la mise à jour, on return l'objet modifier
    serialize(jsonDbPath, films);
    return res.json(film);

    //Maintenant, il faut créer une requête pour vérifier que tout fonctionne 
    //=> REST CLIENT/films.http
});

router.put("/:id", (req, res) => {
    //Update One : Si la ressouce existe
    const id = Number(req.params.id);
    const films = parse(jsonDbPath, defaultFilms);

    if(isNaN(id)){
        res.sendStatus(400);
    }

    const film = films.find((film) => film.id === id);

    if(film){
        const body: unknown = req.body;

        if(
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
            body.duration <= 0 ||

            ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
            ("description" in body && (typeof body.description !== "string" || !body.description.trim())) || 
            ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))

        ) {
            return res.sendStatus(400);
        }

        const {title, director, duration, budget, description, imageUrl } = body as NewFilms;

        film.title = title;
        film.director = director;
        film.duration = duration;
        film.budget = budget;
        film.description = description;
        film.imageUrl = imageUrl;

        serialize(jsonDbPath, films);
        return res.json(film);
    }

    //Si on ne trouve pas l'objet grâce au find, il faut le créer
    // => CREATE ONE

    const body: unknown = req.body;
    
    if(
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
        body.duration <= 0 ||

        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body && (typeof body.description !== "string" || !body.description.trim())) || 
        ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
    ) {
        return res.sendStatus(400);
    }

    const { title, director, duration, budget, description, imageUrl } = body as NewFilms;

    //Vérification pour savoir s'il existe le même title et director
    for (const film of films){
        if(film.title == body.title && film.director == body.director){
            return res.sendStatus(400);
        }
    }

    const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;
    
    const newFilm: Films = {
        id: nextId,
        title,
        director,
        duration,
        budget,
        description,
        imageUrl
    };

    films.push(newFilm);
    serialize(jsonDbPath, films);
    return res.json(newFilm);


});


export default router;

