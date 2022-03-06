import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "features/Auth/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

function Register(props) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      // them userName
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      // Dong Dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      console.log(user);
      enqueueSnackbar("Bạn đã đăng kí thành công !!!", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Tài khoản đã tồn tại !!!", { variant: "error" });
      // enqueueSnackbar(error.message, { variant: "error" });
      console.log(error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

Register.propTypes = {
  closeDialog: PropTypes.func,
};

export default Register;
