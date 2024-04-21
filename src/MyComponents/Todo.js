import React from 'react';

export default function Todo(props) {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                <label className="form-check-label" for="firstCheckbox">{props.todo.title}</label>
            </li>
        </ul>
    )
}