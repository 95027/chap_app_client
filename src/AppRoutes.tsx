import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

const AppRoutes = () => {
  return (
    <div className="mb-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
