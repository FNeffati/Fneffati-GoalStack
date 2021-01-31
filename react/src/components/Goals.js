import React, {useState} from 'react'

export default () => {

    const [input, setInput] = useState("");
    const [goals, setGoals] = useState([]);

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
                <button type="submit">Add Goal</button>
            </form>

            <div>
                <ul className="todolist">
                    {goals.map((item) => (
                        <div className="goal">
                            <li key={item.id}>{item.value}</li>
                            <button>Complete</button>
                            <button onClick={(e)=>deleteGoal(e, item.id)}>X</button>
                        </div>
                    ) )}
                </ul>
            </div>
        </div>
    )
}