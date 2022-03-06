import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabel tabs example"
    >
      <Tab label="Giá thấp xuống cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao xuống thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default ProductSort;
