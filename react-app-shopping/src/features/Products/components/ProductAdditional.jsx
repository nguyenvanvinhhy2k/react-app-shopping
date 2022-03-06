import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";

function ProductAdditional(props) {
  return (
    <Paper elevation={0} style={{ padding: "30px 15px" }}>
      <div style={{borderBottom:"2px solid  #777",paddingBottom:"13px"}}> THÊM THÔNG TIN</div>

      <h1 style={{ textAlign: "center", margin: "100px 0" }}>SẮP CÓ...</h1>
    </Paper>
  );
}

ProductAdditional.propTypes = {};

export default ProductAdditional;
