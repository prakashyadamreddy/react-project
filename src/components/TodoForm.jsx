import {useState} from "react";

export default function TodoForm ({addTodo}) {
    const [value, setValue] = useState('');

    function handleSubmit (e){
        e.preventDefault();
        addTodo(value); 
        setValue("");   
    }

    return (
        <>
            <h1> Get Things done </h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" className="todo-input-text"  value = {value} placeholder="enter the task you need to add" onChange={ (e) => setValue(e.target.value)}></input>
                <button type="submit" className="todo-submit-btn" >Add Task</button>
            </form>
        </>
    );
}