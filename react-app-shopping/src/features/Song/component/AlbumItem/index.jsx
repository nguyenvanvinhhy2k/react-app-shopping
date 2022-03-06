import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function AlbumItem({ item }) {
  return (
    <div className="album">
      <div>
        <img src={item.thumbnaiUrl} alt={item.name} />
      </div>
      <p>{item.name}</p>
    </div>
  );
}

AlbumItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default AlbumItem;
