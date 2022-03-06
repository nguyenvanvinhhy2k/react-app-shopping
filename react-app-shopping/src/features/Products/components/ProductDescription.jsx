import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";

function ProductDescription({ product = {} }) {
  return (
    <Paper elevation={0} style={{padding:"15px"}}>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </Paper>
  );
}

ProductDescription.propTypes = {
  product: PropTypes.object,
};

export default ProductDescription;
