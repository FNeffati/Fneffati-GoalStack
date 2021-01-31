import React, {useState} from 'react'

export default () => {

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [time, setTime] = useState(0);

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

    const moreTime = (item) => {
        item.time++;
    }

    const lessTime = (item) => {
        item.time--;
    }

    return (
        <div className="tasks">
            <h1>These are the tasks</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={createNewTask} value={input}/>
                <button type="submit">Add task</button>
            </form>

            <div>
                <ul>
                    {tasks.map((item) => (
                        <div className="task">
                            <li key={item.id}>{item.value}</li>
                            <button onClick={(e)=>deleteTask(e, item.id)}>X</button>

                            <label>Timer</label>
                            <button onClick={moreTime(item)}>+</button>
                            <label>0</label>
                            <button onClick={lessTime(item)}>-</button>

                            <button>Complete</button>
                        </div>
                    ) )}
                </ul>
            </div>
        </div>
    )
}