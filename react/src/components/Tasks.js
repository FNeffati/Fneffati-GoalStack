import React, {useState} from 'react'
import ATask from './ATask'
import {FaClock} from 'react-icons/fa'
import {BsFillPlayFill} from 'react-icons/bs'

export default () => {

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const createNewTask = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = (e, item) => {
        e.preventDefault();
       
        const newTask = {
            id: Date.now(),
            value: input,
            time: 0,
        }
        
        setTasks([newTask, ...tasks]);
        // console.log(newTask);
        setInput("");
        console.log(...tasks);
    }

    const deleteTask = (e, id) => {
        e.preventDefault();
        setTasks(tasks.filter( (item) => item.id !== id));
    }

    return (
        <div className="tasks">
            <h1>These are the tasks</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={createNewTask} value={input}/>
                <button type="submit">Add task</button>
            </form>

            <div>
                <ul className="todolist">
                    {tasks.map((item) => (
                        <ATask item={item} deleteTask={deleteTask}/>
                    ) )}
                </ul>
            </div>
        </div>
    )
}