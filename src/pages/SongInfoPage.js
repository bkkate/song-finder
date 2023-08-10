import { useParams, useRef } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import YoutubeEmbed from "../components/YoutubeEmbed";
import "../style/SongInfoPage.css";
import HashLoader from "react-spinners/HashLoader";

const SongInfoPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState({});
  const [loading, setLoading] = useState(false);

  // call to our server, which in turn will send request to genius api to retrieve basic music info
  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:8000/song-info/${id}`)
      .then((response) => {
        const songData = response.data;

        const description = songData.description.dom.children[0].children
          .map((section, index) => {
            console.log(section);
            console.log(index);
            if (index % 2 === 0) return section;
            else {
              return section.children;
            }
          })
          .join("");

        console.log(description);

        setSong((song) => {
          return {
            ...song,
            title: songData.title_with_featured,
            releaseDate: songData.release_date_for_display,
            album: songData.album.full_title,
            artist: songData.primary_artist.name,
            description: description,
            imgUrl: songData.song_art_image_url,
            lyricUrl: songData.url,
          };
        });

        const arrOfMedia = response.data.media;

        arrOfMedia.forEach((media) => {
          // if (media.provider === "soundcloud") {
          //   setSong((song) => {
          //     return {
          //       ...song,
          //       "soundcloud-url": media.url,
          //     };
          //   });
          // }
          if (media.provider === "youtube") {
            const videoId = media.url.slice(media.url.indexOf("=") + 1);

            setSong((song) => {
              return {
                ...song,
                "youtube-id": videoId,
              };
            });
          }
        });
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-box">
          <HashLoader
            color={"#2252A4"}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="loader"
          />
        </div>
      ) : (
        <div>
          <section className="song-description">
            <img src={song.imgUrl} alt="album cover" />
            <div className="details">
              <div className="title"> {song.title} </div>
              <div className="meta-data">
                <div className="meta"> <span className="subheading">Album: </span>{song.album} </div>
                <div className="meta">
                  <span className="subheading">Artist: </span> {song.artist}
                </div>
                <div className="meta description"> {song.description} </div>
                <div className="meta"> <span className="subheading">Released: </span> {song.releaseDate} </div>
              </div>
            </div>
          </section>

          <section className="media">
            <iframe
            width="550"
            height="300"
            src={`https://www.youtube.com/embed/${song["youtube-id"]}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   autoplay={1}
            title="Embedded youtube"
            className="youtube"
          />
{/* 
            <a className="soundcloud" href={song["soundcloud-url"]}>
              soundcloud icon
            </a> */}
            <a className="lyrics-link" href={song.lyricUrl}>
              View Lyrics
            </a>
          </section>
          
      
        </div>
      )}
    </div>
  );
};

export default SongInfoPage;
