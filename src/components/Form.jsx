import { useState } from "react";
import { Input } from "antd";

// Form component to add a new task
function Form(props) {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>TODO-LIST-APP</h1>
            <Input
                type="text"
                id="new-todo-input"
                className="input"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
                placeholder="Enter a new Task"
                variant="filled"
            />
            <button type="submit"  className="add-button">
                Add
            </button>
        </form>
    );
}

export default Form;
