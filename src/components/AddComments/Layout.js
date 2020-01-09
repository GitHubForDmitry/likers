import React, { memo } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Layout = memo(props => (
    <Paper
        elevation={0}
        style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
    >
        <AppBar color="primary" position="static" style={{ height: 64 }}>
            <Toolbar style={{ height: 64 }}>
                <Typography color="inherit">Add comments</Typography>
            </Toolbar>
        </AppBar>
        {props.children}
    </Paper>
));

export default Layout;