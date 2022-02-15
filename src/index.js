import React from "react";
import ReactDOM from "react-dom";


const Content = () => {
  const [counter, setCounter] = React.useState(0)
  return (
    <div>
      <h2 className="heading">{counter}</h2>
      <button className="btn" type="button" onClick={() => setCounter(counter + 1)}>+Inc</button>
      <button className="btn" type="button" onClick={() => setCounter(counter - 1)}>-Dec</button>
    </div>
  )
}

ReactDOM.render(<div className="container">
  <Content />
  <Content />
  <Content />
</div>, document.getElementById('root'))