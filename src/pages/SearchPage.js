import SearchBar from "../components/SearchBar";
import Tracks from "../components/Tracks";
import "../index.css";
import "../style/SearchPage.css";
import SyncLoader from "react-spinners/SyncLoader";
import {useState, useEffect} from 'react';

const SearchPage = () => {

  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return <div className="flex flex-col justify-center w-[100vw]">
      <SearchBar />
      
      {loading ? (
    
    <SyncLoader
      color={"#2252A4"}
      loading={loading}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
      className="loader"
    />
  ) : ( <Tracks className="track-list"/>
  )
  }
    </div>

};

export default SearchPage;
