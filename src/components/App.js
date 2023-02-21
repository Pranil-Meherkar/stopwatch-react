import '../App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState({
    hrs: 0,
    min:0,
    sec:0,
  })
  const [int, setInt] = useState();
  const [started, setStarted] = useState(false);

  let sec= time.sec, min = time.min, hrs = time.hrs;
  const start = () => { 
    setInt(setInterval(stopwatch,1000))
    setStarted(true)
   }

   const stop = () => { 
    clearInterval(int)
    setStarted(false)
   }

   const reset = () => { 
    setTime({
      hrs: 0,
      min:0,
      sec:0,
    })
    stop()
   }

   const stopwatch = () => { 
    if(sec === 60){
      min++;
      sec = 0;
    }
    if(min === 60){
      hrs++;
      min = 0;
    }
    sec++;
    setTime({sec: sec,min:min,hrs:hrs})
   }
  return (
    <>
    <h1>Stopwatch</h1>
    <p id="stopwatch">{time.hrs} : {time.min} : {time.sec}</p>
    <button onClick={start} style={{display: started? "none":"inline-block"}}>Start</button>
    <button onClick={reset} style={{display: started? "none":"inline-block"}}>Reset</button>
    <button onClick={stop}>Stop</button>
    </>
  );
}

export default App;
