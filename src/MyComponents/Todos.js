import React from 'react';
import Todo from './Todo';

export default function Todos(props){
    return(
        <div className = "container">
            <h4>Tasks</h4>
            {props.todos.map((todo) => {
                return <Todo todo={todo}/>
            })}

        </div>
    )
}