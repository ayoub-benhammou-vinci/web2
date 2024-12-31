import path from "node:path";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/comments.json");
import { Comments } from "../types";

//It's to test if the function is working
const commentsDefault : Comments[] = [
    {
        filmId: 1,
        username: "Ayoub",
        comment: "Super film"
    }
];

function readAllComments(filmId : number | undefined): Comments[] {
    const comments = parse(jsonDbPath, commentsDefault);
    
    if(!filmId){
        return comments;
    }

    //Filtrer les commentaire selon son filmId
    const filtredComments = comments.filter((comment) => {
        return comment.filmId === filmId;
    });

    return filtredComments;
}

function createOneComment(comment: Comments): Comments | undefined {
    const comments = parse(jsonDbPath, commentsDefault);

    //Si le commentaire existe déjà ppur cet utilisateur
    const existingComment = comments.find((c) => c.filmId === comment.filmId && c.username === comment.username);
    if(existingComment){
        return undefined;   
    }

    comments.push(comment);
    serialize(jsonDbPath, comments);
    return comment;
}

function deleteComment(id: number, username : string): Comments | undefined {
    const comments = parse(jsonDbPath, commentsDefault);

    //Effacer un commentaire d'un utilisateur connecté 
    //On vérifie que l'utilisateur a bien mit un commentaire dans ce film
    const deletedComment = comments.find((comment) => comment.filmId === id && comment.username === username);
    
    //Il n'a jamais fait de commentaire pour ce film
    if(!deletedComment){
        return undefined;
    }

    //Il a fait un commentaire pour ce film
    comments.splice(comments.indexOf(deletedComment), 1);
    serialize(jsonDbPath, comments);

    return deletedComment;
}

export { readAllComments, createOneComment, deleteComment};