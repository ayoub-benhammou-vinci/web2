import express from "express";

import filmRouter from "./routes/films";
import textRouter from "./routes/texts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



let getRequestCount = 0;

// Middleware pour enregistrer et afficher les statistiques des requêtes
app.use((req, _res, next) => {
    
    if (req.method == "GET") {
        getRequestCount++;
        console.log(`GET counter : ${getRequestCount}`);
    }
    next();
}); 

app.use("/films", filmRouter);
app.use("/texts", textRouter);

export default app;
