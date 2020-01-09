import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import { compose, withProps } from "recompose";

import { STORE_KEYS } from "../../stores";
import TypographyVariants from "../Typography";

function SimpleTabs({
  handleChange,
  handleChangeCount,
  handleChangePoints,
                      setIsPointSelected
}) {
  const [value, setValue] = React.useState("");
  const [valueInp, setValueInp] = React.useState("");
  handleChange = (event, newValue) => {
    setValue(newValue);
  };

  handleChangeCount = event => {
    const inp = event.target.value.replace(/[^0-9]/g, '');
    setValueInp(inp);
  };

  handleChangePoints = e => {
    const inp = e.target.value.replace(/[^0-9]/g, '');
    setValue(inp);
  };
  const points = value * valueInp;
  setIsPointSelected((points === 0));
  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}

      >
        <Tab style={{ display: "none" }} value={value} />
        <Tab label="Slow" value={8} />
        <Tab label="Normal" value={10} />
        <Tab label="Fast" value={14} />
      </Tabs>
      <form>
        <TextField
          id="standard-basic"
          label="Points"
          value={value}
          onChange={handleChangePoints}
        />
        <TextField
          id="standard-basic"
          label="Count"
          value={valueInp}
          onChange={handleChangeCount}
        />
        <TypographyVariants points={points} />
      </form>
    </Paper>
  );
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.VIEWMODESTORE]: {
        handleChange,
        handleChangeCount,
        handleChangePoints,
        setPostQuery,
        setIsPointSelected
      }
    }) => ({
      handleChange,
      handleChangeCount,
      handleChangePoints,
      setPostQuery,
      setIsPointSelected
    })
  )
)(SimpleTabs);
