import React, { useState, useEffect } from "react";
import "./Todos.css";
import { toast } from "react-hot-toast";
import Navbar from "../../Components/Navbar/Navbar";
import deletedbtn from "../../asset/delete.png"

const Todos = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskdata = {
        text: newTask,
        completed: false,
        priority: priority,
        description: description,
      };
      setTasks((prev) => [...prev, newTaskdata]);
      setNewTask("");
      setPriority("");
      setDescription("");
      toast.success("Task added successfully");
    }
  };

  const markTaskCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
    toast.success("Task marked as completed");
  };

  const markTaskPending = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = false;
    setTasks(updatedTasks);
    toast.success("Task marked as pending");
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    toast.error("Task deleted");
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <>
      <Navbar />

      <div className="main-container-todo">
        <div className="todo-container">
          <h2 className="todo">Todo List</h2>
          <div className="data">
            <p className="task-count">
              <span>Total tasks:</span> {totalTasks}
            </p>
            <p className="completed-count">
              <span>Completed tasks:</span> {completedTasks}
            </p>
          </div>

          <div className="input-container">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              className="task-input"
            />
            <select
              className="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Priority</option>
              <option value="urgent">Urgent</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={addTask} className="add-button">
              Add Task
            </button>
          </div>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="task-list-data">
                <h3>Name:</h3>
                <h3 className="task-text">{task.text}</h3>
                <p>Description:</p>
                <p className="description">{task.description}</p>
                <p>Priority:</p>
                <p className="task-priority">{task.priority}</p>
              
              </div>
              <div className="button-container">
                <h3>Status:</h3>
              {!task.completed ? (
                  <button
                    className="toggle pending"
                    onClick={() => markTaskCompleted(index)}
                  >
                    Pending
                  </button>
                ) : (
                  <button
                    className="toggle completed"
                    onClick={() => markTaskPending(index)}
                  >
                    Completed
                  </button>
                )}
                <button className="remove" onClick={() => removeTask(index)}>
                <img src={deletedbtn} alt="" />
                </button>
              </div>

             
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
