import {useState} from "react";

export default function EditTodoForm ({editTodo, task}) {
    const [value, setValue] = useState(task.task);

    function handleSubmit (e){
        e.preventDefault();
        editTodo(value, task.id); 
        setValue("");   
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text" className="todo-input-text"  value = {value} placeholder="update task" onChange={ (e) => setValue(e.target.value)}></input>
            <button type="submit" className="todo-submit-btn" >update Task</button>
        </form>
    );
}