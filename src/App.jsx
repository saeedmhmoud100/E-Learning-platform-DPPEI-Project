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
import Courses from './Pages/Courses/index';
import {AdminPage} from "./Pages/Admin/AdminPage";
import CourseDetails from './Pages/CourseDetails/index';
import Checkout from './Pages/Checkout/index';
import Cart from './Pages/Cart/index';
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

    function login(data) {
        setUserData({...userData, loggedIn: true, isAdmin: false, ...data})
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
        <Route path="/login" element={<Login handleLogin={login} />} />
        <Route path='/admin/*' element={<AdminPage/> } />
        <Route path='/courses' element={<Courses />}/>
        <Route path='/course-details' element={<CourseDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/*' element={<NotFound /> } />
      </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
