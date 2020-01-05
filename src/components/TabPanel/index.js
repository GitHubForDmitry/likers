import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from "@material-ui/core/TextField";

export default function SimpleTabs() {
    const [value, setValue] = React.useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeInput = (event) => {
        return event.target.value;
    };
    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="Slow" value={8}/>
                <Tab label="Normal" value={10}/>
                <Tab label="Fast" value={14}/>
            </Tabs>
            <form>
                <TextField id="standard-basic" label="Points" value={value} />
                <TextField id="standard-basic" label="Count" onChange={handleChangeInput} />
            </form>
        </Paper>
    );
}