import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import Button from "@material-ui/core/Button";

import { STORE_KEYS } from "../../stores";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function OutlinedButtons({
  postQuery,
  setIsMessengerSelected,
  setIsActionSelected,
  setIsUrlSelected,
  isActionSelected,
  isUrlSelected,
  isPointSelected,
  isMessengerSelected
}) {
  const [colorButton, setColorButton] = React.useState("primary");

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
  let query = "";


  const handleSubmit = () => {
    for (let [key, value] of Object.entries(postQuery)) {
      query = query
        ? query.concat("", `&${key}=${value}`)
        : query.concat("", `${key}=${value}`);
    }
    if (
      !isActionSelected &&
      !isUrlSelected &&
      !isPointSelected &&
      !isMessengerSelected &&
      query !== "SelectMessenger=&SelectAction=&Url=&Points=0"
    ) {
      setColorButton("primary")
      console.log(query);
    } else setColorButton("secondary");
    setIsMessengerSelected(!!(query.indexOf("SelectMessenger=&") + 1));
    setIsActionSelected(!!(query.indexOf("SelectAction=&") + 1));
    setIsUrlSelected(
      !!(query.indexOf("Url=&") + 1) &&
        !validURL(
          query.slice(query.indexOf("Url=") + 4, query.indexOf("&Points"))
        )
    );
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color={colorButton} onClick={handleSubmit}>
        Send
      </Button>
    </div>
  );
}

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
      [STORE_KEYS.VIEWMODESTORE]: {
        postQuery,
        setIsMessengerSelected,
        setIsActionSelected,
        setIsUrlSelected,
        isActionSelected,
        isUrlSelected,
        isPointSelected,
        isMessengerSelected
      }
    }) => ({
      postQuery,
      setIsMessengerSelected,
      setIsActionSelected,
      setIsUrlSelected,
      isActionSelected,
      isUrlSelected,
      isPointSelected,
      isMessengerSelected
    })
  )
)(OutlinedButtons);
