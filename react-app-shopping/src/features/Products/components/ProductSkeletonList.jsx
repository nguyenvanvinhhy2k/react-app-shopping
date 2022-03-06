import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

function ProductSkeletonList({length}) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={180} />
              <Skeleton width="100%"/>
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 10,
};

export default ProductSkeletonList;
