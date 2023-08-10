## SongFinder app

### Description
The SongFinder website is a Single Page Application (SPA) built with React.js. This is my first mini project practicing vairous concepts in React as well as utilizing simple server side logic in Node with the Express framework. This application uses various third-party APIs to retrieve data regarding searched songs.

The idea behind it: it's easy to search for songs with the correct title, but what if you just remember the partial lyrics and can't think of the name or album of the song? With this simple-to-use application, you can simply search a part of the lyric (single word to phrases) that's stuck in your head, and it'll give you the top song matches that contain the searched lyrics. If you click on each track, you can get more info and watch a youtube video of the song as well as have access to the full lyrics.


### Technologies & Frameworks used:
* Node & Express
* React.js
* Third party APIs: Spotify, Genius, Youtube
* a bit of tailwind css

### Highlights
* When the page is first launched, it displays 20 of the Global Top 50 Spotify playlist tracks -- which is always up to date as it retrieves the most current list
  <img width="1442" alt="Screenshot 2023-08-10 at 5 10 30 PM" src="https://github.com/bkkate/song-finder/assets/118659136/96b469ae-7fce-43f1-888a-b35aaf0c6c4c">

* Searching for partial lyrics gives the following example result
  <img width="1456" alt="Screenshot 2023-08-10 at 5 11 20 PM" src="https://github.com/bkkate/song-finder/assets/118659136/753975b9-b2fb-4b45-8ca2-6c0e0ef84d64">

* Detailed info page with a youtube video embedded with more links
  <img width="958" alt="Screenshot 2023-08-10 at 5 12 39 PM" src="https://github.com/bkkate/song-finder/assets/118659136/5929f9a3-22d6-4870-a39e-948dbe3a8788">

