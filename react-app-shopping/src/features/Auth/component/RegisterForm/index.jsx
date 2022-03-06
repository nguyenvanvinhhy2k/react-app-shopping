import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../component/FormControl/InputField";
import PasswordField from "../../../../component/FormControl/PasswordField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    marginTop: "15px",
    textAlign: "center",
  },

  submit: {
    margin: "20px 0",
    padding: "10px 0",
  },
}));

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup.string().required("Vui lòng nhập tên"),
    // .test( "should has at least two words",  ham` bat' nhap 2 tu`
    //   "Please enter at least two words.",
    //   (value) => {
    //     return value.split(" ").length >= 2;
    //   })
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Vui lòng nhập đúng định dạng email"
      ),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Mật khẩu tối thiểu 8 kí tự và ít nhất 1 chữ cái và 1 chữ số"
      ),
    retypePassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .oneOf(
        [yup.ref("password"), null],
        "Mật khẩu không giống mật khẩu nhập "
      ),
  });

  const form = useForm({
    defaultValue: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Đăng kí tài khoản
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="fullName" label="Full Name" />
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Password" />
        <PasswordField
          form={form}
          name="retypePassword"
          label="Retype Password"
        />
        <Button
          type="sumbit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Create An Account
        </Button>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
