/*
Code used for decrypting Vigenere Cipher
Takes 2 args
str Cipher text, str key
 */

import VigenereCipher from "./VigenereCipher";

export default function DecryptVigenereCipher(cipher_text, key) {

    let orig_text="";
    let newKey

    key=key.split("");
    if(cipher_text.length === key.length)
        newKey =  key.join("");
    else
    {
        let temp=key.length;
        for (let i = 0;i<(cipher_text.length-temp) ; i++)
        {

            key.push(key[i % ((key).length)])
        }
    }
    newKey = key.join("");

    for (let i = 0 ; i < cipher_text.length ; i++) {

        if ((newKey === undefined) || (newKey === '') || (newKey === null)){
            newKey = "NO KEY"
        }

        // converting in range 0-25
        if (cipher_text[i] !== undefined){
            let x = (((cipher_text[i].charCodeAt(0)) - (newKey[i].charCodeAt(0)) + 26) % 26);

            // convert into alphabets(ASCII)
            x += ('A'.charCodeAt(0));
            orig_text += (String.fromCharCode(x));
        }
    }

    return orig_text;
}