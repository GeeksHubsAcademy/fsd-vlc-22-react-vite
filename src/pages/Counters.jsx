import { useState, useReducer } from "react";

function Counters() {
  const [totalCount, setTotalCount] = useState(0);

  const updateTotalCount = () => {
    setTotalCount(totalCount + 1);
  }


  console.log("rendering Counters");
  return (
    <div className="Counters">
      <Totals totals={totalCount}/>
      <Counter name="1" tellYourFather={updateTotalCount} />
      <Counter name="2" tellYourFather={updateTotalCount} />
      <Counter name="3" tellYourFather={updateTotalCount} />
      <Counter name="4" tellYourFather={updateTotalCount} />
      <Counter name="5" tellYourFather={updateTotalCount} />
    </div>
  );
}

export default Counters;

function Totals({totals}) {
    return (<h1>{totals}</h1>)
}


const initialState = {
  count: 0,
  sumando: 1,
};

function reducer(state, action){
    switch(action.type){
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            throw new Error('Unexpected action type' + action.type);
    }
}

function Counter(props) {
  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({type: "increment"});
  }
  const decrement = () => {
    dispatch({type: "decrement"});
  }
  const changeSumando = (e) => {
    dispatch({type: "changeSumando", payload: e.target.value});

  }
  return (
    <div>
      <h3>
        <button onClick={decrement}>-</button>
        <input value={sumando} onChange={changeSumando}></input> {count}{" "}
        <button onClick={increment}>+</button>
      </h3>
    </div>
  );
}