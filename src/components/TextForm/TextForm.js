import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../stores";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

const TextForm = ({ name, setPostQuery, label, error, handleChange, value }) => {

  setPostQuery(label, value);
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl} noValidate autoComplete="off">
      <TextField
        error={error}
        name={name}
        onChange={handleChange}
        value={value}
        id={name}
        label={label}
      />
    </FormControl>
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery, setIsUrlSelected, isTextFormValue, handleChangeTextFormValue } }) => ({
    setPostQuery, setIsUrlSelected, isTextFormValue, handleChangeTextFormValue
  }))
)(TextForm);
