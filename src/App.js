
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './components/auth';
import Userpage1 from './components/userpage1';
import HomePage from './components/homepage';
import './App.css';
import { MapPage } from './components/Map_Assoc'
import Userdata from './components/info';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="profile" element={<Userpage1 />}>
            <Route path="info" element={<Userdata />} />
            <Route path="asso" element={<Userdata />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
