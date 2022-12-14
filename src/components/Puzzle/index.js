import React, { useReducer } from "react";
import reducer from "../../reducers/reducer";
import "./puzzle.css";

const Puzzle = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: ["4", "1", "2", "7", "6", "3", null, "5", "8"]
  });

  return (
    <div className="Puzzle">
      <div className="Puzzle_squares">
        {state.items.map((s, i) => (
          <div
            className={`Puzzle_square ${s ? "" : "Puzzle-square-empty"}`}
            key={`square-${i}`}
            onClick={() => dispatch({ type: "move", payload: i })}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="Puzzle_controls">
        <button
          className="Puzzle_shuffle"
          onClick={() => dispatch({ type: "shuffle" })}
        >
          Shuffle
        </button>
        <button
          className="Puzzle_reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      {state.complete && <div className="Puzzle-complete">Complete!</div>}
    </div>
  );
};

export default Puzzle;
