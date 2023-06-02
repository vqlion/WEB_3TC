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
