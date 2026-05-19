// In this file we are trying to create a custom react library, which will have a method called customRender() 
// that will take a react element and a container as arguments and will render the react element in the container.
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    //set the innerHTML of the element to the children of the react element, this is done to render the text content
    //of the element, if there are any children elements then we need to recursively call the customRender() method to render them as well.
    domElement.innerHTML = reactElement.children
    //set attributes of the element
    for (const prop in reactElement.props) {
        //if props contain children as attribute then we have to explicitly check and continue it.
        // if (key === 'children') continue
        //set the attributes of the element using setAttribute() method, this is done to render the attributes of the element, this is what provides link and target to the achor tag in our case.
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    //inject the element into the container using appendChild() method, this is done to render the element in the DOM.
    container.appendChild(domElement)
}

// React element is a plain JavaScript object that represents a DOM element. It has three properties: type, props, and children.
//here we are trying to see how react element is created and how it is rendered in the DOM. We will create a simple react element
// and render it in the DOM using ReactDOM.render() method.
//here we are creating a react element manually, but in real world we use JSX syntax to create react elements,
//which is then transpiled to create react elements using React.createElement() method.
const reactElement = {
    type : 'a',
    //object with all the attributes of the element
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    children : 'Click me to visit google'
}

//get the root element from the DOM, this contains the only element div provided in the index.html file
const mainContainer = document.getElementById('root')

//render the react element in the DOM using customRender function
///the react library does this work using ReactDOM.render() method, but here we are doing it manually to understand how it works under the hood
customRender(reactElement, mainContainer)
