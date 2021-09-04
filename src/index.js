// Importing react  and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Creating component
const App = () => {
    return <div>Hello world!</div>
}

//  Take the react component and show it to the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);