import { useReducer, useState } from "react";

function Counters() {
  const [totalCount, setTotalCount] = useState(0);

  const updateTotalCount = () => {
    setTotalCount(totalCount + 1);
  };

  console.log("rendering Counters");
  return (
    <div className="Counters">
      <Totals totals={totalCount} />
      <Counter name="1" tellYourFather={updateTotalCount} />
      <Counter name="2" tellYourFather={updateTotalCount} />
      <Counter name="3" tellYourFather={updateTotalCount} />
      <Counter name="4" tellYourFather={updateTotalCount} />
      <Counter name="5" tellYourFather={updateTotalCount} />
    </div>
  );
}

export default Counters;

function Totals({ totals }) {
  return <h1>{totals}</h1>;
}

const initialState = {
  count: 0,
  sumando: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        sumando: state.sumando,
        count: state.count + state.sumando,
      };
    case "decrement":
      return {
        sumando: state.sumando,
        count: state.count - state.sumando,
      };
    case "changeSumando":
      return {
        sumando: action.payload,
        count: state.count,
      };
    default:
      throw new Error("Unexpected action type" + action.type);
  }
}

function Counter(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const changeSumando = (e) => {
    console.log(typeof e.target.value);
    const value = Number(e.target.value);
    if (Number.isNaN(value)) {
      dispatch({ type: "changeSumando", payload: 1 });
    } else {
      dispatch({ type: "changeSumando", payload: value });
    }
  };
  return (
    <div>
      <h3>
        <button onClick={decrement}>-</button>
        <input value={state.sumando} onChange={changeSumando}></input>{" "}
        {state.count} <button onClick={increment}>+</button>
      </h3>
    </div>
  );
}
