import { useState, useContext } from "react";
import Context from "../context.js";
import "../style/SearchBar.css";
import axios from "axios";
import { FaHeadphonesAlt, FaMusic, FaPodcast} from "react-icons/fa";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { tracks, updateTracks } = useContext(Context);

  // change in keyboard input
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // send request to music
  const getMusic = () => {
    try {
      // sending a request to our node server, which in turn will send a request to the genius api
      axios.get(`http://localhost:8000/search/${input}`).then((response) => {
        const songs = response.data;
        updateTracks(songs);
        console.log(tracks);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="box">
      <section className="search-section">
        <p>
         Search Lyrics!
        </p>

        <div className="input-container">
          <input
            placeholder="Any lyric..."
            value={input}
            onChange={handleChange}
          />    <button onClick={getMusic}>Search</button>
        </div>
 
      
  
      </section>
    </div>
  );
};

export default SearchBar;
