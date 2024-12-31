import { Router } from "express";
const router = Router();

import { readAllComments, createOneComment, deleteComment } from "../services/comments";
import { Comments } from "../types";
import { authorize } from "../utils/auths";

router.get("/", (req, res) => {
    //On récupérer le paramètre filmId dans la query
    const filmId = req.query["filmId"] ? Number(req.query["filmId"]) : undefined;

    if(filmId && (isNaN(filmId) || filmId <= 0)){
        return res.sendStatus(400);
    }
    
    const filtredComments = readAllComments(filmId);
    return res.json(filtredComments);
});

router.post("/", authorize, (req, res) => {

    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("filmId" in body) ||
        !("comment" in body) ||

        typeof body.filmId !== "number" ||
        typeof body.comment !== "string" ||

        !body.comment.trim() ||
        body.filmId <= 0 ||
        
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("username" in req.user) ||
        typeof req.user.username !== "string"
    ) {
        return res.sendStatus(400);
    }

    const newComment: Comments = {
        filmId: body.filmId,
        username: req.user.username,
        comment: body.comment,
    };

    const createdComment = createOneComment(newComment);
    if(!createdComment){
        return res.sendStatus(409);
    }

    return res.json(newComment); 
});

router.delete("/:id", authorize, (req, res) => {

    if(
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("username" in req.user) ||
        typeof req.user.username !== "string"
    ) {
        return res.sendStatus(400);
    }

    const id = req.params.id ? Number(req.params.id) : undefined;
    if(!id || isNaN(id) || id <= 0){
        return res.sendStatus(400);
    }

    const username = req.user.username;
    const deletedComment = deleteComment(id, username);

    //Si le commentaire n'existe pas
    if(!deletedComment){
        return res.sendStatus(404);
    }

    //Si le commentaire a été supprimé
    return res.json(deletedComment);
});

export default router;