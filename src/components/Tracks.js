import { useContext } from "react";
import Context from "../context";
import Track from "./Track";
import "../style/Tracks.css";

const Tracks = () => {
  const { tracks } = useContext(Context);

  const renderedItems = tracks.map((item, index) => {
    const songData = item.result;
    return (
      <Track
        title={songData.title_with_featured}
        artist={songData.primary_artist.name}
        imgSrc={songData.header_image_url}
        releaseDate={songData.release_date_for_display}
        id={songData.id}
        key={songData.id}
      />
    );
  });

  return <div className="track-list">{renderedItems}</div>;
};

export default Tracks;
