import React from "react";

export default function argsBox(props) {
    const {
        cipherTypeSelected,
        shiftValue,
        onShiftValueChange,
        vigenereKey,
        onVigenereKeyChange
    } = props;
    return (
        <div >
            <div style={{ visibility: cipherTypeSelected !== "caesar"? 'hidden': 'visible'}}>
                <input type="string" className="smallInput" placeholder={"Number of shifts"} value={shiftValue} onChange={onShiftValueChange} />
            </div>
            <div style={{ visibility: cipherTypeSelected !== "vigenere"? 'hidden': 'visible'}}>
                <input type="string" className="smallInput" placeholder={"Enter Key"} value={vigenereKey} onChange={onVigenereKeyChange} />
            </div>
        </div>
    )
}
