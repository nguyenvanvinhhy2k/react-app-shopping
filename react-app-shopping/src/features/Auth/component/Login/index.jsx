import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm";
import { useDispatch } from "react-redux";
import { login } from "features/Auth/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

function Login(props) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      // them userName
      values.username = values.email;
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      // Dong Dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      console.log(user);
      // enqueueSnackbar("Bạn đã đăng kí thành công !!!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Đăng nhập thất bại !!!", { variant: "error" });
      // enqueueSnackbar(error.message, { variant: "error" });
      console.log(error);
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

Login.propTypes = {
  closeDialog: PropTypes.func,
};

export default Login;
