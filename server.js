const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const geniusHeader = {
  Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
};

// retrieve songs that contain the lyric input typed in by user
app.get(`/search/:lyric`, (req, res) => {
  const lyric = req.params.lyric;

  axios
    .get(`https://api.genius.com/search?q=${lyric}`, {
      // headers: {
      //   Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
      // },
      headers: geniusHeader,
    })
    .then((response) => {
      const arrOfSongs = response.data.response.hits;
      console.log(arrOfSongs);
      res.send(arrOfSongs);
    })
    .catch((err) => console.log(err));
});

// get song info given a (genius api) song ID
app.get(`/song-info/:id`, (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://api.genius.com/songs/${id}`, {
      headers: geniusHeader,
    })
    .then((response) => {
      const song = response.data.response.song;
      console.log(song);
      res.send(song);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
