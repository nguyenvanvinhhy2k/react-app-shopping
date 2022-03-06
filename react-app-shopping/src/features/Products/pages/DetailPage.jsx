import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper, makeStyles } from "@material-ui/core";
import ProductThumbnail from "../components/ProductThumbnail";
import { useRouteMatch } from "react-router";
import useProductDetail from "../hook/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import AddtocartForm from "../components/AddtocartForm";
import ProductMenu from "../components/ProductMenu";
import { Switch, Route } from "react-router-dom";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductReviews from "../components/ProductReviews";
import { LinearProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "features/Cart/cartSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "30px",
  },
  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: `3px solid ${theme.palette.grey[500]}`,
  },
  right: {
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
}));

function DetailPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    params: { productId },
    url,
  } = useRouteMatch(); // lay thong tin productId tren url de call api

  const { product, loading } = useProductDetail(productId); // custom hook

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }

  const handleAddtocartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    dispatch(action);
    console.log(action);
  };
  // const handleAddtocartSubmit = ({ quantity}) => {
  //   console.log({quantity});
  // };
  return (
    <Box className={classes.root}>
      <Container>
        <Paper elecvation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddtocartForm onSubmit={handleAddtocartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`}>
            <ProductAdditional />
          </Route>

          <Route path={`${url}/reviews`}>
            <ProductReviews />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
