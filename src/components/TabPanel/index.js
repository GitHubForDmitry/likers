import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from "@material-ui/core/TextField";
import { inject, observer } from "mobx-react";
import { compose, withProps } from "recompose";

import { STORE_KEYS } from "../../stores";

function SimpleTabs({handleChange, handleChangeCount, handleChangePoints}) {
    const [value, setValue] = React.useState("");
    const [valueInp, setValueInp] = React.useState("");
    handleChange = (event, newValue) => {
        setValue(newValue);
    };

    handleChangeCount = (event) => {
        const inp = event.target.value;
        setValueInp(inp);
    };

    handleChangePoints = (e) => {
        const inp = e.target.value;
        setValue(inp);
    }
    return (
        <Paper square>
            <Tabs
                value={false}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab style={{display: "none"}} value=""/>
                <Tab label="Slow" value={8}/>
                <Tab label="Normal" value={10}/>
                <Tab label="Fast" value={14}/>
            </Tabs>
            <form>
                <TextField id="standard-basic" label="Points" value={value} onChange={handleChangePoints}/>
                <TextField id="standard-basic" label="Count" onChange={handleChangeCount} />
                <h1>{value * valueInp}</h1>
            </form>
        </Paper>
    );
}

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(({ [STORE_KEYS.VIEWMODESTORE]: { handleChange, handleChangeCount, handleChangePoints } }) => ({
        handleChange, handleChangeCount, handleChangePoints
    }))
)(SimpleTabs);