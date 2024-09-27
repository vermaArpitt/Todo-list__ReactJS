import React, {useState} from 'react';
import './AddTodo.css';

export const AddTodo = (props) => {
    const [task, setTask] = useState("");

    const changeTask = (title)=>
    {
        setTask(title);
    }

    const submitForm = (e)=>
    {
        e.preventDefault();
        if(task.length === 0)
        {
            alert("Task can not be empty");
        }
        else
        {
            props.addTask(task);
        }
    }

    return (
        <div className="addForm">
            <form onSubmit={submitForm}>
                <div className="form-floating mb-3 my-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Add Task" onChange={(event)=>{changeTask(event.target.value)}}/>
                    <label htmlFor="floatingInput">Add Task</label>
                    </div>
                
                <button type="submit" className="btn btn-primary"> + </button>
            </form>
        </div>
    );
}