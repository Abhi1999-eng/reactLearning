import React from "react";
import * as Math from "./Math";
export default function Lists() {
    return (
        <div>
            <ul>
                <li>{Math.PI()}</li>
                <li>{Math.DoublePI()}</li>
                <li>{Math.TriplePI()}</li>
            </ul>
        </div>
    );
}