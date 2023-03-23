import { useDispatch, useSelector } from "react-redux";
import "./CounterApp.css";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../../store/slices/counter";

function CounterApp() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
      <h1>{counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
      </div>
    </div>
  );
}

export default CounterApp;
