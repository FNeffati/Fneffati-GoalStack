import React, { useState, useEffect } from 'react'

export default () => {

    const [input, setInput] = useState("");
    const [goals, setGoals] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        getGoals();
    }, []);

    const getGoals = async () => {
        const goals = await fetch("http://hoyahacks.dylantknguyen.com/api/goals/list/")
        .then(response => response.json())
        .then(data => setGoals(data));
    };

    const createNewGoal = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit = (e, item) => {
        e.preventDefault();
       
        const newGoal = {
            id: Date.now(),
            value: input,
            time: 0,
        }
        
        setGoals([newGoal, ...goals]);
        // console.log(newTask);
        setInput("");
        console.log(...goals);
    }

    const deleteGoal = (e, id) => {
        e.preventDefault();
        setGoals(goals.filter( (item) => item.id !== id));
    }

    return (
        <div className="goals">
            <h1>These are the goals</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={createNewGoal} value={input}/>
                <button type="submit">Add task</button>
            </form>

            <div>
                <ul>
                    {goals.map((goal) => (
                      <>
                            <li key={goal.id}>{goal.name}</li>
                            <button>Complete</button>
                            <button onClick={(e)=>deleteGoal(e, goal.id)}>X</button>
                      </>
                    ))}
                    {goals.map((item) => (
                      <>
                            <li key={item.id}>{item.value}</li>
                            <button>Complete</button>
                            <button onClick={(e)=>deleteGoal(e, item.id)}>X</button>
                      </>
                    ))}
                </ul>
            </div>
        </div>
    )
}
