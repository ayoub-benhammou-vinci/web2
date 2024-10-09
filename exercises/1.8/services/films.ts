import path from "node:path";
import { parse, serialize } from "../utils/json";
import { Films, NewFilms } from "../types";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

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

function readAllFilms(minimumDuration : number): Films[] {
    const films = parse(jsonDbPath, defaultFilms);
    if(!minimumDuration){
        return films;
    }

    //Pas besoin de vérifier si c'est un number, on l'a déjà typé dans le paramètre
    const minimum_duration_number = Number(minimumDuration);

    const filtredFilms = films.filter((film) => {
        return film.duration >= minimum_duration_number;
    });

    return filtredFilms;
}

/*  Lire un objet de type "Film" grâce à son ID
    Return le film si le film a été retrouvé grâce à l'id
    Sinon return undefined si il n'a pas été retrouvé */

function readOneFilm(id: number): Films | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === id);
    if(!film){
        return undefined;
    }
    return film;
}

function createOneFilm(newFilms : NewFilms): Films | undefined {
    const films = parse(jsonDbPath,defaultFilms);

    const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId),0) + 1;
    
    const createdFilm = {
        id:nextId,
        ...newFilms
    };

    //Vérification pour savoir si le nouveau film a le même titre et directeur 
    // => On ne le rajoute pas dans notre liste !
    for (const film of films) {
        if(film.title == newFilms.title && film.director == newFilms.director){
            return undefined;
        }
    }

    films.push(createdFilm);
    serialize(jsonDbPath,films);
    
    return createdFilm;
}

function deleteOneFilm(id: number) : Films | undefined{
    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === id);

    //Ce qui voudrait dire que le film ne peut pas être supprimer
    if(index === -1){
        return undefined;
    }

    //Dans le cas ou on trouve le bon film grâce à son id
    //Cette méthode renvoie un tableau de films
    const deletedFilm = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return deletedFilm[0];


}

function updateOneFilm(id : number, newFilm : Partial<NewFilms>) : Films | undefined {
    const films = parse(jsonDbPath, defaultFilms);

    const film = films.find((film) => film.id === id);

    if(!film){
        return undefined;
    }

    if(newFilm.title !== undefined) film.title = newFilm.title;
    if(newFilm.budget !== undefined) film.budget = newFilm.budget;
    if(newFilm.description !== undefined) film.description = newFilm.description;
    if(newFilm.director !== undefined) film.director = newFilm.director;
    if(newFilm.imageUrl !== undefined) film.imageUrl = newFilm.imageUrl;
    if(newFilm.duration !== undefined) film.duration = newFilm.duration;

    serialize(jsonDbPath, films);
    return film;
}

function isFilmExist(id: number) : boolean {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id == id);
    if(film){
        return true;
    }
    return false;
}

export {readAllFilms, readOneFilm, createOneFilm, deleteOneFilm, updateOneFilm, isFilmExist};