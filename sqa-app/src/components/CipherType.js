import React from "react";


export default function cipherType(props) {
    const {
        selectedType,
        onChangeType
    } = props;
    return (
        <div>
            <select value={selectedType} onChange={onChangeType}>
                <option value={"Cipher1"}>
                    Caesar Cipher
                </option>
                <option value={"Cipher2"}>
                    Cipher 2
                </option>
                <option value={"Cipher3"}>
                    Cipher 3
                </option>
            </select>
        </div>
    )
}