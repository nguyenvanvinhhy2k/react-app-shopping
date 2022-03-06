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

function LoginForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Vui lòng nhập email")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Vui lòng nhập đúng định dạng email"
      ),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
  });

  const form = useForm({
    defaultValue: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Đăng nhập
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="identifier" label="Email" />
        <PasswordField form={form} name="password" label="Password" />

        <Button
          type="sumbit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
