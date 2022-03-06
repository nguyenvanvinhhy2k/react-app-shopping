import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CodeIcon from "@material-ui/icons/Code";
import { Link, NavLink, useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Register from "../../features/Auth/component/Register";
import { Close, ShoppingCart } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Login from "features/Auth/component/Login";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { logout } from "../../features/Auth/userSlice";
import { Badge } from "@material-ui/core";
import { cartItemsCountSelector } from "features/Cart/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  closeButton: {
    position: "absolute",
    top: "1px",
    right: "1px",
    color: "black",
  },
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
  };

  const handleCartClick = () => {
    history.push("/carts");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/products">
              VINH_SHOP
            </Link>
          </Typography>

          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink className={classes.link} to="/songs">
            <Button color="inherit">Songs</Button>
          </NavLink>

          <NavLink className={classes.link} to="/couters">
            <Button color="inherit">Counter</Button>
          </NavLink>

          {!isLoggedIn ? (
            <Button color="inherit" onClick={handleClickOpen}>
              Đăng nhập
            </Button>
          ) : (
            <>
              <IconButton color="inherit" onClick={handleUserClick}>
                <AccountCircleIcon></AccountCircleIcon>
              </IconButton>
            </>
          )}
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItemsCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>User</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Đăng xuất</MenuItem>
      </Menu>

      <Dialog
        disableEscapeKeyDown
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeButton}>
          <Close onClick={handleClose} />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Bạn đã có tài khoản ??
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Bạn chưa có tài khoản ??
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
