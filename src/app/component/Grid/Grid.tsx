"use client"
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faO } from "@fortawesome/free-solid-svg-icons";

const Grid = () => {
  const [cells, setCells] = useState(Array(9).fill("")); // Initial state is empty for all icons
  const [turn, setTurn] = useState("X"); // Current player turn

  const handleClick = (clickedIndex: number) => {
    const updatedCells = [...cells];
    updatedCells[clickedIndex] = turn === "X" ? "O" : "X";
    setTurn((turn) => turn === "X" ? "O" : "X");
    setCells(updatedCells);
  };

  return (
    <div className="Grid">
      {cells.map((cell, index) => (
        <span
          key={index}
          className="Icon"
          onClick={() => handleClick(index)}
        >
          {cell === "X" ? <span className="icon-red"><FontAwesomeIcon icon={faXmark} /></span> : cell === "O" ? <span className="icon-orange"><FontAwesomeIcon icon={faO} /></span> : <span></span>}
        </span>
      ))}
    </div>
  );
};

export { Grid};


