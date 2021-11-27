// TODO Add decs
// TODO Link with frontend
export default function DecryptKeywordCipher(msg, key) {

    let plaintext = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encodedKey = encoder(key)
    let encodedMsg = deCipheredIt(msg, encodedKey)
    function encoder(key)
    {
        let encoded = "";

        // This array represents the
        // 26 letters of alphabets
        let arr = new Array(26);
        for(let i=0;i<26;i++)
        {
            arr[i]=false;
        }

        // This loop inserts the keyword
        // at the start of the encoded string
        for (let i = 0; i < key.length; i++)
        {
            if (key[i].charCodeAt(0) >= 'A'.charCodeAt(0) &&
                key[i].charCodeAt(0) <= 'Z'.charCodeAt(0))
            {
                // To check whether the character is inserted
                // earlier in the encoded string or not
                if (arr[key[i].charCodeAt(0) - 65] === false)
                {
                    encoded += ( key[i]);
                    arr[key[i].charCodeAt(0) - 65] = true;
                }
            }
            else if (key[i].charCodeAt(0) >= 'a'.charCodeAt(0) &&
                key[i].charCodeAt(0) <= 'z'.charCodeAt(0))
            {
                if (arr[key[i].charCodeAt(0) - 97] === false)
                {
                    encoded +=
                        String.fromCharCode(key[i].charCodeAt(0) - 32);
                    arr[key[i].charCodeAt(0) - 97] = true;
                }
            }
        }

        // This loop inserts the remaining
        // characters in the encoded string.
        for (let i = 0; i < 26; i++)
        {
            if (arr[i] === false)
            {
                arr[i] = true;
                encoded += String.fromCharCode(i + 65);
            }
        }
        return encoded;
    }

// Function that generates encodes(cipher) the message
    function deCipheredIt(msg,encoded)
    {
        const enc = [];
        for(let i=0;i<encoded.length;i++)
        {
            console.log(encoded[i]);
            enc.push(encoded[i]);
        }

        console.log("deCiph: " + encoded);
        console.log("msg: " + msg);
        let cipher = "";

        // This loop ciphered the message.
        // Spaces, special characters and numbers remain same.
        for (let i = 0; i < msg.length; i++)
        {
            if (msg[i] >= 'a' && msg[i] <= 'z')
            {
                let pos = (enc[(msg[i].charCodeAt(0) - 32)].charCodeAt(0));
                console.log("Lower case pos: " + pos);
                cipher += (plaintext[pos]);
                console.log("Lower case cipher: " + cipher);
            }
            else if (msg[i] >= 'A' && msg[i] <= 'Z')
            {
                let pos = (enc[(msg[i].charCodeAt(0))].charCodeAt(0));
                console.log("Upper case pos: " + pos);
                cipher += (plaintext[pos]);
                console.log("Upper case cipher: " + cipher);
            }
            else
            {
                cipher += msg[i];
            }
        }
        console.log("Cipher: " + cipher);
        return cipher;
    }
    console.log("Msg: " + encodedMsg);
    return encodedMsg;
}