import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { compose, withProps } from "recompose";
import { inject, observer } from "mobx-react";
import Button from '@material-ui/core/Button';

import {STORE_KEYS} from "../../stores";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function OutlinedButtons({postQuery, setIsMessengerSelected}) {
    const classes = useStyles();
    let query = "";
    const handleSubmit = () => {
        for (let [key, value] of Object.entries(postQuery)) {
            query = query
                ? query.concat("", `&${key}=${value}`)
                : query.concat("", `${key}=${value}`);

        }
        console.log(query);
        console.log(!!(query.indexOf('SelectMessenger=&') + 1));
        setIsMessengerSelected(!!(query.indexOf('SelectMessenger=&') + 1));
    };

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleSubmit} >
                Send
            </Button>
        </div>
    );
}

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(
        ({ [STORE_KEYS.VIEWMODESTORE]: { postQuery, setIsMessengerSelected, isMessengerSelected } }) => ({
            postQuery, setIsMessengerSelected, isMessengerSelected
        })
    )
)(OutlinedButtons);