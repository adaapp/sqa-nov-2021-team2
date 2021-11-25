import React from "react";
// TODO add desc
export default function VigenereCipher() {

        function generateKey(str,key)
        {

            key=key.split("");
            if(str.length == key.length)
            return key.join("");
            else
        {
            let temp=key.length;
            for (let i = 0;i<(str.length-temp) ; i++)
        {

            key.push(key[i % ((key).length)])
        }
        }
            return key.join("");
        }

        // This function returns the encrypted text
        // generated with the help of the key
        function cipherText(str,key)
        {
            let cipher_text="";

            for (let i = 0; i < str.length; i++)
        {
            // converting in range 0-25
            let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) %26;

            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);

            cipher_text+=String.fromCharCode(x);
        }
            return cipher_text;
        }

        // This function decrypts the encrypted text
        // and returns the original text
        function originalText(cipher_text,key)
        {
            let orig_text="";

            for (let i = 0 ; i < cipher_text.length ; i++)
        {
            // converting in range 0-25
            let x = (cipher_text[i].charCodeAt(0) -
            key[i].charCodeAt(0) + 26) %26;

            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);
            orig_text+=String.fromCharCode(x);
        }
            return orig_text;
        }

        // This function will convert the lower
        // case character to Upper case
        function LowerToUpper(s)
        {
            let str =(s).split("");
            for(let i = 0; i < s.length; i++)
        {
            if(s[i] == s[i].toLowerCase())
        {
            str[i] = s[i].toUpperCase();
        }
        }
            s = str.toString();
            return s;
        }

        // Driver code
        let str = "GEEKSFORGEEKS";
        let keyword = "AYUSH";


        let key = generateKey(str, keyword);

        let cipher_text = cipherText(str, key);

        document.write("Ciphertext : "
        + cipher_text + "<br><br>");

        document.write("Original/Decrypted Text : "
        + originalText(cipher_text, key)+"<br>");
return null

}