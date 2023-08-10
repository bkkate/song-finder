import "../style/Track.css";
import {
  FaHeadphonesAlt, FaPlay,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Track = ({ title, artist, imgSrc, releaseDate, id, source }) => {
  return (
    // if track is global top playlist from spotify, direct user to the spotify playlist url
    // if track is from the genius search, direct user to our custom info page
    <Link to={ source === "genius" ? `song/${id}` : id}>
    <div className="song-box">
      <img className="image" src={imgSrc} alt="album cover" />
      <div className="song-title"> {title} </div>
      <div className="artist meta">
        <FaHeadphonesAlt className="icon" /> <span>Artist: {artist}</span>
      </div>
      <div className="date meta">
        <FaPlay className="icon" /> <span> Released: {releaseDate} </span>
      </div>
      </div>
    </Link>
     
  );
};

export default Track;
