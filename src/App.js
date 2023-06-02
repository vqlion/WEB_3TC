import Userpage1 from './components/userpage1.js';
import User from './components/UserProf';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return ( <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p><h1>Home Page</h1></p>} />
        <Route path="/UserProf" element={<User />} />
        <Route path="/userpage1" element={<Userpage1 />} />
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