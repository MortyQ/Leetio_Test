import { useRef, useState } from "react";
import "./App.css";

import Board from "./components/Board";

function App() {
  const [rows, setRows] = useState(15);
  const [mines, setMines] = useState(5);
  const [reset, setReset] = useState(false);
  const inputRef = useRef();
  const minesRef = useRef();

  const resetGame = () => setReset(!reset);

  const setNewBoard = () => {
    setRows(inputRef.current?.value);
  };

  const setNewMines = () => {
    const validate =
      minesRef.current?.value > rows * rows
        ? (rows % minesRef.current?.value) + 1
        : minesRef.current?.value;
    setMines(validate);
  };

  return (
    <div className="App">
      <h1>Leetio test </h1>
      <button
        style={{ border: " 1px solid red", borderRadius: 10, padding: 10 }}
        onClick={() => resetGame()}
      >
        Reset game
      </button>
      <div style={{ display: "flex" }}>
        <div>
          <div className="dflex">
            <b>Dynamic change board Rows:</b>
            <br />
            <input
              type="text"
              label="TRU"
              onChange={(e) => setRows(e.target?.value)}
            ></input>
          </div>
          <div className="dflex">
            <b>Rows * Rows:</b>
            <br />
            <input type="text" ref={inputRef}></input>

            <button
              style={{
                border: " 1px solid red",
                borderRadius: 10,
                padding: 10,
              }}
              onClick={setNewBoard}
            >
              Change rows count
            </button>
          </div>
          <div className="dflex">
            <b>Mines:</b>
            <br />
            <input type="text" ref={minesRef}></input>

            <button
              style={{
                border: " 1px solid red",
                borderRadius: 10,
                padding: 10,
              }}
              onClick={setNewMines}
            >
              Change mine count
            </button>
          </div>
        </div>
      </div>
      <Board rows={rows} reset={reset} setReset={setReset} mines={mines} />
    </div>
  );
}

export default App;
