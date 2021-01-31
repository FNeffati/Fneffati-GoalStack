import React, { useState, useEffect } from 'react'

export default () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        getGoals();
    }, []);

    const getGoals = async () => {
        const goals = await fetch("http://hoyahacks.dylantknguyen.com/api/goals/list/")
        .then(response => response.json())
        .then(data => setGoals(data));
    };
    return (
        <div className="goals">
            {goals.map((goal) => {
                const { id, name } = goal;
                return (
                    <h1 key={id}>{name}</h1>
                );
            })}
        </div>
    )
}
