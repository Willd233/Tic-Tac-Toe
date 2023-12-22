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
  const [winer, setWiner] = useState("Tic Tac Toe!");
  const [winnerColor, setWinnerColor] = useState("");
  const [winningCells, setWinningCells] = useState<number[]>([]); // Add a state to track winning cells



  const handleClick = (i: number) => {
    if (!playing || cells[i]) return;


    const newCells = [...cells];
    newCells[i] = turn;
    setTurn(turn === "X" ? "O" : "X")
    setCells(newCells);
    setWinningCells([]); // Reset winning cells on every move

  };

  useEffect(() => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winningConditions) {
      if (
        cells[condition[0]] &&
        cells[condition[0]] === cells[condition[1]] &&
        cells[condition[1]] === cells[condition[2]]
      ) {
        setWiner(`${cells[condition[0]]} Wins!`);
        setWinnerColor(cells[condition[0]] === "X" ? "#940a0a" : "orange"); // Set the color here
        setPlaying(false);
        setTextButton("PLAY");
        setTurn("X");
        setWinningCells(condition);
        break;
      }
    }

    if (cells.every((cell) => cell)) {
      setWiner("It's a Tie!");
      setPlaying(false);
      setCells(Array(9).fill(""));
      setTurn("X");
      setTextButton("PLAY");
    }

    
  }, [cells]);


  const startTimer = () => {
    setPlaying(true)
    setTextButton("IN PROGRESS")
    setCells(Array(9).fill(""));

  }

  return (
    <main>
      <div className='primary-title'>
      <h1 style={{ color: winnerColor }}>{winer}</h1>
      </div>
      <div className="container">
        <div className={`X ${turn === "X" && playing ? "turn-active" : ""} `}>
          <div className="title">
            <h1>X Turn</h1>
          </div>
          <div className="timer-left O" >
            <span className="title-internal">
              <Timer playing={playing} turn={turn} setTurn={setTurn} tag={"O"} />
            </span>
          </div>
        </div>
        <section className="Grid">
          {cells.map((cell, i) => (
            <span
              key={i}
              className={`Icon ${cell ? "filled" : ""} ${turn === "X" ? "hover-X" : "hover-O"} ${winningCells.includes(i) ? "winner-cell" : ""}`}
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
