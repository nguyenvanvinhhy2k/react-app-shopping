import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, IconButton, Typography, makeStyles } from "@material-ui/core/";
import { RemoveCircleOutline, AddCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
  },
  box: {
    display: "flex",
    flexFlow: "row nowrap",
    margin: "0 auto",
    maxWidth: "200px",
    height: "40px",
  },
}));

function QuantityField(props) {
  const { form, name, disabled, value } = props;
  const { errors, setValue } = form;
  const hasError = !!errors[name];
  const classes = useStyles();

  return (
    <>
      <FormControl
        error={hasError}
        margin="normal"
        variant="outlined"
        size="small"
      >
        <Typography>Số lượng</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ onChange, onBlur, value, name }) => (
            <Box className={classes.box}>
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                  )
                }
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                className={classes.root}
                id={name}
                type="number"
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
              <IconButton
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                  )
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
          // helperText={errors[name]?.message}
        />
      </FormControl>
      <FormHelperText error={!!hasError}>
        {errors[name]?.message}
      </FormHelperText>
    </>
  );
}

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default QuantityField;
