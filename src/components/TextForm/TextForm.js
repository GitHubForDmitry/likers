import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

export default function TextForm({ name, setPostQuery }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <FormControl className={classes.formControl} noValidate autoComplete="off">
      <TextField
        name={name}
        onChange={handleChange}
        value={value}
        id={name}
        label={`http://`}
      />
    </FormControl>
  );
}


