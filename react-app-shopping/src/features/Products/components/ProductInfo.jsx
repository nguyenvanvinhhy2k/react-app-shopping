import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { formatPrice } from "utils";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.grey[300]}`,
  },
  description: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    lineHeight: "25px",
  },
  priceBox: {
    display: "flex",

    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: "bold",
    padding: "8px 0",
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: "line-through",
    padding: "16px 0",
  },
  promotionPercent: {
    padding: "16px 0",
  },
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;
  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h1">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box conponent="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
        <Box conponent="span" className={classes.originalPrice}>
          {formatPrice(originalPrice)}
        </Box>
        <Box
          conponent="span"
          style={{ color: "red" }}
          className={classes.promotionPercent}
        >
          {promotionPercent > 0 ? `- ${promotionPercent}%` : ""}
        </Box>
      </Box>
    </Box>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductInfo;
