import editIcon from "../edit-icon.svg";
import deleteIcon from "../delete-icon.svg";

export default function TodoTask ({task}) {
    return (
        <section className="todotask-tab">
            <p>{task}</p>
            <img src={editIcon} alt="edit-icon"/>
            <img src={deleteIcon} alt= "delete-icon"/>
        </section>
    );
}