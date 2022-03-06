import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { cartTotalSelector } from "features/Cart/selectors";
import { cartItemsCountSelector } from "features/Cart/selectors";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { removeFromCart } from "features/Cart/cartSlice";

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  total: {
    padding: 20,
    float: "right",
  },
  tableCell: {
    width: "100px",
  },
});

function CartFeature(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartTotal = useSelector(cartTotalSelector);
  const cartCount = useSelector(cartItemsCountSelector);
  const product = useSelector((state) => state.cart.cartItems);

  const handleDeleteCart = (id) => {
    dispatch(removeFromCart(id));
    console.log(removeFromCart(id));
  };
  return (
    // <div>
    //   {product.map((product) => (
    //     <>
    //       <li>Ten san pham :{product.product.name}</li>
    //       <li>Gia': {product.product.salePrice}</li>
    //       <li>So luong: {cartCount}</li>
    //       <img
    //         src={`https://api.ezfrontend.com${product.product.thumbnail?.url}`}
    //         alt=""
    //       />
    //     </>
    //   ))}
    //   Tong tien: {cartTotal}
    // </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Tên sản phẩm </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              Ảnh
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              Giá
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              Số lượng
            </TableCell>
            <TableCell align="right" className={classes.tableCell}>
              Xóa
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((product) => (
            <TableRow key={product.product.id}>
              <TableCell component="th" scope="row">
                {product.product.name}
              </TableCell>
              <TableCell align="right">
                <img
                  style={{ width: "120px" }}
                  src={`https://api.ezfrontend.com${product.product.thumbnail?.url}`}
                  alt=""
                />
              </TableCell>
              <TableCell align="right">
                {Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.product.salePrice)}
              </TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell
                align="right"
                onClick={() => handleDeleteCart(product.id)}
              >
                delete
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.total}>
        Tổng tiền:
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(cartTotal)}
      </div>
    </TableContainer>
  );
}

CartFeature.propTypes = {};

export default CartFeature;
