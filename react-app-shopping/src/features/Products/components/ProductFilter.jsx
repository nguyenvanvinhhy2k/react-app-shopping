import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./filters/FilterByCategory";
import { Box } from "@material-ui/core";
import FilterByPrice from "./filters/FilterByPrice";
import FilterByService from "./filters/FilterByService";

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

ProductFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default ProductFilter;
