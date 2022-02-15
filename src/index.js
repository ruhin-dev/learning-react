import React from "react";
import ReactDOM from "react-dom";

// const content = () => {
//   return (
//     <div>
//       <h1>Hello world</h1>


//     </div >


//   )
// }

// const content = <h1>Hello React</h1>

const Content = () => {
  const [counter, setCounter] = React.useState(0)
  return (

    <div> <h1>{counter}</h1>
      <button id="submitBtn" onClick={() => setCounter(counter + 1)}>Click</button>

    </div>
  )

}

// ReactDOM.render(content(), document.getElementById('root'))
ReactDOM.render(<div><Content /><Content /></div>, document.getElementById('root'))