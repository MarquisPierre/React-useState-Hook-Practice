import React, { useState } from "react";

function App() {
  const localTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  const [Time, setTime] = useState("Time");
  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    setTime(newTime);
    setInterval(updateTime, 1000);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
