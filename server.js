const express = require('express');
const app = express();
const path = require('path');
const episode_data = require('./data.json');
app.use("/assets",express.static("static-assets"));
app.get("/api/episodes",(req,res) => {
    const result = episode_data.map((episode) => {
        return {
            episode: episode.number,
            season: episode.season,
            title: episode.name
        }
    });
    res.send(result);
});
app.get("/",(req,res) => {
    res.sendFile(path.resolve("./index.html"));
});


app.listen(3000);

