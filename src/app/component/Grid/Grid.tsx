"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faO } from "@fortawesome/free-solid-svg-icons";

const Grid = () => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [playing, setPlaying] = useState<boolean>(false);
  const [turnTimer, setTurnTimer] = useState(5);

  const handleClick = (i: number) => {
    if (!playing || cells[i]) return;

    const newCells = [...cells];
    newCells[i] = turn;
    setTurn(turn === "X" ? "O" : "X")
    setCells(newCells)
    setTurnTimer(5)
  };

  const startTimer = () => {
    setPlaying(true)
  }


  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      if (turnTimer <= 0) {
        setTurn(turn === "X" ? "O" : "X")
        setTurnTimer(5);
        return;
      }
      setTurnTimer(turnTimer - 1);
    }, 1000);

    return () => clearInterval(timer)
  }, [turnTimer, playing, turn ]);


  return (
    <section className="Grid">
      {cells.map((cell, i) => (
        <span
          key={i}
          className={`Icon ${cell ? "filled" : ""}`}
          data-cell={cell}
          onClick={() => handleClick(i)}
        >
          {cell === "X" && <FontAwesomeIcon icon={faXmark} className="icon-red" />}
          {cell === "O" && <FontAwesomeIcon icon={faO} className="icon-orange" />}
        </span>


      ))}
      <div>
        <span>{turn}</span>
        <Timer value={turnTimer} />
        <button onClick={startTimer}>Start</button>

      </div>
    </section>

  );
}

const Timer = ({ value }: { value: number }) => {
  return (
    <div>
      <span>{value}</span>
    </div>)
}

export { Grid }

{/* <FontAwesomeIcon icon={faXmark}
<FontAwesomeIcon icon={faO} */}