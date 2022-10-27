import { useEffect } from "react";
import boardInit from "../utils/boardInit";

function useBoardInit({
  _row = 10,
  _col = 10,
  _bombs = 3,
  callback,
  // reset,
  // resetDepend,
}) {
  useEffect(() => {
    const boardInitHook = () => {
      const initBoard = boardInit(_row, _col, _bombs);
      // console.log("check board",initBoard);
      callback(initBoard.board);
    };
    boardInitHook();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useBoardInit;
