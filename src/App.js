import Userpage1 from './components/userpage1.js';
import User from './components/UserProf';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './components/auth';
import HomePage from './components/homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  {MapPage} from './components/Map_Assoc'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );