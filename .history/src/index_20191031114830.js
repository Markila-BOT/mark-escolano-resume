import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App const backGroundStyle = {
    color:
      'linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 30%,rgb(58, 102, 183) 30%,rgb(87, 179, 194) 100%)',
  }; />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
