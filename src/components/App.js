import "../App.css";
import { useState } from "react";

function App() {
  const [time, setTime] = useState({
    hrs: 0,
    min: 0,
    sec: 0,
  });
  const [int, setInt] = useState();
  const [started, setStarted] = useState(false);

  let sec = time.sec,
    min = time.min,
    hrs = time.hrs;
  const start = () => {
    setInt(setInterval(stopwatch, 1000));
    setStarted(true);
  };

  const stop = () => {
    clearInterval(int);
    setStarted(false);
  };

  const reset = () => {
    setTime({
      hrs: 0,
      min: 0,
      sec: 0,
    });
    stop();
  };

  const stopwatch = () => {
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hrs++;
      min = 0;
    }
    sec++;
    if (sec.toString().length < 2) sec = "0" + sec;

    if (min.toString().length < 2) min = "0" + min;

    if (hrs.toString().length < 2) hrs = "0" + hrs;
    setTime({ sec: sec, min: min, hrs: hrs });
  };
  return (
    <>
      <h1>Stopwatch</h1>
      <p id="stopwatch">
        {time.hrs === 0 ? "00" : time.hrs} : {time.min === 0 ? "00" : time.min}{" "}
        : {time.sec === 0 ? "00" : time.sec}
      </p>
      <button onClick={start} disabled={started ? true : false}>
        Start
      </button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

export default App;
