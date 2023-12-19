"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faO } from "@fortawesome/free-solid-svg-icons";
import Timer from "../TurnTimer/timer";

export const Grid = () => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [playing, setPlaying] = useState<boolean>(false);
  const [textButton, setTextButton] = useState("PLAY");

  const handleClick = (i: number) => {
    if (!playing || cells[i]) return;

    const newCells = [...cells];
    newCells[i] = turn;
    setTurn(turn === "X" ? "O" : "X")
    setCells(newCells)
  };

  const startTimer = () => {
    setPlaying(true)
    setTextButton("IN PROGRESS")

  }


  return (
    <div className="container">
      <div>
        <div className="title">
          <h1>X Turn</h1>
        </div>
        <div className="timer-left">
          <Timer playing={playing} turn={turn} setTurn={setTurn} tag={"O"} />
        </div>
      </div>
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

      </section>
      <div>
        <div className="title">
          <h1>O Turn</h1>
        </div>
        <div className="timer-left">
          <Timer playing={playing} turn={turn} setTurn={setTurn} tag={"X"} />
        </div>
      </div>
      <button onClick={startTimer}>{textButton}</button>
    </div>
  );
}
