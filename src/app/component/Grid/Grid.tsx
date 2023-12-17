"use client"
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faO } from "@fortawesome/free-solid-svg-icons";

const Grid = () => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const handleClick = (index:number) => {
    
    if (cells[index]) return;
    setCells((cells) => {
      const updatedCells = [...cells];
      updatedCells[index] = turn;
      return updatedCells;
    });
    setTurn(turn === "X" ? "O" : "X");
  };


  return (
    <div className="Grid">
      {cells.map((cell, index) => (
        <span
          key={index}
          className={`Icon ${cell ? "filled" : ""}`}
          data-cell={cell}
          onClick={() => handleClick(index)}
        >
          {cell === "X" && <FontAwesomeIcon icon={faXmark} className="icon-red" />}
          {cell === "O" && <FontAwesomeIcon icon={faO} className="icon-orange" />}
        </span>
      ))}
    </div>
  );
};

export {Grid}


