import logo from './assets/keyIcon.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navbar from "./components/navbar"
import EncryptionMethod1 from "./pages/navbar/encryptionMethod1"
import EncryptionMethod2 from "./pages/navbar/encryptionMethod2"
import EncryptionMethod3 from "./pages/navbar/encryptionMethod3"
import EncryptionMethod4 from "./pages/navbar/encryptionMethod4"
import './App.css';

function App() {
  return (
      <Router>
          <navbar />
          <Routes>
              <Route path='/' exact component={EncryptionMethod1} />
              <Route path='/cats' component={EncryptionMethod2} />
              <Route path='/sheeps' component={EncryptionMethod3} />
              <Route path='/goats' component={EncryptionMethod4} />
          </Routes>
      </Router>
    // <div className="App">
    //   <header className="App-header">
    //       <div className="headerContainer">
    //           <div className="headerBlock">
    //               <img src={logo} className="App-logo" alt="logo" />
    //           </div>
    //           <div className="headerBlock">
    //               <p>
    //                   Cipher App
    //               </p>
    //           </div>
    //       </div>
    //       <div>
    //
    //       </div>
    //   </header>
    // </div>
  );
}

export default App;