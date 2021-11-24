import logo from './assets/keyIcon.png';
import {BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
// import {Switch} from "react-switch";
import navbar from "./components/navbar"
import Navbar from "./components/navbar.js";
import EncryptionMethod1 from "./pages/navbar/encryptionMethod1"
import EncryptionMethod2 from "./pages/navbar/encryptionMethod2"
import EncryptionMethod3 from "./pages/navbar/encryptionMethod3"
import EncryptionMethod4 from "./pages/navbar/encryptionMethod4"
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt-2" style={{ marginTop: 40 }}>
                <Routes>
                    <Route exact path="/">
                        <EncryptionMethod1 />
                    </Route>
                    <Route path="/2">
                        <EncryptionMethod2 />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );


    // return (
        // <div className="App">
        //    <header className="App-header">
        //        <Router>
        //            <NavBar />
        //            <Routes>
        //                <Route path='/' exact component={EncryptionMethod1} />
        //                <Route path='/2' exact component={EncryptionMethod2} />
        //                <Route path='/3' exact component={EncryptionMethod3} />
        //                <Route path='/4' exact component={EncryptionMethod4} />
        //            </Routes>
        //        </Router>
        //        <div className="headerContainer">
        //            <div className="headerBlock">
        //                <img src={logo} className="App-logo" alt="logo" />
        //            </div>
        //            <div className="headerBlock">
        //                <p>
        //                    Cipher App
        //                </p>
        //            </div>
        //        </div>
        //    </header>
        //  </div>
// );
}

export default App;