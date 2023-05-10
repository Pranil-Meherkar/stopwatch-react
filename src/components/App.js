import "../App.css";
import { useEffect, useState } from "react";
import MetaDecorator from './MetaDecorator';

function App() {
  const [time, setTime] = useState({
    hrs: 0,
    min: 0,
    sec: 0,
  });
  const [reseted, setReseted] = useState(true);
  const [int, setInt] = useState();
  const [started, setStarted] = useState(false);

  let sec = time.sec,
    min = time.min,
    hrs = time.hrs;
  const start = () => {
    setInt(setInterval(stopwatch, 1000));
    setStarted(true);
    setReseted(false);
  };

  // useEffect(() => {
  //   (window.adsbygoogle = window.adsbygoogle || []).push({});
  // }, [])

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
    setReseted(true);
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
      {/* <MetaDecorator title={"example title"}
        description={"example Description"}
        imageUrl={"https://picsum.photos/400/200"}
        imageAlt={"image of size 400 x 200"} /> */}
      <h1>Stopwatch</h1>
      <p id="stopwatch">
        {time.hrs === 0 ? "00" : time.hrs} : {time.min === 0 ? "00" : time.min}{" "}
        : {time.sec === 0 ? "00" : time.sec}
      </p>
      <button onClick={start} disabled={started}>
        Start
      </button>
      <button onClick={reset} disabled={reseted}>
        Reset
      </button>
      <button onClick={stop} disabled={!started}>
        Stop
      </button>

      {/* <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3224499592102052"
     data-ad-slot="2987459441"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins> */}
    </>
  );
}

export default App;
