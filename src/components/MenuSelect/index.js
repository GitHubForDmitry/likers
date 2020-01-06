import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import { STORE_KEYS } from "../../stores";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function MenuSelect({ items, label, setPostQuery, postQuery }) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleChange = event => {
    const val = event.target.value;
    setAge(val);

    setPostQuery(label, val.toLowerCase());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl} error={error}>
        <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          {items.map((item, index) => (
            <MenuItem key={index} value={item}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/user/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery } }) => ({
    setPostQuery
  }))
)(MenuSelect);
