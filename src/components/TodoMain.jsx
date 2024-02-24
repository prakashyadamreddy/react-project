import TodoTask from "./TodoTask";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();


export default function TodoMain () {
    const [todoTask, setTodoTask ] = useState([]);

    const addTodo = (todo) => {
        setTodoTask([ ...todoTask, {id: uuidv4() , task: todo, completed: false, isEditing: false}]);
    }
    const completedstrike = (id) => { 
        setTodoTask(todoTask.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }
    const deleteTask = (id) => {
        setTodoTask(todoTask.filter( todo => todo.id !== id))
    }
    const editTask = (id) => {
        setTodoTask(todoTask.map( todo => todo.id === id ? {...todo, isEditing : !todo.isEditing} : todo ))
    }
    const editTodoTask = (task, id) => {
        setTodoTask(todoTask.map( todo => todo.id ===id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }
    return (
        <section className= "todo-container">
            <TodoForm addTodo ={addTodo}/>
            {todoTask.map((todo , index) => (
                todo.isEditing ? (<EditTodoForm editTodo = {editTodoTask} task= {todo} key = {index}/>) :
                (<TodoTask task = {todo} key = {index} completedstrike = {completedstrike} editTask= {editTask} deleteTask= {deleteTask}/>)
            ))}
        </section>
    );
}