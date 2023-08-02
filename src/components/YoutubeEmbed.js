import React from "react";
import PropTypes from "prop-types";
import "../style/YoutubeVid.css";

const YoutubeEmbed = ({ embedId }) => {
  return (
 
    <div className="video-responsive">
      <h1> {embedId} youtube id</h1>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}    
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //   autoplay={1}
        title="Embedded youtube"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
