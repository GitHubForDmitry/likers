import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import {STORE_KEYS} from "../stores";

const theme = createMuiTheme({
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: 'italic',
        },
    },
});

function TypographyVariants({points, setPostQuery, setIsPointSelected}) {

    setPostQuery("Points", points);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Typography>{points}</Typography>
            </div>
        </ThemeProvider>
    );
}

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { setPostQuery, setIsPointSelected, isPointSelected } }) => ({
        setPostQuery, setIsPointSelected, isPointSelected
    }))
)(TypographyVariants);
