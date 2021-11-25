import React from "react";
import cipherType from "./CipherType";

export default function argsBox(props) {
    const {
        cipherTypeSelected,
        shiftValue,
        onShiftValueChange
    } = props;
    return (
        <div>
            <input type="string" className="smallInput" placeholder={"Number of shifts"} value={shiftValue} onChange={onShiftValueChange} style={{ visibility: cipherTypeSelected !== "caesar"? 'hidden': 'visible'}}/>
        </div>
    )
}