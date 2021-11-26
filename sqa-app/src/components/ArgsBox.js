import React from "react";

export default function argsBox(props) {
    const {
        cipherTypeSelected,
        shiftValue,
        onShiftValueChange,
        vigenereKey,
        onVigenereKeyChange,
        keywordKey,
        onKeywordKeyChange
    } = props;
    return (
        <div >
            {cipherTypeSelected === "caesar" ? (
                <input type="number" className="smallInput" placeholder={"Number of shifts"} value={shiftValue} onChange={onShiftValueChange} />
            ) : cipherTypeSelected === "vigenere" ? (
                <input type="string" className="smallInput" placeholder={"Enter Key"} value={vigenereKey} onChange={onVigenereKeyChange} />
            ) : cipherTypeSelected === "keyword" ? (
                <input type="string" className="smallInput" placeholder={"Enter Key"} value={keywordKey} onChange={onKeywordKeyChange} />
            ) : (
                <div/>
            )}
        </div>
    )
}
