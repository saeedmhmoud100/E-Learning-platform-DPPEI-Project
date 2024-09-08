import '@popperjs/core';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {Route, Routes} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {AdminPage} from "./Pages/AdminPage";
import NotFound from './Pages/NotFound/NotFound';
import {useEffect, useState} from "react";
import UserProfile from './Pages/UserProfile/UserProfile';
import EditUserProfile from './Pages/EditUserProfile/EditUserProfile';
import UserCourses from './Pages/UserCourses/UserCourses';
import PurchaseHistory from './Pages/PurchaseHistory/PurchaseHistory';
import HelpSupport from './HelpSupport/HelpSupport';

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
        <Route path="/profile"element={<UserProfile/>} />
        <Route path="/profile/edit" element={<EditUserProfile/>}/>
        <Route path="/profile/courses" element={<UserCourses/>}/>
        <Route path="/profile/purchase-history" element={<PurchaseHistory/>}/>
        <Route path="/help-and-support" element={<HelpSupport/>}/>
      </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
