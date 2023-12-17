"use client"
import { useState } from "react";
import { Timer } from "../TurnTimer/timer";

function TurnX() {
  const [isRunning, setIsRunning] = useState(false)


  return (
    <div className="title">
      <h1>X Turn</h1>
      <div className="primaryTurn">
        <span>
          <Timer />
        </span>
      </div>
    </div>
  );
}

export { TurnX }