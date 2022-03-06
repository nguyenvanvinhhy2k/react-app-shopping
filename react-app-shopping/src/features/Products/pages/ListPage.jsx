import React, { useEffect, useState } from "react";
import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import productApi from "api/productApi";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductList from "../components/ProductList";
import { Pagination } from "@mui/material";
import ProductSort from "features/Products/components/ProductSort";
import ProductFilter from "features/Products/components/ProductFilter";
import FilterViewer from "../components/FilterViewer";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";

const useStyles = makeStyles((them) => ({
  root: {},
  left: {
    width: "260px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    padding: "40px 0 30px 0",
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  // const [filters, setFilters] = useState({
  //   _page: 1,
  //   _limit: 12,
  //   _sort: "salePrice:ASC",
  // });

  const [filters, setFilters] = useState(() => ({
    ...queryParams,
    _page: Number.parseInt(queryParams._page) || 1,
    _limit: Number.parseInt(queryParams._limit) || 12,
    _sort: queryParams._sort || "salePrice:ASC",
  }));

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  }, [history, filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        console.log(data, pagination);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {}
      setLoading(false);
    })();
  }, [filters]);
  
  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper alevation={0}>
              <ProductFilter filters={filters} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper alevation={0}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />
              <FilterViewer filters={filters} onChange={setNewFilters} />
              {loading ? (
                <ProductSkeletonList length={12} />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
