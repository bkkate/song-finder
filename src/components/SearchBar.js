import { useState, useContext } from "react";
import Context from "../context.js";
import "../style/SearchBar.css";
import axios from "axios";
import { Si1001Tracklists } from "react-icons/si";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { updateTracks, updateHeading } = useContext(Context);

  // change in keyboard input
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // when user presses enter key after they type in input
  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      getMusic();
    }
  };

  // send request to music
  const getMusic = () => {
    try {
      // sending a request to our node server, which in turn will send a request to the genius api
      axios.get(`http://localhost:8000/search/${input}`).then((response) => {
        const songs = response.data;
        updateTracks(songs);
        updateHeading("Top search results");

        // console.log(tracks);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="box">
      <section className="top-section">
        <div className="header">
          <span>Help me find music</span>
          <Si1001Tracklists className="icon" />
        </div>
        <div className="text">
          <div> Can't remember the name of the song? </div>
          <div>Find music by searching partial lyrics stuck in your head! </div>
        </div>
      </section>
      <section className="search-section">
        <div className="input-container">
          <input
            placeholder="Type any lyric..."
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeydown}
          />
          <button onClick={getMusic}>Search</button>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
