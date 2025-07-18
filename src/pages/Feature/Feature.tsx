import { useState, useEffect } from "react";
import "./Feature.css";

function Feature() {
  const [time, setTime] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: number;
    if (running) {
      timer = window.setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (ms: number) => {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    const cs = Math.floor((ms % 1000) / 10);
    return `${min}:${String(sec).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
  };

  return (
    <div className="feature-wrapper">
      <div className="feature-box">
        <h1 className="feature-title">Feature<br />Stopwatch</h1>
        <div className="stopwatch-time">{formatTime(time)}</div>
        <div className="feature-controls">
          <button onClick={() => setRunning(true)} disabled={running}>Start</button>
          <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
          <button onClick={() => { setTime(0); setRunning(false); }}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
