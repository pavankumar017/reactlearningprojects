import "./App.css";
import "./styles.css";
import { useReducer } from "react";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
function reducer(state, { type, payload }) {}

function App() {
  const [{ currentoperand, previousopernad, operation }, dispatcg] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-opernad">
          {previousopernad} {operation}
        </div>
        <div className="current-operand">{currentoperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
