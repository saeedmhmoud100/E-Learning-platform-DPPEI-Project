import '@popperjs/core';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {AdminPage} from "./Pages/AdminPage";
import NotFound from './Pages/NotFound/NotFound';
import {useEffect, useState} from "react";
function App() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch('/data/user/userData.json').then(response => response.json()).then(data => setUserData(data));
    },[]);


    function logout() {
        setUserData({...userData, loggedIn: false, isAdmin: false})
    }

    function login() {
        setUserData({...userData, loggedIn: true, isAdmin: false})
    }

    function changeAdmin() {
        setUserData({...userData, loggedIn: true, isAdmin: !userData.isAdmin})
    }

    function handleRegister(data){
        console.log(data)
        setUserData({...userData, loggedIn: true, isAdmin: false, ...data})
    }

  return (
    <div className="App">
        <Navbar changeAdmin={changeAdmin} login={login} logout={logout} userData={userData}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register handleRegister={handleRegister} />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin/*' element={<AdminPage/> } />
        <Route path='/*' element={<NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
