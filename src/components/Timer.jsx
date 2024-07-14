import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function Timer({ title, targetTime }) {

  //  const [timerExpired, setTimerExpired] = useState(false);
  //  const [timeStarted, setTimerStarted] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timer = useRef();
    const dialog = useRef();

    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);

    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            {<ResultModal ref = {dialog} targetTime={targetTime} remainingTime = {timeRemaining} onReset = {handleReset}></ResultModal>}

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={isTimerActive ? handleStop : handleStart}>
                    {isTimerActive ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={isTimerActive ? 'active' : undefined} >
                    {isTimerActive ? 'Time is running' : 'timer inactive'}
                </p>
            </section>
        </>

    );

}