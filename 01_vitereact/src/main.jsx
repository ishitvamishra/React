import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1> Custom App</h1>
    </div>
  )
}

//the above code of MyApp is parsed by transpiler and made a tree like structure just like
//the reactElement structure designed below but we cannot directly pass reactElement in render
//because it expects different parameters and atrributes like the other function customElement

// const reactElement = {
//     type : 'a',
//     //object with all the attributes of the element
//     props : {
//         href : 'https://www.google.com',
//         target : '_blank',
//     },
//     children : 'Click me to visit google'
// }

//this is better way to run if you want to pass element instead of function
const customElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

//rendering the virtual DOM to the actual DOM
ReactDOM.createRoot(document.getElementById('root')).
render( 
  // customElement 
  <App />
)

//rendering the App component inside the StrictMode component to enable additional checks and warnings for potential issues in the application