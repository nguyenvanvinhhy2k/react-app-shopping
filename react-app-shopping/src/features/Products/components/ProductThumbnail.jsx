import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    : `https://via.placeholder.com/444`;
  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%"/>
    </Box>
  );
}

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

export default ProductThumbnail;
