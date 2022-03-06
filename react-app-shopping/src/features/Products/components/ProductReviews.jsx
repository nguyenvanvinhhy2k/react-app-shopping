import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";

function ProductReviews(props) {
  return (
    <Paper elevation={0} style={{ padding: "30px 15px" }}>
      <div style={{ borderBottom: "2px solid  #777", paddingBottom: "13px" }}>
        ĐÁNH GIÁ
      </div>

      <h1 style={{ textAlign: "center", margin: "100px 0" }}>SUÝT CÓ...</h1>
    </Paper>
  );
}

ProductReviews.propTypes = {};

export default ProductReviews;
