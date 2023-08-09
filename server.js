const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const qs = require("qs");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const geniusHeader = {
  Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
};

// when search page first loads, load the top 50 spotify
app.get(`/top-global`, async (req, res) => {
  const requestHeader = {
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_SECRET,
    grant_type: "client_credentials",
  };

  // spotify auth (receiving access token)
  // const spotifyToken = await axios
  //   .post(
  //     "https://accounts.spotify.com/api/token",
  //     {
  //       client_id: process.env.SPOTIFY_CLIENT_ID,
  //       client_secret: process.env.SPOTIFY_SECRET,
  //       grant_type: "client_credentials",
  //     },
  //     spotifyAuthHeader
  //   );

  const spotifyToken = await axios.post(
    "https://accounts.spotify.com/api/token",
    qs.stringify(requestHeader),
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

   
  const spotifyTokenHeader = {
    Authorization: `Bearer ${spotifyToken.data.access_token}`,
  };

  console.log(spotifyTokenHeader);
  // spotify top global 50 playlist
  axios
    .get("https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/", {
      headers: spotifyTokenHeader,
    })
    .then((response) => {
      console.log(response.data.tracks.items);
      res.send(response.data.tracks.items);
    })
    .catch((err) => console.log(err.response.data));
});

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
