export default function VigenereCipher(str, keyword) {

        function generateKey(str,key) {
            key=key.split("");
            if(str.length === key.length)
                return key.join("");
            else {
                let temp=key.length;
                for (let i = 0;i<(str.length-temp) ; i++) {
                    key.push(key[i % ((key).length)])
                }
            }
            return key.join("");
        }

        // This function returns the encrypted text
        // generated with the help of the key
        function cipherText(str,key)
        {
            if ((key === undefined) || (key === '') || (key === null)){
                key = "NO KEY"
            }
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


        // This function will convert the lower
        // case character to Upper case
        function LowerToUpper(s)
        {
            let str =(s).split("");
            for(let i = 0; i < s.length; i++)
        {
            if(s[i] === s[i].toLowerCase())
        {
            str[i] = s[i].toUpperCase();
        }
        }
            s = str.toString();
            return s;
        }

        let key = generateKey(str, keyword);

        return cipherText(str, key);
}