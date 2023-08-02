import "../style/Track.css";
import { FaHeadphonesAlt, FaMusic, FaPodcast, FaCaretRight, FaCaretSquareRight,
    FaPlay, FaPlayCircle} from "react-icons/fa";
import { HiChevronDoubleRight} from "react-icons/hi";
import { useNavigate } from 'react-router-dom';


const Track = ({ title, artist, imgSrc, releaseDate, id}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/song/${id}`);
  }

  return (
    <div className="song-box" onClick={handleClick}>
      <img className="image" src={imgSrc} alt="album cover" />
      <div className="song-title"> {title} </div>
      <div className="artist meta"> <FaHeadphonesAlt className="icon"/> <span>Artist: {artist}</span>  </div>
      <div className="date meta"> <FaPlay className="icon"/> <span> Released: {releaseDate} </span>  </div>
    </div>
  );
};

export default Track;
