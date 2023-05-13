import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../Store/CounterSlice";

const Counter = () => {
  const showcounter = useSelector((state) => state.counterreducer.showcounter);
  const counter = useSelector((state) => state.counterreducer.counter);
  const dispatch = useDispatch();

  const incrementby5Handler = () => {
    dispatch(counterAction.incrementby5(5));
  };
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const incrementby2Handler = () => {
    dispatch(counterAction.incrementby2(2));
  };
  const decrementby2Handler = () => {
    dispatch(counterAction.decrementby2(2));
  };
  return (
    <div>
      <div style={{ backgroundColor: "white", padding: "20px" }}>
        {showcounter && <h1 style={{ color: "black" }}>{counter}</h1>}
        <div>
          <button onClick={incrementby5Handler}> INCREMENT BY 5</button>
          <button
            onClick={incrementHandler}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            INCREMENT
          </button>
          <button onClick={incrementby2Handler}> INCREMENT BY 2</button>
          <button
            onClick={decrementHandler}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {" "}
            DECREMENT
          </button>
          <button onClick={decrementby2Handler}> DECREMENT BY 2</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
