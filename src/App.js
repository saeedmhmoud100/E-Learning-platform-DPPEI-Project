import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core'
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {AdminPage} from "./Pages/AdminPage";
import NotFound from './Pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin/*' element={<AdminPage/> } />
        <Route path='/*' element={<NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
