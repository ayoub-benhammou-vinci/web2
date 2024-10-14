import path from "node:path";
import { parse, serialize } from "../utils/json";
import { Text, NewText } from "../types";
import { v4 as uuidv4 } from 'uuid';

const jsonDbPath = path.join(__dirname, "/../data/texts.json");


const defaultText : Text[] = [
    {
        id: uuidv4(),
        content: "Hello everyone !",
        level: "easy"
    },

    {
        id: uuidv4(),
        content: "Good evening !", 
        level: "hard"
    },

    {
        id: uuidv4(),
        content: "Have a good week",
        level: "medium"
    }
];

function readAllText(level : string | undefined) : Text[] | undefined {
    const texts = parse(jsonDbPath, defaultText);

    //Pas besoin de le trier => On renvoie la liste sans filtre
    if(!level){
        return texts;
    }

    const levelString = String(level);

    //Pas de différence
    console.log("LevelString : " + levelString);
    console.log("level : " + level);

    if (levelString !== "easy" && levelString !== "medium" && levelString !== "hard") {
        return undefined;  // Paramètre invalide
    }

    const textsFiltred = texts.filter((text) => text.level == levelString);
    return textsFiltred;
    

}

function findTextWithId(id : string) : Text | undefined {
    const texts = parse(jsonDbPath, defaultText);
    const textFind = texts.find((text) => text.id == id);

    if(!textFind){
        return undefined;
    }

    return textFind;
}

function createNewText(newText : NewText) : Text {
    const texts = parse(jsonDbPath, defaultText);

    
    const createdText = {
        id: uuidv4(),
        ...newText
    };

    texts.push(createdText);
    serialize(jsonDbPath, texts);
    return createdText;
    
}

function deleteText(id: string) : Text | undefined {
    const texts = parse(jsonDbPath, defaultText);
    const index = texts.findIndex((text) => text.id == id);
    
    if(index === -1){
        return undefined;
    }

    const deletedText = texts.splice(index, 1);
    serialize(jsonDbPath, texts);
    return deletedText[0];
}

function updateText(id : string, textParam : Text) : Text | undefined {
    const texts = parse(jsonDbPath, defaultText);

    const text = texts.find((text) => text.id == id);
    if(!text){
        return undefined;
    }

    if(textParam.content !== undefined) text.content = textParam.content;
    if(textParam.level !== undefined) text.level = textParam.level;

    serialize(jsonDbPath, texts);
    return text;
}



export {readAllText, findTextWithId, createNewText, deleteText, updateText};
