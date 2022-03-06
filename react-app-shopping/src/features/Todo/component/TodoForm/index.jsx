import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../component/FormControl/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required("Vui long nhap title").min(5, "Title is too short"),
  });

  const form = useForm({
    defaultValue: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField form={form} name="title" label="Todo" />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
