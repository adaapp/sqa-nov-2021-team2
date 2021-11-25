import './App.css';
import CipherType from './components/CipherType';
import CipherInput from './components/CipherInput'
import {useEffect, useState} from "react";
import CipherLogic from './CipherLogic/CeaserCipher'

function App() {
    const [cipherType, setCipherType] = useState("Cipher1");
    const [cipherString, setCipherString] = useState("abc");
    const [cipherInString, setCipherInString] = useState(true)

    let preEncryptionText, postEncryptionText;
    if (cipherInString) {
        preEncryptionText = cipherString;
        postEncryptionText = cipherString + "-POST";
    }else {
        postEncryptionText = cipherString;
        preEncryptionText = cipherString + "-PRE";
    }

    useEffect(() => {
        console.log("CIPHER CHANGE - RERUN LOGIC HERE")
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