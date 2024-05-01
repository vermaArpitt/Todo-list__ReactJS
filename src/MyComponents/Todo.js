import React from 'react';
import './Todo.css';

export default function Todo(props) {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input className="form-check-input me-1 mt-2" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label" for="firstCheckbox">{props.todo.title}</label>
                <button type="button" className="btn btn-outline-warning p-1" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
            </li>
        </ul>
    )
}