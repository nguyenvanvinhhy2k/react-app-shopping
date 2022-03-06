import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Product from "./Product"

function ProductList({data}) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

export default ProductList;
