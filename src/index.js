import React from "react";
import ReactDOM from "react-dom";


const Content = ({ locale }) => {
  return (
    <h1 className="header">Time {new Date().toLocaleTimeString(locale)}</h1>
  )
}
ReactDOM.render(<Content locale="bn-BD" />, document.getElementById('root'))