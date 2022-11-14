import { useState } from "react";

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



function Counter(props) {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    const nextCount = count + 1;
    setCount(nextCount)
    props.tellYourFather()
  }

  console.log("rendering Counter");
  return (
    <div>
      <h3>
        Counter {props.name}: {count}{" "}
        <button onClick={updateCount}>+</button>
      </h3>
    </div>
  );
}