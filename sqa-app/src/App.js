import './App.css';
import CipherType from './components/CipherType';
import CipherInput from './components/CipherInput'
import {useEffect, useState} from "react";
import CaesarCipher from "./CipherLogic/CaesarCipher";
import logo from "./assets/keyIcon.png"
import ArgsBox from "./components/ArgsBox";
import VigenereCipher from "./CipherLogic/VigenereCipher";
import DecryptVigenereCipher from "./CipherLogic/DecryptVigenereCipher";
import KeywordCipher from "./CipherLogic/KeywordCipher";
import DecryptKeywordCipher from "./CipherLogic/DecryptKeywordCipher";
import cipherInput from "./components/CipherInput";

function App() {
    const [cipherType, setCipherType] = useState("caesar");
    const [cipherString, setCipherString] = useState("");
    const [cipherInString, setCipherInString] = useState(true);
    const [caesarCipherShift, setCaesarCipherShift] = useState();
    const [userVigenereKey, setUserVigenereKey] = useState("NO KEY");
    const [keywordUserKey, setKeywordUserKey] = useState("NO KEY");

    let preEncryptionText, postEncryptionText;

    if (cipherType === "caesar") {
        if (cipherInString) {
            preEncryptionText = cipherString;
            postEncryptionText = CaesarCipher(cipherString, caesarCipherShift);
        }else {
            postEncryptionText = cipherString;
            if (caesarCipherShift >=0){
                preEncryptionText = CaesarCipher(cipherString, -Math.abs(caesarCipherShift));
            }else {
                preEncryptionText = CaesarCipher(cipherString, (-Math.abs(caesarCipherShift))*-1);
            }

        }
    }else if (cipherType === "vigenere") {
        if ((userVigenereKey !== undefined) || (userVigenereKey !== '')) {
            if (cipherInString) {
                preEncryptionText = cipherString;
                postEncryptionText = VigenereCipher(cipherString, userVigenereKey);
            } else {
                preEncryptionText = DecryptVigenereCipher(cipherString, userVigenereKey)
                postEncryptionText = cipherString;
            }
        }else {
            preEncryptionText = "NO KEY"
            postEncryptionText = "NO KEY"
        }
    }else if (cipherType === "keyword"){
        if ((keywordUserKey !== undefined) || (keywordUserKey !== '')){
            if (cipherInString) {
                preEncryptionText = cipherString;
                postEncryptionText = KeywordCipher(cipherString, keywordUserKey);
            } else {
                preEncryptionText = DecryptKeywordCipher(cipherString, keywordUserKey);
                postEncryptionText = cipherString;
            }
        }else {
            preEncryptionText = "NO KEY"
            postEncryptionText = "NO KEY"
        }
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

    function handleVigenereKeyChange(e){
        setUserVigenereKey(e.target.value)
    }

    function  handleKeywordKeyChange(e){
        setKeywordUserKey(e.target.value)
    }

    return (
        <>
            <h1 id={"Title"}> Cipher App</h1>
            <h2 id={"SelectCipherMethodHeading"}>Select Cipher Method</h2>
            <CipherType
                selectedType = {cipherType}
                onChangeType={e => setCipherType(e.target.value)}
            />
            <ArgsBox
                cipherTypeSelected={cipherType}
                shiftValue={caesarCipherShift}
                onShiftValueChange={handleCaesarShiftValueChange}
                vigenereKey={userVigenereKey}
                onVigenereKeyChange={handleVigenereKeyChange}
                keywordKey={keywordUserKey}
                onKeywordKeyChange={handleKeywordKeyChange}
            />
            <h2 id={"preEncryptionHeader"}>Pre Encryption</h2>
            <CipherInput
                id={"preEncryptionInput"}
                cipherString={preEncryptionText}
                onChangeCipherString={handlePreCipherStringChange}
            />
            <h2 id={"postEncryptionHeader"}>Post Encryption</h2>
            <CipherInput
                id={"postEncryptionInput"}
                cipherString={postEncryptionText}
                onChangeCipherString={handlePostCipherStringChange}
            />
            <img id={"logoImage"} src={logo} alt={"logo"} className="logo"/>
        </>
    );
}

export default App;