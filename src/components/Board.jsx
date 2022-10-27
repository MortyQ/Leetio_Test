import { useState } from "react";
import { useEffect } from "react";
// import useBoardInit from "../hooks/useBoardInit";
import { revealed } from "../utils/reveal";
import boardInit from "../utils/boardInit";

import Cell from "./Cell";

const Board = ({ rows, reset, setReset, mines }) => {
  const [col, setCol] = useState([]);
  const [mineCount, setMineCount] = useState();

  //   NOTE: firstly used custom hook, but for reload game need use default useEffect. Need many time for create depend with component and custom hook
  //   useBoardInit({
  //     _bombs: 4,
  //     callback: setCol,
  //   });

  useEffect(() => {
    const boardInitHook = () => {
      // eslint-disable-next-line eqeqeq
      const validateField = rows == 0 || !rows ? 1 : rows;
      // eslint-disable-next-line eqeqeq
      const validateFieldForMines = mines == 0 || !mines ? 1 : mines;
      const initBoard = boardInit(
        validateField,
        validateField,
        validateFieldForMines
      );
      setMineCount(rows * rows - mines);
      setCol(initBoard.board);
    };
    boardInitHook();
    if (reset) {
      setReset(!reset);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset, rows, mines]);

  useEffect(() => {
    if (mineCount === 0) {
      alert("You won");
      setReset(!reset);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mineCount]);

  const putUpFlag = (e, x, y) => {
    e.preventDefault();

    let newCol = JSON.parse(JSON.stringify(col));
    newCol[x][y].flagged = !newCol[x][y].flagged;

    setCol(newCol);
  };

  const openCol = (x, y) => {
    let newCol = JSON.parse(JSON.stringify(col));
    if (newCol[x][y].value === "X") {
      alert("You loose");
      setReset(true);
    } else {
      let openCol = revealed(newCol, x, y, mineCount);
      setCol(openCol.arr);
      setMineCount(openCol.newNonMinesCount);
    }
  };

  if (!col) return <h1>This must be spinner :D </h1>;

  return (
    <>
      <div>Fields without mines: {mineCount}</div>
      {col.map((row, index) => (
        <div
          key={"" + row[0].y + row[0].value + index}
          style={{ display: "flex" }}
        >
          {row.map((col, i) => (
            <Cell
              key={"" + row[0].y + row[0].value + col.value + i + index}
              data={col}
              flag={putUpFlag}
              openCol={openCol}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
