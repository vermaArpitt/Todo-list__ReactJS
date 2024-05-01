import React from 'react';
import Todo from './Todo';
import './Todos.css';

export default function Todos(props){
    return(
        <div className = "container">
            <h4 className = "my-3">Tasks</h4>
            {props.todos.map((todo) => {
                return <Todo todo={todo} onDelete = {props.onDelete}/>
            })}

        </div>
    )
}