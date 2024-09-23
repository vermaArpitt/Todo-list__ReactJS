import React from 'react';
import './AddTodo.css';

export const AddTodo = () => {
    return (
        <div className="addForm">
            <form>
                <div class="form-floating mb-3 my-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Add Task"/>
                    <label for="floatingInput">Add Task</label>
                    </div>
                
                <button type="submit" className="btn btn-primary"> + </button>
            </form>
        </div>
    );
}