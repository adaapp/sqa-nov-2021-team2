import React from "react";

export default function cipherInput(props) {
    const {
        cipherString,
        onChangeCipherString
    } = props;
    return (
        <div>
            <input type="string" placeholder={"Enter text here"} className="input" value={cipherString.toUpperCase()} onChange={onChangeCipherString}/>
        </div>
    )
}