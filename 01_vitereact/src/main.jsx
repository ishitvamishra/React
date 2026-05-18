import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //rendering the virtual DOM to the actual DOM
  <StrictMode>
    <App />  
  </StrictMode>,
)

//rendering the App component inside the StrictMode component to enable additional checks and warnings for potential issues in the application