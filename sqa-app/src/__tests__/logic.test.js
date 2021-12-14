const CaesarCipher = require("../CipherLogic/CaesarCipher");
const VigenereCipher = require("../CipherLogic/VigenereCipher");
const DecryptVigenereCipher = require("../CipherLogic/DecryptVigenereCipher");

test('caesarCipher', () => {
    expect(CaesarCipher('a', 1)).toBe('b');
    expect(CaesarCipher('a', 2)).toBe('c');
    expect(CaesarCipher('a', 3)).toBe('d');
    expect(CaesarCipher('a', 4)).toBe('e');
    expect(CaesarCipher('a', 5)).toBe('f');
    expect(CaesarCipher('a', 6)).toBe('g');
    expect(CaesarCipher('a', 7)).toBe('h');
    expect(CaesarCipher('a', 8)).toBe('i');
    expect(CaesarCipher('a', 9)).toBe('j');
    expect(CaesarCipher('a', 10)).toBe('k');
    expect(CaesarCipher('a', 11)).toBe('l');
    expect(CaesarCipher('a', 12)).toBe('m');
    expect(CaesarCipher('a', 13)).toBe('n');
    expect(CaesarCipher('a', 14)).toBe('o');
    expect(CaesarCipher('a', 15)).toBe('p');
    expect(CaesarCipher('a', 16)).toBe('q');
    expect(CaesarCipher('a', 17)).toBe('r');
    expect(CaesarCipher('a', 18)).toBe('s');
    expect(CaesarCipher('a', 19)).toBe('t');
    expect(CaesarCipher('a', 20)).toBe('u');
    expect(CaesarCipher('a', 21)).toBe('v');
    expect(CaesarCipher('a', 22)).toBe('w');
    expect(CaesarCipher('a', 23)).toBe('x');
    expect(CaesarCipher('a', 24)).toBe('y');
    expect(CaesarCipher('a', 25)).toBe('z');
    expect(CaesarCipher('a', 26)).toBe('a');
    expect(CaesarCipher('a', 27)).toBe('b');
});

test('wordCaesarCipher', () => {
    expect(CaesarCipher('hello', 1)).toBe('ifmmp');
    expect(CaesarCipher('caesar', 2)).toBe('ecguct');
    expect(CaesarCipher('test', 3)).toBe('whvw');
})

test('encryptVigenereCipher', () => {
    expect(VigenereCipher('abc', 'dog')).toBe('DPI');
    expect(VigenereCipher('xyz', 'dog')).toBe('AMF');
    expect(VigenereCipher('abc', 'cat')).toBe('CBV');
    expect(VigenereCipher('abc', 'abc')).toBe('ACE');
    expect(VigenereCipher('abc', 'xyz')).toBe('XZB');
    expect(VigenereCipher('test', 'testWord')).toBe('MIKM')
    expect(VigenereCipher('hello', 'world')).toBe('DSCWR')
    expect(VigenereCipher('vigenere', 'cipher')).toBe('XQVLRVTM')
})

test('decryptVigenereCipher', () => {
    expect(DecryptVigenereCipher('DPI', 'dog')).toBe('ABC');
    expect(DecryptVigenereCipher('AMF', 'dog')).toBe('XYZ');
    expect(DecryptVigenereCipher('CBV', 'cat')).toBe('ABC');
    expect(DecryptVigenereCipher('ACE', 'abc')).toBe('ABC');
    expect(DecryptVigenereCipher('XZB', 'xyz')).toBe('ABC');
    expect(DecryptVigenereCipher('MIKM', 'test')).toBe('TEST')
    expect(DecryptVigenereCipher('DSCWR', 'hello')).toBe('WORLD')
    expect(DecryptVigenereCipher('XQVLRVTM', 'cipher')).toBe('VIGENERE')
})

