import React, { memo } from "react";

import { useInputValue, useTodos } from "./custom-hooks";

import Layout from "./Layout";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import {STORE_KEYS} from "../../stores";

const TodoApp = memo(({setPostQuery}) => {
    const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
    const { todos, addTodo, checkTodo, removeTodo } = useTodos();

    const clearInputAndAddTodo = _ => {
        clearInput();
        addTodo(inputValue);
    };
    setPostQuery("Comments", todos.map(text => text.text).join(', '));
    return (
        <Layout>
            <AddTodo
                inputValue={inputValue}
                onInputChange={changeInput}
                onButtonClick={clearInputAndAddTodo}
                onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
            />
            <TodoList
                items={todos}
                onItemCheck={idx => checkTodo(idx)}
                onItemRemove={idx => removeTodo(idx)}
            />
        </Layout>
    );
});

export default compose(
    inject(STORE_KEYS.VIEWMODESTORE),
    observer,
    withProps(
        ({
             [STORE_KEYS.VIEWMODESTORE]: {
                 setPostQuery
             }
         }) => ({
            setPostQuery
        })
    )
)(TodoApp);
