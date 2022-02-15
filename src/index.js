import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {

  render() {
    return (
      <div>
        <h1>{new Date().toLocaleTimeString(this.props.locale)} </h1>
        <span>Comment : {this.props.children}</span>
      </div>
    )
  }
}

// const content = new Component


// ReactDOM.render(content.print(), document.getElementById('root'))
ReactDOM.render(<Test locale="bn-BD"> Props in class component </Test>, document.getElementById('root'))