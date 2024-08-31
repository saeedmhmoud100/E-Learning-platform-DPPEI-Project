import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Register} from "./Pages/Register";
import {Login} from "./Pages/Login";
import {Home} from "./Pages/Home";
import {Navbar} from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
