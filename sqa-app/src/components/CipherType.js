import React from "react";
import './CipherType.css';

export default function cipherType() {
    return (
        <div className={"selectWrapper"}>
            <select className={"selectBox"}>
                <option value={"Cipher1"}>
                    Cipher 1
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