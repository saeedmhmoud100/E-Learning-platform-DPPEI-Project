import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@popperjs/core";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Form from './components/Form'
import { Route, Routes } from "react-router-dom";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import InstProfile from "./components/InstProfile";
<<<<<<< Updated upstream
=======
import AddCourseForm from "./components/AddCourseForm";
import Wishlist from "./Pages/Wishlist";
import Footer from "./components/Footer";
import VedioPage from './components/VedioPage';

>>>>>>> Stashed changes
function App() {
  return (
   
    <div className="App">
<<<<<<< Updated upstream
      <Navbar />
=======
        <Navbar changeRule={changeRule} login={login} logout={logout} userData={userData}/>
        <VedioPage />
>>>>>>> Stashed changes
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Form />} />
        <Route path="/inst-profile" element={<InstProfile />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
