import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    padding: 0,
    margin: theme.spacing(2, 0),
    listStyle: "none",
    "& > li": {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Giao hàng miễn phí",
    isActive: (filters) => filters.isFreeShip,
    isVisible: (filters) => true,
    isRemovable: false,
    onRemove: (filters) => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có khuyến mãi",
    isActive: (filters) => true,
    isVisible: (filters) => filters.isPromotion,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(filters.salePrice_gte)} đến ${new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(filters.salePrice_lte)}`,

    isActive: (filters) => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") &&
      Object.keys(filters).includes("salePrice_gte"),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_lte;
      delete newFilters.salePrice_gte;
      return newFilters;
    },
    onToggle: null,
  },
  //   {
  //     id: 4,
  //     getLabel: (filters) => filters.id,
  //     isActive: (filters) => true,
  //     isVisible: (filters) => true,
  //     isRemovable: true,
  //     onRemove: (filters) => {},
  //     onToggle: (filters) => {},
  //   },
];

function FilterViewer({ filters = {}, onChange = null }) {
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      {visibleFilters.map((x) => (
        <li key={x.id}>
          <Chip
            size="small"
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

FilterViewer.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

export default FilterViewer;
