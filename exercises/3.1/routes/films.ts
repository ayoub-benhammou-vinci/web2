
import { Router } from "express";
import { NewFilms } from "../types";
import {
    readAllFilms, 
    readOneFilm,
    createOneFilm, 
    deleteOneFilm,
    updateOneFilm, 
    isFilmExist
} from "../services/films";
import { authorize } from "../utils/auths";

const router = Router();

router.get("/", (req, res) => {
    const minimumDuration = Number(req.query["minimum-duration"]);
    const films = readAllFilms(minimumDuration);
    return res.json(films);
});

//2e API
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = readOneFilm(id);

    //Si le film est undefined avec la fonction, dans ce cas il n'existe pas
    if(!film){
        res.sendStatus(400);
    }

    //Sinon le film existe donc on peut renvoyer le film
    return res.json(film);
});


router.post("/", authorize, (req, res) => {
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

        //("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body && (typeof body.description !== "string" || !body.description.trim()))
    ) {
        return res.sendStatus(400);
    }

    const { title, director, duration, budget, description, imageUrl } = body as NewFilms;

    const newFilm = createOneFilm({title, director, duration, budget, description, imageUrl});
    if(!newFilm){
        return res.sendStatus(400);
    }
    return res.json(newFilm);

});


router.delete("/:id", authorize, (req, res) => {
    const id = Number(req.params.id);
    const filmDeleted = deleteOneFilm(id);

    //Parce que la ressource n'existe pas (l'id ne renvoie vers aucun objet)
    if(!filmDeleted){
        return res.sendStatus(400);
    }

    //Le film a bien été supprimé, on peut donc renvoyer la valeur
    return res.json(filmDeleted);
    
});

router.patch("/:id", authorize, (req, res) => {

    const id = Number(req.params.id);

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

    const {title, director, duration, budget, description, imageUrl }: Partial<NewFilms> = body;

    const updatedFilm = updateOneFilm(id,{title, director, duration, budget, description, imageUrl});

    if(!updatedFilm){
        return res.sendStatus(400);
    }

    return res.json(updatedFilm);
});

router.put("/:id", authorize,  (req, res) => {
    //Update One : Si la ressouce existe
    const id = Number(req.params.id);

    if(isFilmExist(id)){
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
        const film = updateOneFilm(id,{title, director, duration, budget, description, imageUrl});

        if(!film){
            return res.sendStatus(400);
        }

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
    const film = createOneFilm({title, director, duration, budget, description, imageUrl});
    
    if(!film){
        return res.sendStatus(400);
    }

    return res.json(film);


});


export default router;

