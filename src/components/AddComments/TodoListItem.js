import React, { memo } from "react";


import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoListItem = memo(props => (
    <ListItem divider={props.divider}>
        <ListItemText primary={props.text} />
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
                <DeleteOutlined />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
));

export default TodoListItem;