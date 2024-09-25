import express from "express";


import filmRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



let getRequestCount = 0;


// Middleware pour enregistrer et afficher les statistiques des requêtes
app.use((req, _res, next) => {
    
   
    getRequestCount++;
    console.log(`${req.method} counter ${req.path} : ${getRequestCount}`);
    next();
    
}); 

app.use("/films", filmRouter);

export default app;
