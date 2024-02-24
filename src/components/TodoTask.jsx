import editIcon from "../edit-icon.svg";
import deleteIcon from "../delete-icon.svg";

export default function TodoTask ({task, completedstrike, deleteTask, editTask}) {
    return (
        <section className="todotask-tab">
            <p onClick = {() => completedstrike(task.id)} className  = {`${task.completed ? "completed" : " "}`}>{task.task}</p>
            <img src={editIcon} alt="edit-icon" onClick={ () => editTask(task.id)}/>
            <img src={deleteIcon} alt= "delete-icon" onClick = {() => deleteTask(task.id)}/>
        </section>
    );
}