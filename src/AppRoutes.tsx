import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { useAuth } from "./context/AuthContext";

const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <div className="mb-5">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {currentUser ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/*" element={<Login />} />
        )}
      </Routes>
    </div>
  );
};

export default AppRoutes;
