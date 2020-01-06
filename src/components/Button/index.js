import React from 'react';
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

function OutlinedButtons({postQuery}) {
    const classes = useStyles();
    const [error, setError] = React.useState(false);
    const handleSubmit = () => {
        let query = "";
        for (let [key, value] of Object.entries(postQuery)) {
            query = query
                ? query.concat("", `&${key}=${value}`)
                : query.concat("", `${key}=${value}`);
            console.log(value);
            if(value === "" && key !== 'Comments') {
                console.log('work');
                setError(true);
            }
        }

        console.log(query);
    };
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Send
            </Button>
            {error && <h1 style={{color: "red"}}>test</h1>}
        </div>
    );
}

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(
        ({ [STORE_KEYS.VIEWMODESTORE]: { postQuery } }) => ({
            postQuery
        })
    )
)(OutlinedButtons);