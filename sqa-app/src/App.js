import './App.css';
import CipherType from './components/CipherType';
import CipherInput from './components/CipherInput'
import {useEffect, useState} from "react";
import CaesarCipher from "./CipherLogic/CaesarCipher";

function App() {
    const [cipherType, setCipherType] = useState("caesar");
    const [cipherString, setCipherString] = useState("");
    const [cipherInString, setCipherInString] = useState(true)

    let preEncryptionText, postEncryptionText;

    if (cipherType === "caesar") {
        if (cipherInString) {
            preEncryptionText = cipherString;
            postEncryptionText = CaesarCipher(cipherString, 2);
        }else {
            postEncryptionText = cipherString;
            preEncryptionText = CaesarCipher(cipherString, -Math.abs(2));
        }
    }else if (cipherType === "vigenere") {

    }

    useEffect(() => {
        //TODO Add code to rerun logic upon cipher change
    }, [cipherType])

    function handlePreCipherStringChange(e) {
        setCipherString(e.target.value)
        setCipherInString(true)
    }

    function handlePostCipherStringChange(e) {
        setCipherString(e.target.value)
        setCipherInString(false)
    }

    return (
        <>
            <h1> Cipher App</h1>
            <h2>Select Cipher Method</h2>
            <CipherType
                selectedType = {cipherType}
                onChangeType={e => setCipherType(e.target.value)}
            />
            <h2>Pre Encryption</h2>
            <CipherInput
                cipherString={preEncryptionText}
                onChangeCipherString={handlePreCipherStringChange}
            />
            <h2>Post Encryption</h2>
            <CipherInput
                cipherString={postEncryptionText}
                onChangeCipherString={handlePostCipherStringChange}
            />
        </>
    );
}

export default App;