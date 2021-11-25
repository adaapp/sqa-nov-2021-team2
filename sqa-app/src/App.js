import logo from './assets/keyIcon.png';
import './App.css';
import CipherType from './components/CipherType';
import Title from './components/Title'

function App() {
    return (
        <>
            <div className={"App"}>
                <Title />
                <CipherType />
            </div>
        </>
    );
}

export default App;