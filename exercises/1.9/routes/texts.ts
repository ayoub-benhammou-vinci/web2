import { Router } from "express";
import {readAllText, findTextWithId, createNewText, deleteText, updateText} from "../services/texts";
import {NewText} from "../types";
const router = Router();

router.get("/", (req, res) => {
    const level = req.query["level"] !== undefined ? String(req.query["level"]) : undefined;
    const texts = readAllText(level);
    
    //Si jamais le paramètre paramètre est invalide (Pas de valeur "Easy", "Medium" ou "Hard")
    if(!texts){
        return res.sendStatus(400);
    }

    return res.json(texts);
});

router.get("/:id", (req, res) => {
    const id = String(req.params.id);
    const text = findTextWithId(id);
    return res.json(text);
});


router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||

        typeof body.content !== "string" ||
        typeof body.level !== "string"||

        !body.content.trim() ||
        !body.level.trim() ||

        
        (body.level.toLowerCase() && body.level !== "easy" && body.level !== "medium" && body.level !== "hard")
    ) {
        return res.sendStatus(400);
    }

    const {content, level} = body as NewText;
    
    const newText = createNewText({content, level});
    if(!newText){
        return res.sendStatus(400);
    }

    return res.json(newText);


});

router.delete("/:id", (req, res) => {
    const deletedText = deleteText(req.params.id);
    if(!deletedText){
        res.sendStatus(400);
    }
    return res.json(deletedText);
});


router.put("/:id", (req, res) => {
    const id = String(req.params.id);
    

    //Remplacer l'entèreté de la ressource par les données de la requête
    const body: unknown = req.body;

    if(
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||

        typeof body.content !== "string" ||
        typeof body.level !== "string"||

        !body.content.trim() ||
        !body.level.trim() ||

        (body.level.toLowerCase() && body.level !== "easy" && body.level !== "medium" && body.level !== "hard")
    ) {
        return res.sendStatus(400);
    }

    const {content, level} = body as NewText;

    const updatedText = updateText(id,{id,content,level});
    if(!updatedText){
        res.sendStatus(400);
    }

    return res.json(updatedText);


});




export default router;
