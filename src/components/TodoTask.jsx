import editIcon from "../edit-icon.svg";
import deleteIcon from "../delete-icon.svg";

export default function TodoTask () {
    return (
        <section className="todotask-tab">
            <p>test</p>
            <img src={editIcon} alt="edit-icon"/>
            <img src={deleteIcon} alt= "delete-icon"/>
        </section>
    );
}