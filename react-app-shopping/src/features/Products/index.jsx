import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Switch>
        <Route path="/products" exact component={ListPage}></Route>
        <Route path="/products/:productId" component={DetailPage}></Route>
      </Switch>
    </Box>
  );
}

ProductFeature.propTypes = {};

export default ProductFeature;
