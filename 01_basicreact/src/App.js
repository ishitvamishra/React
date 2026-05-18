
import Chai from "./chai";

function App() {
  return (
    <>
    <Chai />
    <h2>Hello World from App.js</h2>
    </>
    
  );
}

export default App;

//Best practices for React components:
//1. Use Capital case for component names: React components should be named using PascalCase (e.g., MyComponent) to distinguish them from regular HTML elements.
//2. Keep components small and focused: Each component should have a single responsibility and should not be too large. This makes it easier to maintain and reuse components.
//3. Use props to pass data: Props are used to pass data from parent components to child components. This allows for better separation of concerns and makes components more reusable.
//4. For vite react use .jsx extension for component files: This helps to differentiate between regular JavaScript files and React component files, making it easier to identify and manage components in the project.
//5. Use functional components: Functional components are simpler and easier to read than class components. They also allow for the use of hooks, which can simplify state management and side effects in React applications.
//6. Use fragments to group multiple elements: When returning multiple elements from a component, use React fragments (<>...</>) to avoid unnecessary wrapper elements in the DOM.
//7. In create React app use .js extension for component files: This is a common convention in React projects created with Create React App, and it helps to maintain consistency across the project. However, using .jsx is also acceptable and can be used if you prefer to clearly indicate that the file contains JSX syntax. but .jsx can also be used
//8. React is SPA (Single Page Application) framework: React is designed to build single-page applications where the entire application runs on a single HTML page. This allows for faster navigation and a more seamless user experience, as only the necessary components are updated when the user interacts with the application, rather than reloading the entire page.
