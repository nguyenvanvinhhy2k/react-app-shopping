import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import QuantityField from "component/FormControl/QuantityField";

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
    width: "250px",
  },
}));

function AddtocartForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Vui lòng nhập số lượng")
      .min(1, "Số lượng phải lớn hơn hoặc bằng 1")
      .typeError("Vui lòng nhập số lượng"),
  });
  const form = useForm({
    defaultValue: {
      quantity: 1,
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
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      style={{ textAlign: "center" }}
    >
      <QuantityField name="quantity" label="Quantity" form={form} />
      <Button
        type="sumbit"
        variant="contained"
        color="primary"
        fullWidth
        className={classes.submit}
      >
        ADD TO CART
      </Button>
    </form>
  );
}

AddtocartForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddtocartForm;
