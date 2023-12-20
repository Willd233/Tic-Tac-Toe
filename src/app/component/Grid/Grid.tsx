"use client"
import React, { use, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faO } from "@fortawesome/free-solid-svg-icons";
import Timer from "../TurnTimer/timer";

export const Grid = () => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [playing, setPlaying] = useState<boolean>(false);
  const [textButton, setTextButton] = useState("PLAY");
  const [winer, setWiner] = useState("Tic Tac Toe!")

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
    <main>
      <div className='primary-title'>
        <h1>{winer}</h1>
      </div>
      <div className="container">
        <div className={`X ${turn === "X" && playing ? "turn-active" : ""}`}>
          <div className="title">
            <h1>X Turn</h1>
          </div>
          <div className="timer-left O">
            <span className="title-internal">
              <Timer playing={playing} turn={turn} setTurn={setTurn} tag={"O"} />
            </span>
          </div>
        </div>
        <section className="Grid">
          {cells.map((cell, i) => (
            <span
              key={i}
              className={`Icon ${cell ? "filled" : ""} ${turn === "X" ? "hover-X" : "hover-O"}`}
              data-cell={cell}
              onClick={() => handleClick(i)}
              
            >
              {cell === "X" && <FontAwesomeIcon icon={faXmark} className="icon-red" />}
              {cell === "O" && <FontAwesomeIcon icon={faO} className="icon-orange" />}
            </span>
          ))}
        </section>
        <div className={`O ${turn === "O" ? "turn-active" : ""}`}>
          <div className="title">
            <h1>O Turn</h1>
          </div>
          <div className="timer-left X">
            <span className="title-internal">
              <Timer playing={playing} turn={turn} setTurn={setTurn} tag={"X"} />
            </span>
          </div>
        </div>
        <button
          onClick={startTimer}
          
          className={`${playing ? "in-progress" : "play"}`}
        >
          {textButton}
        </button>
      </div>
    </main>
  );
}
