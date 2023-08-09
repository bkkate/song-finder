import React, { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [tracks, setTracklist] = useState([
    // // dummy data:
    // {
    //   result: {
    //     id: 2388373,
    //     api_path: "/songs/2388373",
    //     artist_names: "Charlie Puth (Ft. Selena Gomez)",
    //     header_image_thumbnail_url:
    //       "https://images.genius.com/78c11a302d3f4f082c2bbd407cd714f9.300x300x1.png",
    //     header_image_url:
    //       "https://images.genius.com/78c11a302d3f4f082c2bbd407cd714f9.873x873x1.png",
    //     release_date_for_display: "May 24, 2016",
    //     song_art_image_thumbnail_url:
    //       "https://images.genius.com/3bfb705b70df7ba7f0b19ff356fea3b5.300x300x1.jpg",
    //     song_art_image_url:
    //       "https://images.genius.com/3bfb705b70df7ba7f0b19ff356fea3b5.1000x1000x1.jpg",
    //     title: "We Don’t Talk Anymore",
    //     title_with_featured: "We Don't Talk Anymore (Ft. Selena Gomez)",
    //     url: "https://genius.com/Charlie-puth-we-dont-talk-anymore-lyrics",
    //     primary_artist: {
    //       api_path: "/artists/250301",
    //       header_image_url:
    //         "https://images.genius.com/097f2e009d2baafa2059743c1a2d755e.1000x333x1.jpg",
    //       id: 250301,
    //       name: "Charlie Puth",
    //     },
    //   },
    // },
    // {
    //   result: {
    //     id: "7165580",
    //     artist_names: "Migos (Ft. Drake)",
    //     full_title: "Walk It Talk It by Migos (Ft. Drake)",
    //     header_image_thumbnail_url:
    //       "https://images.genius.com/9274faa75f983fe018c3abe76dc7819e.300x300x1.png",
    //     header_image_url:
    //       "https://images.genius.com/9274faa75f983fe018c3abe76dc7819e.1000x1000x1.png",
    //     release_date_for_display: "January 26, 2018",
    //     song_art_image_thumbnail_url:
    //       "https://images.genius.com/9274faa75f983fe018c3abe76dc7819e.300x300x1.png",
    //     song_art_image_url:
    //       "https://images.genius.com/9274faa75f983fe018c3abe76dc7819e.1000x1000x1.png",
    //     title: "Walk It Talk It",
    //     title_with_featured: "Walk It Talk It (Ft. Drake)",
    //     url: "https://genius.com/Migos-walk-it-talk-it-lyrics",
    //     primary_artist: {
    //       api_path: "/artists/44080",
    //       header_image_url:
    //         "https://images.genius.com/7fbac3bee19b97a9b5b2805512da490a.640x640x1.jpg",
    //       id: 44080,
    //       image_url:
    //         "https://images.genius.com/7fbac3bee19b97a9b5b2805512da490a.640x640x1.jpg",
    //       is_meme_verified: true,
    //       is_verified: true,
    //       name: "Migos",
    //       url: "https://genius.com/artists/Migos",
    //       iq: 1499,
    //     },
    //   },
    // },
  ]);
  const [heading, setHeading] = useState("Global Top 20 Tracks");

  // gets tracks array as an input
  const updateTracks = (tracks) => {
    setTracklist(tracks);
  };

  const updateHeading = (heading) => {
    setHeading(heading);
  };

  return (
    <Context.Provider
      value={{
        tracks,
        heading,
        updateTracks,
        updateHeading
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Provider };
export default Context;
