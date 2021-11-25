import './App.css';
import CipherType from './components/CipherType';
import CipherInput from './components/CipherInput'
import {useEffect, useState} from "react";
import CaesarCipher from "./CipherLogic/CaesarCipher";
import logo from "./assets/keyIcon.png"
import ArgsBox from "./components/ArgsBox";

function App() {
    const [cipherType, setCipherType] = useState("caesar");
    const [cipherString, setCipherString] = useState("");
    const [cipherInString, setCipherInString] = useState(true);
    const [caesarCipherShift, setCaesarCipherShift] = useState();

    let preEncryptionText, postEncryptionText;

    if (cipherType === "caesar") {
        if (cipherInString) {
            preEncryptionText = cipherString;
            postEncryptionText = CaesarCipher(cipherString, caesarCipherShift);
        }else {
            postEncryptionText = cipherString;
            preEncryptionText = CaesarCipher(cipherString, -Math.abs(caesarCipherShift));
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

    function handleCaesarShiftValueChange(e){
        setCaesarCipherShift(e.target.value)
    }

    return (
        <>
            <h1> Cipher App</h1>
            <h2>Select Cipher Method</h2>
            <CipherType
                selectedType = {cipherType}
                onChangeType={e => setCipherType(e.target.value)}
            />
            <ArgsBox
                cipherTypeSelected={cipherType}
                shiftValue={caesarCipherShift}
                onShiftValueChange={handleCaesarShiftValueChange}
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
            <img src={logo} alt={"logo"} className="logo"/>
        </>
    );
}

export default App;