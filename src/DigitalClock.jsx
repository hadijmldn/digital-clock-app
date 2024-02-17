import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const maridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Reset hour to 12 if it's 0 to 11 (mid

    return `${pedZero(hours)}:${pedZero(minutes)}:${pedZero(
      seconds
    )} ${maridiem}`;
  }

  function pedZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
