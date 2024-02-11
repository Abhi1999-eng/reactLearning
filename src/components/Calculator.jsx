import React from "react";

function add (a, b) {
    return <div>{a + b}</div>;
}

function subtract (a, b) {
    return <div>{a - b}</div>;
}

function multiply (a, b) {
    return <div>{a * b}</div>
}

function divide (a, b) {
    return <div>{a / b}</div>
}



export default add;
export {subtract, multiply, divide};

