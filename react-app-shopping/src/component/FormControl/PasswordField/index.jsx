import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { errors } = form;
  const hasError = errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      <FormControl
        error={!!hasError}
        fullWidth
        margin="normal"
        variant="outlined"
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <OutlinedInput
              id={name}
              type={showPassword ? "text" : "password"}
              label={label}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              disabled={disabled}
              value={value}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}

          // helperText={errors[name]?.message}
        />
      </FormControl>
      <FormHelperText error={!!hasError}>
        {errors[name]?.message}
      </FormHelperText>
    </div>
  );
}

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PasswordField;
