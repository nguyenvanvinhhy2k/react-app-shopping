import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";
import { formatPrice } from "utils";

function Product({ product }) {
  const history = useHistory();
  const thumbnailUrl = product.thumbnail
    ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    : `https://via.placeholder.com/444`;

  const handleClick = () => {
    history.push(`/products/${product.id}`); //Lay id chi tiet san pham tren url
  };
  return (
    <div>
      <Box padding={1} onClick={handleClick}>
        <Box padding={0} minHeight="215px">
          <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>

        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box
            component="span"
            fontSize="16px"
            fontWeight="bold"
            marginRight={1}
          >
            {formatPrice(product.salePrice)}
          </Box>
          <span style={{ color: "red" }}>
            {product.promotionPercent > 0
              ? `- ${product.promotionPercent}%`
              : ""}
          </span>
        </Typography>
      </Box>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
