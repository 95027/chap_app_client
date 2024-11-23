import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axiosInstance from "../axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

type User = {
  email: string;
  password: string;
};

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = async (data: User) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);

      if (res?.data) {
        await getUserByToken();
        navigate("/");
        toast.success("user logged in successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      const res = await axiosInstance.post("auth/logout");
      if (res?.data) {
        navigate("login");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const getUserByToken = async () => {
    try {
      const res = await axiosInstance.get("/auth/token");
      if (res?.data) {
        setCurrentUser(res.data?.user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserByToken();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, getUserByToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
