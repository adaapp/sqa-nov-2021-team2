import React from "react";

export default function cipherType(props) {
    const {
        selectedType,
        onChangeType
    } = props;
    return (
        <div>
            <select value={selectedType} onChange={onChangeType}>
                <option value={"caesar"}>
                    Caesar Cipher
                </option>
                <option value={"vigenere"}>
                    Vigenere Cipher
                </option>
                {/*<option value={"keyword"}>*/}
                {/*    Keyword Cipher*/}
                {/*</option>*/}
            </select>
        </div>
    )
}