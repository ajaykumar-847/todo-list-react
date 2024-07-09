import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

// Filter button Values to filter based on all tasks or completed tasks
const filterButtonValues = {
    All: () => true,
    Completed: (task) => task.completed,
};

function App(props) {
    // useState for filter functionality
    const [filter, setFilter] = useState("All");
    // useState for task updating
    const [tasks, setTasks] = useState(props.tasks);

    // Filter the task based on All or Completed
    const taskList = tasks.filter(filterButtonValues[filter])
        .map((task) => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                checkTaskStatus={checkTaskStatus}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));

    const headingValue = `Total Tasks = ${taskList.length}`;

    // Function to generate unique key
    const generateKey = () => {
        return `id_${new Date().getTime()}`;
    }

    // Funciton to add a new Task
    function addTask(name) {
        const taskId = generateKey();
        const newTask = { id: { taskId }, name, completed: false };
        setTasks([...tasks, newTask]);
    }

    // Function to delete an existing task
    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    // Function to edit an existing task
    function editTask(id, newName) {
        const editedTaskList = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    // Function to check task is completed or not
    function checkTaskStatus(id) {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className="container">
            <Form addTask={addTask} />
            <div className="filter-buttons-container">
                <FilterButton
                    key={"All"}
                    name={"All"}
                    setFilter={setFilter}
                />
                <FilterButton
                    key={"Completed"}
                    name={"Completed"}
                    setFilter={setFilter}
                />
            </div>
            <h2 id="list-heading">{headingValue}</h2>
            <ul>
                {taskList}
            </ul>
        </div>
    );
}

export default App;
