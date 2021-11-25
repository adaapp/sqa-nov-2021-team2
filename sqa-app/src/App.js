import './App.css';
import CipherType from './components/CipherType';
import CipherInput from './components/CipherInput'
import CipherLogic from './components/CipherLogic'

function App() {
    return (
        <>
            <h1> Cipher App</h1>
            <h2>Select Cipher Method</h2>
            <CipherType />
            <h2>Pre-encrypted</h2>
            <CipherInput />
            <h2>Post Encryption</h2>
            <CipherInput />
            <CipherLogic />
        </>
    );
}

export default App;