import React from "react";
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

const TextForm = ({ name, setPostQuery, label }) => {
  const validURL = str => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange = e => {
    const val = e.target.value;
    setValue(val);
    setError(!validURL(val));
    setPostQuery(label, val);
  };
  return (
    <FormControl className={classes.formControl} noValidate autoComplete="off">
      <TextField
        error={error}
        name={name}
        onChange={handleChange}
        value={value}
        id={name}
        label={`http://`}
      />
    </FormControl>
  );
};

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
    setPostQuery
  }))
)(TextForm);
