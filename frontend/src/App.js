import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";
import Profile from "./pages/profile/Profile.tsx";
import Register from "./pages/register/Register.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* :usernameで任意の文字列 */}
        <Route exact path="/profile/:username" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
