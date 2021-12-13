import React from "react";

export default function cipherInput(props) {
    const {
        cipherString,
        onChangeCipherString
    } = props;
    return (
        <div>
            <input id={"cipherInput"} type="string" placeholder={"Enter text here"} className="input" value={cipherString} onChange={onChangeCipherString}/>
        </div>
    )
}