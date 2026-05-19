import Chai from './chai.jsx'

// function App() {
//   return (
//    <h1>Hello World</h1> //instead of returning a single element, we can return multiple elements
//                           by wrapping them in a parent element like a div or a fragment. This allows us to create more complex UI structures and organize our components better.
//   )
// }

function App() {
  const username = "variable passed"
  //the thing passed inside the braces are evaluated expression, we cannot pass a evaluating expression
  //the reason we cannot write a evaluating expression is because the transpiler that expects object(like customElement)
  //has some syntax and atrributes and you cannot write evaluating expressions inside objects that transpiler is expecting
  return (
    //instead of returning a html element, we can return a React component like Chai. This allows us to 
    // create reusable components and build more complex UIs by composing smaller components together.
    <>
   <Chai /> 
    <h1>Passing variable :  {username}</h1>
    </>
  )
}

export default App
