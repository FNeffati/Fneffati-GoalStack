import React, {useState, useEffect} from 'react'
import {FaClock} from 'react-icons/fa'
import {BsFillPlayFill} from 'react-icons/bs'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

export default ({item, deleteTask}) => {

    momentDurationFormatSetup(moment);

    const [time, setTime] = useState(30);
    const [timeLeft, setTimeLeft] = useState(30);
    const [intervalID, setIntervalID] = useState(null);

    const isStarted = intervalID !== null;

    const moreTime = () => {
        setTime(time+1);
        setTimeLeft(time+1);
    }

    const lessTime = () => {
        if (time > 1) {
            setTime(time-1);
            setTimeLeft(time-1);
        }
    }


    const tick = () => {
        if (timeLeft > 0) {
            setTimeLeft(prevTimeLeft => {
                const newTimeLeft = prevTimeLeft - 1;
                if (newTimeLeft >= 0) {  // keep ticking
                    return prevTimeLeft - 1;
                } else {
                    setTimeLeft(time);
                }
            })
        }
    }

    const countDown = () => {
        if (isStarted) {
            clearInterval(intervalID);
            setIntervalID(null);
        } else {
            const newIntervalID = setInterval(tick, 100);  // change to 1000!!!!
            setIntervalID(newIntervalID);
        }
    }

    const formattedTimeLeft = moment.duration(timeLeft, 'm').format('mm:ss', {trim:false});

    return (
        <div className="task">
            <li key={item.id}>{item.value}</li>
            <div>
                <FaClock />
                <button onClick={moreTime}>+</button>
                <label>{time}</label>
                <button onClick={lessTime}>-</button>
                <button onClick={countDown}>
                    <BsFillPlayFill />||
                </button>
            </div>

            <label>{formattedTimeLeft}</label>

            <button>Complete</button>
            <button onClick={(e)=>deleteTask(e, item.id)}>X</button>
        </div>
    )
}