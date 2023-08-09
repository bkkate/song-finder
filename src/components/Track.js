import "../style/Track.css";
import {
  FaHeadphonesAlt,
  // FaMusic,
  // FaPodcast,
  // FaCaretRight,
  // FaCaretSquareRight,
  FaPlay,
} from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Track = ({ title, artist, imgSrc, releaseDate, id, source }) => {
  const navigate = useNavigate();
  const handleClick = (source) => {
    // if the source is from the searched songs
    if (source === "genius") {
      navigate(`/song/${id}`);
    }

    // if the source is from top-50 songs (with initial page load)
    else {
      // direct user to spotify album url
      navigate({ id });
    }
  };

  return (
    <div className="song-box" onClick={handleClick(source)}>
      <img className="image" src={imgSrc} alt="album cover" />
      <div className="song-title"> {title} </div>
      <div className="artist meta">
        <FaHeadphonesAlt className="icon" /> <span>Artist: {artist}</span>
      </div>
      <div className="date meta">
        <FaPlay className="icon" /> <span> Released: {releaseDate} </span>
      </div>
    </div>
  );
};

export default Track;
