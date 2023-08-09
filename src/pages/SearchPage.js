import SearchBar from "../components/SearchBar";
import Tracks from "../components/Tracks";
import "../index.css";
import "../style/SearchPage.css";
import SyncLoader from "react-spinners/SyncLoader";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../context.js";

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [spotifySongs, setSpotifySongs] = useState([]);
  const { heading } = useContext(Context);

  useEffect(() => { 
   setLoading(true);
    try {
      // sending a request to our node server, which in turn will send a request to the spotify api
      axios.get(`http://localhost:8000/top-global`).then((response) => {
        console.log(response.data);
        const fiftySongs = response.data;
        // updateSpotifySongs(fiftySongs.slice(0, 20));
        setSpotifySongs(fiftySongs.slice(0, 20));
        
      });
    } catch (err) {
      console.log(err);

    }

     setTimeout(() => {
    setLoading(false);
  }, 3000);
  }, []); 

  return (
    <div className="flex flex-col justify-center w-[100vw]">
      <SearchBar />
      <div className="heading">{heading}</div>
      {loading ? (
        <SyncLoader
          color={"#2252A4"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
      ) : (
        <Tracks className="track-list" spotifySongs={spotifySongs} />
      )}
    </div>
  );
};

export default SearchPage;
