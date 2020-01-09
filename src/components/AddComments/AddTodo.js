import React, { memo } from "react";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const AddTodo = memo(props => (
    <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
            <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                <TextField
                    placeholder="Add comment here"
                    value={props.inputValue}
                    onChange={props.onInputChange}
                    onKeyPress={props.onInputKeyPress}
                    fullWidth
                />
            </Grid>
            <Grid xs={2} md={1} item>
                <Button
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    onClick={props.onButtonClick}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    </Paper>
));

export default AddTodo;
