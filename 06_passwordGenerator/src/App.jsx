import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  // Stores the length of the password
  // Initial length = 8
  const [length, setLength] = useState(8)

  // Determines whether numbers should be included
  // false means numbers are initially disabled
  const [numAllowed, setNumAllowed] = useState(false)

  // Determines whether special characters should be included
  const [charAllowed, setCharAllowed] = useState(false)

  // Stores the final generated password
  const [password, setPassword] = useState("")

  // Controls whether copy button should show tick mark or "Copy"
  const [copied, setCopied] = useState(false)

  // useRef creates a direct reference to DOM element
  // Here it points to the input field
  const passwordRef = useRef(null)

  /*
    useCallback memoizes the function.

    React normally recreates functions on every re-render.
    useCallback prevents unnecessary recreation unless dependencies change.

    This improves optimization and prevents unnecessary effect calls.
  */
  const passwordGenerator = useCallback(() => {

    // Temporary variable where password is built
    let pass = ""

    // Base string containing alphabets
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // If number checkbox is enabled,
    // append numbers to available characters
    if(numAllowed) str += "0123456789"

    // If special character checkbox is enabled,
    // append special symbols
    if(charAllowed) str += "!@#$%^&*.,<>/\;:?"

    /*
      Loop runs equal to password length.

      Example:
      length = 8
      loop runs 8 times
    */
    for (let i = 1; i <= length; i++) {

      /*
        Math.random() gives random decimal between 0 and 1.

        Multiplying by str.length scales it.

        Math.floor converts decimal into integer index.

        Random index is used to pick random character.
      */
      let index = Math.floor(Math.random() * str.length + 1);

      // Adds random character into password
      pass += str.charAt(index);

      /*
        Updates React state with latest password.

        State update triggers component re-render.
      */
      setPassword(pass);
    }

  }, [length, numAllowed, charAllowed, setPassword])

  /*
    Copies password to clipboard.

    useCallback again memoizes function.
  */
  const copyPassToClip = useCallback(() => {

    // Copies current password into system clipboard
    window.navigator.clipboard.writeText(password)

    // Changes button text from Copy -> ✔
    setCopied(true)

    /*
      setTimeout runs function after delay.

      After 1.5 seconds:
      ✔ changes back to Copy
    */
    setTimeout(() => {
      setCopied(false)
    }, 1500)

  }, [password]) 

  /*
    useEffect runs side effects.

    Here:
    whenever any dependency changes,
    generate a new password automatically.

    Dependencies:
    - length
    - numAllowed
    - charAllowed
    - passwordGenerator
  */
  useEffect(() => {
    passwordGenerator()
  },
  [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className = "w-full max-w-md mx-auto text-center shadow-md rounded-lg px-4 py-3 my-8 text-black-800 bg-purple-900">

        <h1 className='text-white text-center my-3'>
          Password Generator
        </h1>

        <div className = "flex shadow rounded-lg overflow-hidden mb-4">

          <input
            type="text"

            // Displays generated password
            value = {password}

            // Prevents user from manually editing input
            readOnly

            /*
              ref connects this input field
              with passwordRef variable.
            */
            ref = {passwordRef}

            className = "text-black bg-white outline-none w-full py-1 px-3"
            placeholder = "Password"
          />

          <button

            // When button clicked,
            // copyPassToClip function runs
            onClick = {copyPassToClip}

            className='outline-none bg-black text-white px-3 py-0.5 shrink-0 font-bold'
          >

            {/* 
              Ternary operator

              If copied = true
              show ✔

              otherwise show Copy
            */}
            {copied ? "✔" : "Copy"}

          </button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input 
              type="range"

              // Minimum password length
              min = {6}

              // Maximum password length
              max = {100}

              // Current slider value
              value = {length}

              /*
                Whenever slider moves,
                update length state.

                e.target.value gives slider value.
              */
              onChange = {(e) => {
                setLength(e.target.value)
              }}

              className='cursor-pointer accent-purple-400'
            />

            {/* Displays current length */}
            <label>
              Length: {length}
            </label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"

              // Initial checkbox state
              defaultChecked = {numAllowed}

              id = "numberInput"

              /*
                Toggles number inclusion.

                prev represents previous state.
                !prev flips true <-> false
              */
              onChange = {() => {
                setNumAllowed((prev) => !prev)
              }}
            />

            <label>
              Numbers
            </label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"

              defaultChecked = {charAllowed}

              id = "characterInput"

              // Toggles special character inclusion
              onChange = {() => {
                setCharAllowed((prev) => !prev)
              }}
            />

            <label>
              Characters
            </label>

          </div>

        </div>

      </div>
    </>
  )
}

export default App