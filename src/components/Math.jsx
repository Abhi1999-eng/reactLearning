import React from "react";

var pi = 3.14159265358979323846;

function PI() {
    return pi;
}

function DoublePI() {
    return pi*2;
}

function TriplePI() {
    return pi*3;
}

export default PI;

export {DoublePI, TriplePI };