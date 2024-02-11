import React from "react";
import  pi, {DoublePI, TriplePI} from "./Math";
export default function Lists() {
    return (
        <div>
            <ul>
                <li>{pi()}</li>
                <li>{DoublePI()}</li>
                <li>{TriplePI()}</li>
            </ul>
        </div>
    );
}