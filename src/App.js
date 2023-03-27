import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_CLEAR,
  MEMORY_PLUS,
  MEMORY_RECALL,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => dispatch({ type: MEMORY_PLUS, payload: "M+" })}
              />
              <CalcButton
                value={"MR"}
                onClick={() => dispatch({ type: MEMORY_RECALL, payload: "MR" })}
              />
              <CalcButton
                value={"MC"}
                onClick={() => dispatch({ type: MEMORY_CLEAR, payload: "MC" })}
              />
            </div>

            <div className="row">
            <CalcButton value={1} onClick={() => dispatch({ type: ADD_ONE, payload: 1 })} />


              <CalcButton
                value={2}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 2 })}
              />
              <CalcButton
                value={3}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 3 })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 5 })}
              />
              <CalcButton
                value={5}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 6 })}
              />
              <CalcButton
                value={6}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 7 })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 7 })}
              />
              <CalcButton
                value={8}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 8 })}
              />
              <CalcButton
                value={9}
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 9 })}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() =>
                  dispatch({ type: CHANGE_OPERATION, payload: "+" })
                }
              />
              <CalcButton
                value={"*"}
                onClick={() =>
                  dispatch({ type: CHANGE_OPERATION, payload: "*" })
                }
              />
              <CalcButton
                value={"-"}
                onClick={() =>
                  dispatch({ type: CHANGE_OPERATION, payload: "-" })
                }
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch({ type: CLEAR_DISPLAY, payload: "CE" })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
