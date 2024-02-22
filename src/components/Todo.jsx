import {useState} from "react";
import TodoTask from "./TodoTask";


export default function Todo () {
    const [value, setValue] = useState('');
    function handleSubmit (e){
        e.preventDefault();
        console.log(value);
        
    }
    return (
        <section className= "todo-container">
            <h1> Get Things done </h1>
            <form onSubmit={handleSubmit} className="">
                <input type="text" className="todo-input-text" placeholder="enter the task you need to add" onChange={ (e) => setValue(e.target.value)}></input>
                <button type="submit" className="todo-submit-btn" >Add Task</button>
            </form>
            <TodoTask />
        </section>
    );
}