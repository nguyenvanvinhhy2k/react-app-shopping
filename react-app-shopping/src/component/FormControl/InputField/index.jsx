import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];
  // console.log(errors[name],formState.touched[name]);
  // formState.touched[name]  khi nguoi dung da focus
  return (
    <Controller
      name={name}
      control={form.control}
      // as={TextField}
      render={({onChange,onBlur,value,name})=>(
      <TextField 
      margin="normal"
      variant="outlined"
      fullWidth
      label={label}
      disabled={disabled}
      error={!!hasError}
      helperText={errors[name]?.message}

      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}/>

     
      )}
     
    />
  );
}

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;