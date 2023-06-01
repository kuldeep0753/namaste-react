import React from "react"; //It;s a heart of react: every thing is present inside it
import ReactDOM from "react-dom/client"; //it;s require to deal with the DOM api with react
/**
 * Nesting structure of element
 * <div id="parent">
        <div id="child">
            <h1 id="heading">I am h1 TAG</h1>
        </div>
    </div>
    ------------
    <div id="parent">
        <div id="child1">
            <h1 id="heading">I am h1 TAG</h1>
        </div>
        <div id="child2">
            <h1 id="heading">I am h1 TAG</h1>
        </div>
    </div>
    -----------
    <div id="parent">
        <div id="child">
            <h1 id="heading">I am h1 TAG</h1>
        </div>
    </div>
    <div id="parent">
        <div id="child1 ">
            <h1 id="heading">I am h1 TAG</h1>
        </div>
    </div>
 * 
 */

// Without JSX
// const nest = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, `I am h1 TAG image 😎😎`)
//   )
// );

// JSX
// const jsxheading = <h1>Now JSX startimage</h1>;
// // console.log(nest);
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root1.render(jsxheading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", head: "data" },
//   "HI i am reactJS"
// );
// console.log(heading); //giving object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// ----------- Basic React component-------

// const Heading = () => <h1>Hi I am Functional component🚀</h1>;
// console.log(Heading);

// const Main=()=>{
//     return(<>

//     <b>Main take heading component</b>
//     {/* Below are giving same output */}
//     {Heading()}
//     <Heading></Heading>
//     <Heading/>

//     </>)
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// root.render(<Main />);
