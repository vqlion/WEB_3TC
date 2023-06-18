
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './pages/AuthPage';
import Userpage1 from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import './App.css';
import { Map } from './components/Map'
import Userdata from './components/UserData';
import UserAssoList from './components/UserAssoList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="profile" element={<Userpage1 />}>
            <Route path="info" element={<Userdata />} />
            <Route path="asso" element={<UserAssoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
