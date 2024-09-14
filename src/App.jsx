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
import VideoPage from "./components/VedioPage";
function App() {
  return (
   
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Form />} />
        <Route path="/inst-profile" element={<InstProfile />} />
        <Route path="/videopage" element={<VideoPage />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
