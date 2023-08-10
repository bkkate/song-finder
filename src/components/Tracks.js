import { useContext } from "react";
import Context from "../context";
import Track from "./Track";
import "../style/Tracks.css";

const Tracks = ({spotifySongs}) => {
  const { tracks } = useContext(Context);

  // console.log(spotifySongs);
  const renderedItems = tracks.length // was tracks updated (has the user searched something)?
    ? tracks.map((item, index) => {
        const songData = item.result;
        return (
          // search list
          <Track
            title={songData.title_with_featured}
            artist={songData.primary_artist.name}
            imgSrc={songData.header_image_url}
            releaseDate={songData.release_date_for_display}
            id={songData.id}
            key={songData.id}
            source="genius"
          />
        );
      })
      // since spotifySongs are updated in useEffect (=== state updated AFTER initial render)
      // it'll display nothing briefly, then once state is updated, re-rendering will happen to display songs at second render
    : spotifySongs.length 
    ? spotifySongs.map((song, index) => {
        const songData = song.track;
        return (
          // search list
          <Track
            title={songData.name}
            artist={songData.artists[0].name}
            imgSrc={songData.album.images[0].url}
            releaseDate={songData.album.release_date}
            id={songData.external_urls.spotify} //spotify url
            key={songData.id}
            source="spotify"
          />
        );
      })
    : null;

  return <div className="track-list">{renderedItems}</div>;
};

export default Tracks;
