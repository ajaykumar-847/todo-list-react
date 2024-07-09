import { useState } from "react";
import { Button } from "antd";

function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    function handleChange(event) {
        setNewName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    // Editing template when a user clicks the edit button
    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <div className="task-name">
                <label className="label" htmlFor={props.id}>
                    Enter new name for {props.name} task
                </label>
                <input
                    id={props.id}
                    className="todo-text"
                    type="text"
                    value={newName}
                    onChange={handleChange}
                />
            </div>

            <div className="button-container">
                <button type="submit" className="button-blue">
                    Save
                </button>
                <Button
                    type="primary"
                    className="button-red"
                    danger
                    onClick={() => setEditing(false)}>
                    Cancel
                </Button>
            </div>
        </form>
    );

    // View template to render when the user wants to view tasks
    const viewTemplate = (
        <div >
            <div className="task-name">
                <input
                    id={props.id}
                    className="checkbox"
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.checkTaskStatus(props.id)}
                />
                <label className="" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="button-container">
                <Button type="primary" className="button-green" onClick={() => setEditing(true)}>
                    Edit
                </Button>

                <Button
                    type="primary"
                    danger
                    className="button-red"
                    onClick={() => props.deleteTask(props.id)}>
                    Delete
                </Button>
            </div>
        </div>
    );

    // Conditional rendering
    return (
        <li>
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    );
}

export default Todo;
